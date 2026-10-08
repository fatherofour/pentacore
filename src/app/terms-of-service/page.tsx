import type { Metadata } from "next";
import { LegalPage, CONTACT_EMAIL } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that apply when you use The Crew Solutions' website and services.",
};

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="1 October 2026"
      intro="These terms govern your use of The Crew Solutions' website. Work we carry out for clients is covered by a separate written agreement."
      sections={[
        {
          heading: "Acceptance of these terms",
          body: [
            "By accessing or using this website you agree to these terms. If you do not agree, please do not use the site.",
          ],
        },
        {
          heading: "Our services",
          body: [
            "The information on this site describes the services The Crew Solutions offers, including IT consulting, cloud, security, software development, remote IT support and call center solutions. Descriptions are for general information and do not constitute an offer. The scope, price and delivery terms of any engagement are set out in a signed proposal or services agreement.",
          ],
        },
        {
          heading: "Acceptable use",
          body: ["When using this website you agree not to:"],
          list: [
            "Attempt to gain unauthorised access to the site, our systems or other users' data.",
            "Introduce malware or interfere with the operation or security of the site.",
            "Use automated tools to scrape or overload the site without our permission.",
            "Submit false, misleading or unlawful information through our forms.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "The content on this site, including text, graphics, logos and design, belongs to The Crew Solutions or its licensors and is protected by intellectual property law. Third-party names and logos, such as Microsoft, Azure, Zoho and Oracle, belong to their respective owners and are used to identify the technologies we work with. You may view and print pages for your own personal or internal business use, but may not copy or reuse content commercially without our written consent.",
          ],
        },
        {
          heading: "Case studies and information",
          body: [
            "Case studies and results are provided as illustrations of our work. Outcomes depend on each client's circumstances and are not a guarantee of future results.",
          ],
        },
        {
          heading: "Third-party links",
          body: [
            "This site may link to third-party websites. We do not control them and are not responsible for their content or practices.",
          ],
        },
        {
          heading: "Disclaimer and limitation of liability",
          body: [
            "We work to keep the site accurate and available, but it is provided \"as is\" without warranties of any kind. To the fullest extent permitted by law, The Crew Solutions is not liable for any indirect or consequential loss arising from your use of the site. Nothing in these terms limits liability that cannot be limited by law.",
          ],
        },
        {
          heading: "Changes to these terms",
          body: [
            "We may update these terms from time to time. The date at the top shows when they last changed, and continued use of the site means you accept the updated terms.",
          ],
        },
        {
          heading: "Governing law and contact",
          body: [
            `These terms are governed by the laws of the Federal Republic of Nigeria, and the Nigerian courts have jurisdiction over any dispute. Questions about these terms can be sent to ${CONTACT_EMAIL}.`,
          ],
        },
      ]}
    />
  );
}
