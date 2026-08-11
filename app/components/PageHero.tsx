"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function PageHero({ eyebrow, title, description, image }: { eyebrow: string; title: string; description: string; image: string }) {
  return <section className="page-hero"><img className="page-hero-image" src={image} alt=""/><div className="page-hero-shade"/><motion.div className="page-hero-copy" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}><p className="eyebrow light">{eyebrow}</p><h1>{title}</h1><span>{description}</span><Link className="button gold" href="/#booking">Book a consultation <ArrowUpRight size={17}/></Link></motion.div></section>;
}
