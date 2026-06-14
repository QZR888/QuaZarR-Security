"use client";

export function CookiePreferencesButton() {
  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined" && (window as any).Cookiebot) {
          (window as any).Cookiebot.renew();
        }
      }}
      className="mt-4 inline-block text-xs font-bold uppercase tracking-[0.1em] text-red border border-red px-5 py-2 hover:bg-red hover:text-white transition-colors cursor-pointer"
    >
      Manage Cookie Preferences
    </button>
  );
}
