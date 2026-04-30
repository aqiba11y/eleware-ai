import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Method } from "@/components/sections/Method";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { AboutFounder } from "@/components/sections/AboutFounder";
import { ClientResult } from "@/components/sections/ClientResult";
import { WhoItsFor } from "@/components/sections/WhoItsFor";
import { Guarantee } from "@/components/sections/Guarantee";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content">
        <Hero />
        <Problem />
        <WhatWeDo />
        <Method />
        <WhatYouGet />
        <AboutFounder />
        <ClientResult />
        <WhoItsFor />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
