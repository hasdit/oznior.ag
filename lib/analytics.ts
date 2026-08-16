export type AnalyticsEvent =
  | "hero_cta_click"
  | "mega_menu_open"
  | "search_open"
  | "search_submit"
  | "search_result_click"
  | "wishlist_add"
  | "add_to_bag"
  | "mini_cart_open"
  | "checkout_start"
  | "review_click"
  | "instagram_click"
  | "finder_start"
  | "finder_complete"
  | "newsletter_submit";

export function trackEvent(event: AnalyticsEvent, payload?: Record<string, any>) {
  if (typeof window !== "undefined") {
    console.log(`[OZNIOR Analytics Event] -> ${event}`, payload || {});
    // Integration point for GA4 / Meta Pixel / Custom Event Pipeline
    if ((window as any).gtag) {
      (window as any).gtag("event", event, payload);
    }
  }
}
