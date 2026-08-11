import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Clock3, MapPin, Phone } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

type PageInfo = { title: string; eyebrow: string; description: string; image: string; details?: string[] };

const treatmentPages: Record<string, PageInfo> = {
  "skin-treatment": { title: "Skin Treatment", eyebrow: "Skin health", description: "Advanced skin treatments to rejuvenate, repair and brighten your skin for a flawless, youthful glow.", image: "/images/legacy/skin-treatment.png", details: ["Acne & acne scar care", "Pigmentation correction", "Texture and glow treatments"] },
  "cosmetic-treatment": { title: "Cosmetic Treatment", eyebrow: "Natural enhancement", description: "Personalised cosmetic treatments that enhance your natural beauty while keeping your features entirely your own.", image: "/images/legacy/Cosmetic-Treatment.png", details: ["Tailored facial assessment", "Refined, balanced results", "Clinically led treatment plans"] },
  "hair-treatment": { title: "Hair Treatment", eyebrow: "Hair restoration", description: "Restore, strengthen and revitalise your hair with advanced treatments for thicker, healthier, fuller-looking hair.", image: "/images/legacy/Hair-Treatment.png", details: ["Hair-loss consultation", "PRP and regenerative care", "Long-term scalp health"] },
  "thread-lifts": { title: "Thread Lifts", eyebrow: "Facial contouring", description: "Lift and tighten sagging skin with minimally invasive thread lifts for a refreshed, natural-looking contour.", image: "/images/legacy/Thread-Lifts.png", details: ["Non-surgical lift", "Subtle contour definition", "Personalised aftercare"] },
  "botox-dermal-fillers": { title: "BOTOX & Dermal Fillers", eyebrow: "Injectable aesthetics", description: "Smooth lines, restore volume and enhance facial balance with a considered, natural approach to injectables.", image: "/images/legacy/BOTOX-Dermal-Fillers.jpg", details: ["Anti-wrinkle treatment", "Facial balancing", "Lip and cheek enhancement"] },
  "skin-rejuvenation": { title: "Skin Rejuvenation", eyebrow: "Radiance & renewal", description: "Restore your skin’s natural glow, tone and firmness with advanced skin rejuvenation treatments.", image: "/images/legacy/Skin-Rejuvenation.png", details: ["Improved tone and texture", "Glow-focused treatments", "Individual treatment plans"] },
  hifu: { title: "HIFU", eyebrow: "Non-surgical lifting", description: "High-Intensity Focused Ultrasound tightens and lifts skin for a firmer, more youthful-looking appearance.", image: "/images/legacy/HIFU.png", details: ["Non-invasive treatment", "Skin tightening", "Facial contour support"] },
  "non-surgical-rhinoplasty": { title: "Non-Surgical Rhinoplasty", eyebrow: "Profile refinement", description: "Reshape and refine the nose with dermal filler for a balanced, natural-looking profile—without surgery.", image: "/images/legacy/Non-Surgical-Rhinoplasty.png", details: ["Detailed facial assessment", "Immediate visible refinement", "No surgical downtime"] },
  "hydra-facial": { title: "Hydra Facial", eyebrow: "Deep hydration", description: "Deeply cleanse, exfoliate, hydrate and rejuvenate the skin in a single restorative treatment.", image: "/images/legacy/Skin-Treatment.jpg", details: ["Cleanse and exfoliate", "Intense hydration", "A fresh, luminous finish"] },
  "chemical-peels": { title: "Chemical Peels", eyebrow: "Skin renewal", description: "Exfoliate and renew the complexion with a peel selected for your individual skin concerns and goals.", image: "/images/legacy/Chemical-Peels.png", details: ["Clarity and brightness", "Texture refinement", "Clinician-selected strength"] },
  filler: { title: "Filler", eyebrow: "Restored volume", description: "Restore lost volume, soften lines and enhance facial contours for a refreshed, beautifully balanced result.", image: "/images/legacy/Filler.jpg", details: ["Volume restoration", "Profile balancing", "Natural-looking enhancement"] },
  "advance-laser": { title: "Advanced Laser", eyebrow: "Precision technology", description: "Target pigmentation, scars and visible signs of ageing with precise laser technology and expert aftercare.", image: "/images/legacy/Advance-laser.png", details: ["Pigmentation support", "Scar and texture care", "Minimal-downtime options"] },
};

const pages: Record<string, PageInfo> = {
  about: { title: "About Qubra", eyebrow: "A considered approach", description: "Qubra Aesthetic Clinic brings together advanced aesthetic medicine, attentive consultation and a commitment to results that feel like you.", image: "/images/legacy/qubraastheticclinic-about-us.jpeg", details: ["Personalised consultations", "Evidence-led treatments", "A calm, private clinic experience"] },
  treatment: { title: "Our Treatments", eyebrow: "Aesthetic medicine", description: "Explore our tailored skin, hair and facial aesthetic treatments, each designed around your needs and goals.", image: "/images/legacy/Website-Banner-Images-03.jpg" },
  "contact-us": { title: "Contact Us", eyebrow: "We are here to help", description: "Talk to our patient-care team about your treatment goals or arrange a private consultation at our Kolkata clinic.", image: "/images/legacy/contact-us-image.jpg" },
  gallery: { title: "The Qubra Clinic", eyebrow: "Inside Qubra", description: "A calm and discreet space where exceptional aesthetic care is delivered with warmth and attention to detail.", image: "/images/clinic-hero.png" },
  "book-an-appointment": { title: "Book An Appointment", eyebrow: "Your consultation", description: "Begin with a thoughtful consultation. We will listen to your goals and create a plan that feels right for you.", image: "/images/legacy/banner.jpg" },
  blog: { title: "Journal", eyebrow: "Qubra insights", description: "Thoughtful guidance on aesthetic medicine, skin health and the treatments behind natural-looking results.", image: "/images/clinic-equipment.png" },
  "privacy-policy": { title: "Privacy Policy", eyebrow: "Your privacy", description: "We respect your privacy and handle your information carefully when you contact or visit Qubra Aesthetic Clinic.", image: "/images/legacy/Website-Banner-Images-03.jpg" },
  ...treatmentPages,
};

export function generateStaticParams() { return Object.keys(pages).map((slug) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const page = pages[slug]; return page ? { title: `${page.title} | Qubra Aesthetic Clinic`, description: page.description, alternates: { canonical: `/${slug}` }, openGraph: { title: `${page.title} | Qubra Aesthetic Clinic`, description: page.description, images: [{ url: page.image }] } } : {}; }

export default async function ClinicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug] ?? pages.treatment;
  const isTreatments = slug === "treatment";
  const isContact = slug === "contact-us" || slug === "book-an-appointment";
  return <main className="clinic-page">
    <SiteHeader/>
    <PageHero eyebrow={page.eyebrow} title={page.title} description={page.description} image={page.image}/>
    {isTreatments ? <section className="all-treatments section"><p className="eyebrow">Explore our expertise</p><h2>Personalised care for every concern.</h2><div className="all-treatment-grid">{Object.entries(treatmentPages).map(([slug, item]) => <Link href={`/${slug}`} key={slug}><img src={item.image} alt=""/><div><p>{item.eyebrow}</p><h3>{item.title}</h3><ArrowUpRight size={18}/></div></Link>)}</div></section> : <section className="page-body section"><div><p className="eyebrow">The Qubra approach</p><h2>Care that is attentive, informed and entirely personal.</h2></div><div className="page-copy"><p>{page.description}</p>{page.details?.map((detail) => <p className="page-detail" key={detail}><Check size={16}/>{detail}</p>)}{isContact && <div className="contact-details"><a href="tel:+917003357261"><Phone size={17}/> +91 70033 57261</a><p><MapPin size={17}/>33, Royd Street, Kolkata – 700016<br/>1st Floor, Hotel Nest Building</p><p><Clock3 size={17}/>Monday–Saturday, 12:00 pm–09:00 pm<br/>Sunday by appointment</p></div>}<Link className="page-cta button gold" href="/#booking">Arrange a consultation <ArrowUpRight size={17}/></Link></div></section>}
    <SiteFooter/>
  </main>;
}
