"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check, ChevronDown, ChevronLeft, ChevronRight, CircleCheck, Phone, Play, ShieldCheck, Sparkles, Star } from "lucide-react";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

const treatments = [
  ["Skin", "Hydrafacial", "Rebalance, replenish and reveal luminosity."],
  ["Injectables", "Natural Contouring", "Precision-led Botox and dermal fillers."],
  ["Hair", "PRP Restoration", "A science-backed approach to stronger hair."],
  ["Laser", "Skin Resurfacing", "Advanced correction with meticulous care."],
  ["Anti-aging", "Thread Lift", "Subtle lift. Beautifully considered."],
  ["Skin", "Acne & Scars", "Restore clarity and confidence."],
];
const faqs = [
  ["How do I know which treatment is right for me?", "Every journey begins with a detailed consultation and skin analysis. Your plan is designed around your goals, facial anatomy and lifestyle."],
  ["Will my results look natural?", "That is our guiding principle. We favour thoughtful, refined treatments that respect your individual features—never an overdone result."],
  ["Is there downtime after treatment?", "Downtime depends on the treatment. We will make this clear before your appointment and provide an aftercare plan tailored to you."],
  ["How do I book a consultation?", "You can use the form below, call the clinic, or connect with our patient-care team on WhatsApp."],
];
const reviews = [
  ["A clinic where you feel seen, heard and looked after. My results are exceptionally natural.", "Verified patient · Kolkata"],
  ["Dr. Qubra’s attention to detail is remarkable. A truly thoughtful, premium experience.", "Verified patient · Kolkata"],
  ["Elegant, calm and brilliantly professional—from consultation through follow-up.", "Verified patient · Kolkata"],
];

export default function Home() {
  const [faq, setFaq] = useState<number | null>(0),
  [review, setReview] = useState(0),
  [sent, setSent] = useState(false),
  [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    email: "",
    treatment: "",
    message: "",
    website: "",
  });
  const book = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSent(true);
    } catch (e) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({ "@context": "https://schema.org", "@graph": [{ "@type": "MedicalClinic", name: "Qubra Aesthetic Clinic", url: "https://qubraastheticclinic.com", description: "Advanced aesthetic medicine in Kolkata." }, { "@type": "Physician", name: "Dr. Khatijatul Qubra", jobTitle: "Founder, Medical Aesthetics", worksFor: { "@type": "MedicalClinic", name: "Qubra Aesthetic Clinic" } }, { "@type": "FAQPage", mainEntity: faqs.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })) }] })}} />
    <SiteHeader/>
    <section className="hero" id="top"><div className="hero-image"/><div className="hero-overlay"/><motion.div className="hero-content" initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.8}}><p className="eyebrow light">Aesthetic medicine · Kolkata</p><h1>Refined Aesthetic Medicine.<br/><i>Naturally Beautiful Results.</i></h1><p className="hero-copy">Advanced skin, hair and facial aesthetic treatments delivered with precision, science and artistry.</p><div className="hero-actions"><a className="button gold" href="#booking">Book a consultation <ArrowUpRight size={17}/></a><a className="text-link light" href="#treatments">Explore treatments <span>→</span></a></div></motion.div><div className="trust"><span><Check/> Expert aesthetic care</span><span><Check/> Advanced technology</span><span><Check/> Personalised results</span></div><div className="hero-scroll">SCROLL TO DISCOVER <span/></div></section>
    <section className="intro" id="doctor"><div><p className="eyebrow">Meet your doctor</p><h2>Medicine, guided by<br/><i>an artistic eye.</i></h2></div><div className="intro-copy"><p>Dr. Khatijatul Qubra blends a meticulous medical approach with an instinct for subtle, confidence-building results.</p><a className="text-link" href="#booking">Discover Dr. Qubra <ArrowUpRight size={16}/></a></div></section>
    <section className="doctor"><div className="doctor-portrait"><div className="portrait-label">DR. KHATIJATUL QUBRA<br/><span>Founder · Qubra Aesthetic Clinic</span></div></div><div className="credentials"><p className="eyebrow">The Qubra approach</p><h3>Care that feels<br/>completely personal.</h3>{[["01", "Clinical precision", "Thoughtful treatment plans grounded in science."],["02", "Subtle artistry", "Refinement that celebrates what makes you, you."],["03", "Continuity of care", "Support from first conversation to final follow-up."]].map(x=><div className="credential" key={x[0]}><b>{x[0]}</b><div><strong>{x[1]}</strong><p>{x[2]}</p></div></div>)}</div></section>
    <section className="treatments section" id="treatments"><div className="section-head"><div><p className="eyebrow">Our specialties</p><h2>Signature<br/><i>treatments.</i></h2></div><p>Considered treatments, selected for their ability to create visible yet entirely believable results.</p></div><div className="treatment-grid">{treatments.map((t,i)=><motion.a href="#booking" className={`treatment t${i+1}`} key={t[1]} whileHover={{y:-7}}><div><p>{t[0]}</p><h3>{t[1]}</h3><span>{t[2]}</span></div><ArrowUpRight/></motion.a>)}</div></section>
    <section className="numbers"><div><strong>15+</strong><span>years of clinical experience</span></div><div><strong>8k</strong><span>carefully considered journeys</span></div><div><strong>4.9</strong><span><Star size={14} fill="currentColor"/> patient satisfaction</span></div><div><strong>100%</strong><span>personalised treatment plans</span></div></section>
    <section className="experience" id="experience"><div className="experience-image"><div className="experience-card"><Sparkles size={18}/><p>Quiet luxury.<br/>Exceptional care.</p></div></div><div className="experience-copy"><p className="eyebrow">The clinic experience</p><h2>Where you can<br/><i>take a breath.</i></h2><p>Designed to feel calm and unhurried, every detail of the Qubra Aesthetic Clinic experience is there to put you at ease.</p><a href="#booking" className="text-link">Explore our clinic <ArrowUpRight size={16}/></a></div></section>
    <section className="journey section"><p className="eyebrow center">Your journey</p><h2 className="center">A more considered<br/><i>way to care for yourself.</i></h2><div className="journey-steps">{["Consultation","Skin analysis","Your treatment","Recovery & care","Follow-up"].map((s,i)=><div key={s}><b>0{i+1}</b><span>{s}</span>{i<4&&<i>→</i>}</div>)}</div></section>
    <section className="testimonials"><div><p className="eyebrow light">Patient stories</p><h2>Confidence, <i>reflected.</i></h2><div className="rating"><span>4.9</span><div>{[1,2,3,4,5].map(x=><Star key={x} fill="currentColor" size={15}/>)}<p>Google rating · verified patients</p></div></div></div><motion.article key={review} className="review" initial={{opacity:0,x:15}} animate={{opacity:1,x:0}}><CircleCheck/><blockquote>“{reviews[review][0]}”</blockquote><p>{reviews[review][1]}</p><div><button onClick={()=>setReview((review+2)%3)} aria-label="Previous review"><ChevronLeft/></button><button onClick={()=>setReview((review+1)%3)} aria-label="Next review"><ChevronRight/></button></div></motion.article></section>
<section className="gallery section">
  <div className="section-head">
    <div>
      <p className="eyebrow">Inside Qubra</p>
      <h2>
        An elevated
        <br />
        <i>clinical experience.</i>
      </h2>
    </div>

    <a className="text-link" href="#booking">
      View the gallery <ArrowUpRight size={16} />
    </a>
  </div>

  <div className="gallery-grid">
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
</section>

    <section className="faq section"><p className="eyebrow">Questions, answered</p><h2>Everything you need<br/><i>to feel informed.</i></h2><div className="accordion">{faqs.map((item,i)=><div className="faq-item" key={item[0]}><button onClick={()=>setFaq(faq===i?null:i)} aria-expanded={faq===i}><span>{item[0]}</span><ChevronDown className={faq===i?"rotate":""}/></button><AnimatePresence>{faq===i&&<motion.p initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}}>{item[1]}</motion.p>}</AnimatePresence></div>)}</div></section>
    <section className="booking" id="booking"><div className="booking-copy"><p className="eyebrow light">A private consultation</p><h2>Begin your<br/><i>transformation.</i></h2><p>Tell us a little about what you’re looking for. Our patient care team will be in touch shortly.</p><a href="tel:+918910375901"><Phone size={16}/> Call the clinic</a></div><div className="form-card">{sent?<motion.div className="success" initial={{scale:.95,opacity:0}} animate={{scale:1,opacity:1}}><ShieldCheck/><h3>Thank you.</h3><p>Your consultation request is with our care team. We’ll be in touch shortly.</p></motion.div>:<form onSubmit={book}>
  <input
    type="text"
    name="website"
    autoComplete="off"
    tabIndex={-1}
    style={{ display: "none" }}
    value={form.website}
    onChange={(e) =>
    setForm({ ...form, website: e.target.value })
  }
  />
  <label>Full name
<input required placeholder="Your name" value={form.full_name} onChange={(e)=>setForm({...form,full_name:e.target.value})}/>
</label>
<div className="form-row">
<label>Phone
<input required type="tel" placeholder="Your number" value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})}/>
</label>
<label>Email
<input required type="email" placeholder="you@email.com" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
</label>
</div>
<label>I'm interested in
<select required value={form.treatment} onChange={(e)=>setForm({...form,treatment:e.target.value})}>
<option value="" disabled>Select a treatment</option>
{treatments.map(t=><option key={t[1]}>{t[1]}</option>)}
</select>
</label>
<label>Tell us more
<textarea placeholder="Your goals, questions or preferred dates" value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})}/>
</label>
<button className="button gold" type="submit" disabled={loading}>
{loading?"Submitting...":"Request consultation"} <ArrowUpRight size={17}/>
</button>
<p className="form-note">By submitting, you agree to be contacted by Qubra Aesthetic Clinic.</p>
</form>}</div></section>
    <SiteFooter/>
    <a className="whatsapp" href="https://wa.me/918910375901" aria-label="Chat with Qubra Clinic on WhatsApp">WhatsApp</a><a className="mobile-cta" href="#booking">Book consultation <ArrowUpRight size={17}/></a>
  </main>;
}
