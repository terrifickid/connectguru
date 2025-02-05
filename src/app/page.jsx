import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { List, ListItem } from "@/components/List";
import { SectionIntro } from "@/components/SectionIntro";
import { StylizedImage } from "@/components/StylizedImage";
import { Testimonial } from "@/components/Testimonial";
import canvalogo from "@/images/canva.svg";
import zoomlogo from "@/images/zoom.svg";
import wishlogo from "@/images/wish.svg";
import metagoodlogo from "@/images/metagood.svg";
import oneoflogo from "@/images/oneof.svg";
import dapperlabslogo from "@/images/dapperlabs.svg";
import hut8logo from "@/images/hut8.png";
import gigaverselogo from "@/images/gigaverse.webp";

import logoUnseal from "@/images/clients/unseal/logo-light.svg";
import imageLaptop from "@/images/whiteboard.jpg";
import { loadCaseStudies } from "@/lib/mdx";

//pcket
import { Hero } from "@/components/pocket/Hero";
import { PrimaryFeatures } from "@/components/pocket/PrimaryFeatures";

export const metadata = {
  description:
    "We are a development studio working at the intersection of design and technology.",
};

export default async function Home() {
  return (
    <>
      <Hero />
      <PrimaryFeatures />
    </>
  );
}
