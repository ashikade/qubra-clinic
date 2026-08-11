"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  ["The Doctor", "/about"],
  ["Treatments", "/treatment"],
  ["The Clinic", "/gallery"],
  ["Journal", "/blog"],
] as const;

export function SiteHeader() {
  const [menu, setMenu] = useState(false);
  return <>
    <nav className="nav"><Link className="logo" href="/">QUBRA<span>.</span></Link><div className="navlinks">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div><Link className="nav-book" href="/#booking">Book consultation <ArrowUpRight size={15}/></Link><button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X/> : <Menu/>}</button></nav>
    <AnimatePresence>{menu && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>{links.map(([label, href]) => <Link href={href} key={href} onClick={() => setMenu(false)}>{label}</Link>)}<Link href="/#booking" onClick={() => setMenu(false)}>Book consultation</Link></motion.div>}</AnimatePresence>
  </>;
}
