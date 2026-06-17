"use client";

import { useEffect } from "react";

/**
 * TEMPORARY: sends an email via Web3Forms on each visit so you can confirm
 * the site is getting traffic. Fires once per browser session (not on every
 * internal navigation or re-render) to avoid flooding your inbox.
 *
 * To remove later: delete this file and its <VisitNotifier /> line in
 * app/layout.tsx, then commit + push.
 */
const WEB3FORMS_KEY = "4c09b4f3-8fc9-4ee6-8dea-e7d1008e9cec";

export function VisitNotifier() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Only notify once per session so a single visit = one email.
    if (sessionStorage.getItem("eleware_visit_notified") === "1") return;
    sessionStorage.setItem("eleware_visit_notified", "1");

    const now = new Date().toLocaleString();
    const referrer = document.referrer || "Direct / unknown";
    const page = window.location.pathname || "/";
    const device = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)
      ? "Mobile"
      : "Desktop";
    const language = navigator.language || "unknown";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: "New visit to elewareai.com",
        from_name: "Eleware AI Site",
        cc: ["abdullahhijazi69@gmail.com"],
        message:
          `Someone just visited your website.\n\n` +
          `Time: ${now}\n` +
          `Page: ${page}\n` +
          `Came from: ${referrer}\n` +
          `Device: ${device}\n` +
          `Language: ${language}`,
      }),
    }).catch(() => {
      // Silently ignore — a failed notification must never break the site.
    });
  }, []);

  return null;
}
