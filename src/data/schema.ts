import { site } from "./site";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.brand,
  legalName: site.legalName,
  url: site.url,
  logo: `${site.url}/assets/logo-mark.svg`,
  description: site.descriptor,
  taxID: site.companyId,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.legalAddress.replace("гр. София 1527, ", ""),
    postalCode: "1527",
    addressLocality: site.location,
    addressCountry: "BG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.salesPhoneHref,
    contactType: "sales",
    availableLanguage: ["bg"],
  },
  parentOrganization: {
    "@type": "Organization",
    "@id": `${site.url}/#legal-operator`,
    name: site.legalName,
    taxID: site.companyId,
  },
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (items: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
});
