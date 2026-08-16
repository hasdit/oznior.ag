import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { OrderStatus, PaymentMethod, PaymentStatus } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      customerName,
      customerPhone,
      address,
      paymentMethod,
      last4Digits,
      variantId,
      quantity = 1,
    } = body;

    if (!customerName || !customerPhone || !address || !paymentMethod) {
      return NextResponse.json(
        { error: "Customer name, phone, address, and payment method are required" },
        { status: 400 }
      );
    }

    const orderNumber = `OZN-${Math.floor(1000 + Math.random() * 9000)}`;

    const subtotal = 8500.0;
    const shippingFee = customerPhone.startsWith("017") || customerPhone.startsWith("018") ? 80.0 : 120.0;
    const total = subtotal + shippingFee;

    const newOrder = await prisma.order.create({
      data: {
        orderNumber,
        customerName,
        customerPhone,
        division: "Dhaka",
        district: "Dhaka",
        area: "Dhanmondi",
        address,
        subtotal,
        discount: 0,
        shippingFee,
        total,
        status: OrderStatus.PENDING,
        paymentMethod: paymentMethod as PaymentMethod,
        paymentStatus: PaymentStatus.PENDING_VERIFICATION,
        last4Digits: last4Digits || null,
        paymentVerifications: {
          create: {
            paymentMethod: paymentMethod as PaymentMethod,
            senderNumber: customerPhone,
            last4Digits: last4Digits || null,
            status: "PENDING",
          },
        },
        statusHistory: {
          create: {
            previousStatus: OrderStatus.PENDING,
            newStatus: OrderStatus.PENDING,
            notes: "Order placed via single-page MFS checkout.",
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      orderNumber: newOrder.orderNumber,
      orderId: newOrder.id,
      total: newOrder.total,
    });
  } catch (error: any) {
    console.error("Checkout API Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to process checkout" },
      { status: 500 }
    );
  }
}
