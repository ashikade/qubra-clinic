import type { Metadata } from "next";
import "./globals.css";
import "./pages.css";

export const metadata: Metadata = {
  title: "Best Aesthetic and Hair Loss Clinic in Kolkata",
  description: "Best Aesthetic and Hair Loss Clinic in Kolkata, advanced treatments, and personalized solutions for glowing skin and healthy hair.",
  metadataBase: new URL("https://qubraastheticclinic.com"),
  alternates: { canonical: "/" },
  openGraph: { title: "Best Aesthetic and Hair Loss Clinic in Kolkata", description: "Best Aesthetic and Hair Loss Clinic in Kolkata, advanced treatments, and personalized solutions for glowing skin and healthy hair.", type: "website" },
  twitter: { card: "summary_large_image" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
