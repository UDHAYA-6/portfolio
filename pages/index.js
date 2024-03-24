import React from "react";
import FooterLinks from "@/components/footer component/footer";
import HeroBullets from "@/components/Hero/Hero";
import ContactUs from "@/components/Contact Form/contactUs";
import Card from "@/components/Card/card";
import Services from "@/components/Services/service";
import FAQ from "@/components/FAQ component/Faq";
import Projects from "@/components/Project section/Project";
import Skills from "@/components/Skills component/skills";
const index = () => {
  return (
    <>
      <HeroBullets />
      <Card />
      <Services />
      <Projects />
      <Skills />
      <FAQ />
      <ContactUs />
      <FooterLinks />
    </>
  );
};

export default index;
