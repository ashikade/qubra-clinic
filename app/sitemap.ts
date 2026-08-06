import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://qubraastheticclinic.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...["about", "treatment", "contact-us", "gallery", "book-an-appointment", "blog", "privacy-policy", "skin-treatment", "cosmetic-treatment", "hair-treatment", "thread-lifts", "botox-dermal-fillers", "skin-rejuvenation", "hifu", "non-surgical-rhinoplasty", "hydra-facial", "chemical-peels", "filler", "advance-laser"].map((slug) => ({ url: `${baseUrl}/${slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
  ];
}
