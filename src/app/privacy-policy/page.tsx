import type { Metadata } from "next";
import { LegalPage, CONTACT_EMAIL, CONTACT_PHONE } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How The Crew Solutions collects, uses and protects your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="1 October 2026"
      intro="We respect your privacy. This policy explains what personal data The Crew Solutions collects, why we collect it, and the choices you have."
      sections={[
        {
          heading: "Who we are",
          body: [
            "The Crew Solutions (\"we\", \"us\") is an IT consulting and digital transformation company. We are the controller of the personal data described in this policy and process it in line with the Nigeria Data Protection Act 2023 (NDPA) and other applicable data protection laws.",
          ],
        },
        {
          heading: "Information we collect",
          body: ["We collect only the information we need to respond to you and to run our services."],
          list: [
            "Contact details you give us, such as your name, work email, phone number and company.",
            "Details of your enquiry, including the service you are interested in and any message you send.",
            "Newsletter sign-ups, where you provide your email address.",
            "Technical data such as browser type, device, pages visited and approximate location, collected through cookies and similar technologies (see our Cookie Policy).",
          ],
        },
        {
          heading: "How we use your information",
          body: ["We use personal data to:"],
          list: [
            "Respond to enquiries and arrange consultations.",
            "Provide, manage and improve our services and this website.",
            "Send updates and insights you have asked for; you can unsubscribe at any time.",
            "Keep our website and systems secure and prevent misuse.",
            "Meet legal, accounting and regulatory obligations.",
          ],
        },
        {
          heading: "Our lawful bases",
          body: [
            "We process personal data where you have given consent, where it is necessary to take steps at your request before entering a contract or to perform one, where we have a legitimate interest in running and improving our business (balanced against your rights), and where the law requires it.",
          ],
        },
        {
          heading: "Sharing your information",
          body: [
            "We do not sell your personal data. We share it only with trusted service providers who help us operate, such as hosting, email and analytics providers, and only under written terms that require them to protect it. We may also disclose information where required by law or to protect our rights.",
          ],
        },
        {
          heading: "International transfers",
          body: [
            "Some of our providers may process data outside Nigeria. Where this happens, we take steps to ensure your data receives an adequate level of protection, as required by the NDPA.",
          ],
        },
        {
          heading: "How long we keep data",
          body: [
            "We keep personal data only as long as needed for the purposes above. Enquiry records are generally kept for as long as the relationship continues plus a reasonable period afterwards, and records we must keep by law are retained for the legally required period.",
          ],
        },
        {
          heading: "Security",
          body: [
            "We use appropriate technical and organisational measures, including access controls and encryption, to protect personal data. No system is completely secure, so we also limit the data we collect and who can access it.",
          ],
        },
        {
          heading: "Your rights",
          body: ["Subject to applicable law, you have the right to:"],
          list: [
            "Access the personal data we hold about you.",
            "Ask us to correct inaccurate or incomplete data.",
            "Ask us to delete your data or restrict how we use it.",
            "Object to processing based on our legitimate interests, and withdraw consent at any time.",
            "Receive your data in a portable format.",
            "Complain to the Nigeria Data Protection Commission if you believe your rights have been breached.",
          ],
        },
        {
          heading: "Contact us",
          body: [
            `To exercise your rights or ask about this policy, email ${CONTACT_EMAIL} or call ${CONTACT_PHONE}. We may update this policy from time to time; the date at the top shows when it last changed.`,
          ],
        },
      ]}
    />
  );
}
