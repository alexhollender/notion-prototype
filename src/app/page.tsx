"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import boop from "../../public/images/boop.png";
import overview1 from "../../public/images/overview_01.png";
import apply from "../../public/images/apply.png";
import applySteps from "../../public/images/apply_01.png";
import templates from "../../public/images/templates.png";
import faqs from "../../public/images/faq.png";
import faqs1 from "../../public/images/faq_01.png";
import s from "./page.module.scss";

export default function Home() {
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = useRef({ 
    s1: useRef(null), 
    s2: useRef(null), 
    s3: useRef(null), 
    s4: useRef(null) 
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            console.log(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs.current).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const generateNavLink = (sectionId: string, label: string) => (
    <Link
      href={`#${sectionId}`}
      className={`${activeSection === sectionId ? s.active : ''}`}
    >
      {label}
    </Link>
  );

  return (
    <main id="main" className={s.main}>
      <section id="s1" className={s.overview} ref={sectionRefs.current.s1}>
        <div className="grid grid-2 max60">
          <div>
            <h1>Notion for nonprofits</h1>
            <p>We support 501(c)3 organizations working to solve the world’s toughest problems with 50% off our Plus Plan.</p>
            <Link href="/signup" className="primary">Apply now</Link>
          </div>
          <div>
            <Image src={boop} alt="boop" />
          </div>
        </div>
        <Image src={overview1} alt="overview1" quality={100} />
      </section>
      <section id="s2" className={s.apply} ref={sectionRefs.current.s2}>
        <div className="flex flex40">
          <Image src={apply} alt="laptop people" />
          <h2>How to apply</h2>
        </div>
        <div className="max60">
          <Image src={applySteps} alt="steps to apply" />
        </div>
      </section>
      <section id="s3" className={s.templates} ref={sectionRefs.current.s3}>
        <div className="flex flex40">
          <h2>Notion templates for nonprofits</h2>
          <p>Get started running your team in Notion with these pre-made setups. Click Duplicate at the top right to add to your workspace.</p>
        </div>
        <div className="max60">
          <Image src={templates} alt="template gallery" />
        </div>
      </section>
      <section id="s4" className={s.faqs} ref={sectionRefs.current.s4}>
        <div className="grid grid-2 max60">
          <h2>Frequently asked questions</h2>
          <Image src={faqs} alt="faqs graphic" />
        </div>
        <div className="max60">
          <Image src={faqs1} alt="faqs" quality={100} />
        </div>
      </section>
      <nav className={s.nav}>
        {generateNavLink('s1', 'Overview')}
        {generateNavLink('s2', 'How to Apply')}
        {generateNavLink('s3', 'Templates')}
        {generateNavLink('s4', 'FAQs')}
      </nav>
    </main>
  );
}