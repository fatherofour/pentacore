import type { Metadata } from "next";
import { LegalPage, CONTACT_EMAIL } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How The Crew Solutions' website uses cookies and similar technologies.",
};

export default function CookiePolicy() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="1 October 2026"
      intro="This policy explains what cookies are, how The Crew Solutions uses them, and how you can control them."
      sections={[
        {
          heading: "What are cookies?",
          body: [
            "Cookies are small text files stored on your device when you visit a website. They help a site work properly, remember your preferences and understand how it is used.",
          ],
        },
        {
          heading: "How we use cookies",
          body: ["We use a small number of cookies and similar technologies for the following purposes:"],
          list: [
            "Essential: needed for the site to load, stay secure and function correctly. These cannot be switched off.",
            "Preferences: remember choices you make so the site works the way you expect.",
            "Analytics: help us understand which pages are visited and how the site performs, so we can improve it. This data is aggregated and not used to identify you personally.",
          ],
        },
        {
          heading: "Third-party cookies",
          body: [
            "Some features, such as embedded content, analytics or the WhatsApp chat link, may involve third parties who set their own cookies or collect information under their own privacy policies. We do not control these cookies.",
          ],
        },
        {
          heading: "Managing cookies",
          body: [
            "You can control or delete cookies through your browser settings. Most browsers let you block all cookies, block third-party cookies, or clear cookies when you close the browser. Blocking essential cookies may stop parts of the site from working.",
          ],
        },
        {
          heading: "Changes and contact",
          body: [
            `We may update this policy as our site changes; the date at the top shows the latest version. For questions about cookies or how we handle your data, email ${CONTACT_EMAIL}. See our Privacy Policy for more on how we use personal data.`,
          ],
        },
      ]}
    />
  );
}
