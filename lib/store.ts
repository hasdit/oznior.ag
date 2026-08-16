import { create } from "zustand";

export interface CartItem {
  id: string;
  name: string;
  slug: string;
  volumeMl: number;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface UIStore {
  // Cart
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string, volumeMl: number) => void;
  updateQuantity: (id: string, volumeMl: number, delta: number) => void;
  openCart: () => void;
  closeCart: () => void;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (slug: string) => void;

  // Search Modal
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;

  // Mobile Drawer
  isMobileDrawerOpen: boolean;
  openMobileDrawer: () => void;
  closeMobileDrawer: () => void;

  // Fragrance Finder Modal
  isFinderOpen: boolean;
  openFinder: () => void;
  closeFinder: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  cart: [
    {
      id: "p1",
      name: "Royale Oud Concentré",
      slug: "royale-oud-concentre",
      volumeMl: 50,
      price: 8500,
      imageUrl: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=400&q=80",
      quantity: 1,
    },
  ],
  isCartOpen: false,
  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find(
        (i) => i.slug === item.slug && i.volumeMl === item.volumeMl
      );
      let updated;
      if (existing) {
        updated = state.cart.map((i) =>
          i.slug === item.slug && i.volumeMl === item.volumeMl
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        updated = [...state.cart, { ...item, quantity: 1 }];
      }
      return { cart: updated, isCartOpen: true };
    }),
  removeFromCart: (id, volumeMl) =>
    set((state) => ({
      cart: state.cart.filter((i) => !(i.id === id && i.volumeMl === volumeMl)),
    })),
  updateQuantity: (id, volumeMl, delta) =>
    set((state) => ({
      cart: state.cart
        .map((i) => {
          if (i.id === id && i.volumeMl === volumeMl) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as CartItem[],
    })),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),

  wishlist: ["royale-oud-concentre"],
  toggleWishlist: (slug) =>
    set((state) => {
      const exists = state.wishlist.includes(slug);
      return {
        wishlist: exists
          ? state.wishlist.filter((s) => s !== slug)
          : [...state.wishlist, slug],
      };
    }),

  isSearchOpen: false,
  openSearch: () => set({ isSearchOpen: true }),
  closeSearch: () => set({ isSearchOpen: false }),

  isMobileDrawerOpen: false,
  openMobileDrawer: () => set({ isMobileDrawerOpen: true }),
  closeMobileDrawer: () => set({ isMobileDrawerOpen: false }),

  isFinderOpen: false,
  openFinder: () => set({ isFinderOpen: true }),
  closeFinder: () => set({ isFinderOpen: false }),
}));
