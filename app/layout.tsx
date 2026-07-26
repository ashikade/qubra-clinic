import type { Metadata } from "next";
import "./globals.css";
import "./treatments.css";
import "./refinements.css";
import "./treatment-fix.css";

export const metadata: Metadata = {
  title: "Dr. Khatijatul Qubra | Qubra Aesthetic Clinic",
  description: "Advanced aesthetic medicine in Kolkata, delivered with precision, science and artistry.",
  metadataBase: new URL("https://qubraastheticclinic.com"),
  alternates: { canonical: "/" },
  openGraph: { title: "Qubra Aesthetic Clinic", description: "Refined aesthetic medicine. Naturally beautiful results.", type: "website" },
  twitter: { card: "summary_large_image" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
