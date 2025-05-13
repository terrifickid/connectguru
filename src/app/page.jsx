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

const clients = [
  ["Canva", canvalogo],
  ["Zoom", zoomlogo],
  ["Wish", wishlogo],
  ["Metagood", metagoodlogo],
  ["Oneof", oneoflogo],
  ["Dapper Labs", dapperlabslogo],
  ["Hut8mining", hut8logo],
  ["Gigaverse", gigaverselogo],
];

function Clients() {
  return (
    <div className="mt-24  bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className=" items-center ">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with hundreds of amazing companies
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex items-center justify-center xs:gap-x-24 sm:gap-x-40 lg:gap-x-40 xl:gap-x-52 gap-y-12"
          >
            {clients.map(([client, logo]) => (
              <li key={client} class="flex items-center justify-center">
                <FadeIn>
                  <img
                    src={logo.src}
                    alt={client}
                    style={{ filter: "saturate(0%) brightness(500%)" }}
                    className="px-8 md:px-0"
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Introducing Actia Advisors"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          With Actia Advisors as a part of your advisory board, you&apos;ll gain
          access to a wide range of expert advice. Actia Advisors has an
          established track record of successfully building some of the
          world&apos;s most prosperous tech companies.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FadeIn className="flex">
            <article className="relative  w-full flex-col p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Actai Individual
              </p>
              <ul class="pb-20">
                <li className="border-b py-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 flex-shrink-0"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Access to the Actai directory
                </li>
                <li className="border-b py-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 flex-shrink-0"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Individual Profile (with linkedin link & calendly)
                </li>
                <li className="border-b  py-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 flex-shrink-0"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Premium Curated Monthly Email
                </li>
              </ul>

              <Button href="/contact" className="absolute bottom-8">
                Apply Now
              </Button>
            </article>
          </FadeIn>
          <FadeIn className="flex hidden">
            <article className="relative  w-full flex-col  p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Actai Company
              </p>
              <ul class="pb-20">
                <li className="border-b  py-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 flex-shrink-0"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Access to the Actai directory
                </li>
                <li className="border-b  py-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 flex-shrink-0"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Company profile with deck
                </li>
                <li className="border-b  py-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 flex-shrink-0"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Premium Curated Monthly Email
                </li>
              </ul>

              <Button href="/contact" className="absolute bottom-8">
                Apply Now
              </Button>
            </article>
          </FadeIn>
          <FadeIn className="flex">
            <article className="relative  w-full flex-col  p-6  ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
              <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                Actai Advisor Partnership
              </p>
              <ul class="pb-20">
                <li className="border-b  py-2 flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 flex-shrink-0"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  White Glove Service
                </li>
                <li className="border-b  py-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 flex-shrink-0"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Official Actai Advisory Partner
                </li>
                <li className="border-b  py-2 flex">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 flex-shrink-0"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Advisor Matching
                </li>
                <li className="border-b  py-2 flex">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 flex-shrink-0"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  One on One Access
                </li>
                <li className="border-b  py-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 flex-shrink-0"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Actai Advisor as Equity Partner
                </li>
                <li className="border-b  py-2 flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 flex-shrink-0"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Full time member of your team
                </li>
                <li className="border-b  py-2 flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mr-2 flex-shrink-0"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                  Advisor Cap Table and Agreement management
                </li>
              </ul>

              <Button href="/contact" className="absolute bottom-8">
                Apply Now
              </Button>
            </article>
          </FadeIn>
        </FadeInStagger>
      </Container>
    </>
  );
}

const servicesContent = [
  {
    title: "Strategic Advisory",
    description:
      "Customized guidance to drive scalable growth and lasting impact for your business.",
  },
  {
    title: "Community Building",
    description:
      "Curating connections with talent, investors, and innovators through strategic events and mentorship.",
  },
  {
    title: "Growth Acceleration",
    description:
      "Hands-on support to empower portfolio companies toward rapid market leadership.",
  },
  {
    title: "AI-Powered Insights",
    description:
      "Our AI platform monitors our 7,000+ member community for real-time matchmaking and networking opportunities.",
  },
  {
    title: "Talent Matching",
    description:
      "Connecting portfolio companies with top-tier engineering talent for accelerated product development.",
  },
  {
    title: "Legal Support",
    description:
      "In-house legal expertise from Lily Dash, guiding tech ventures on compliance and governance.",
  },
  {
    title: "Corporate Accounting & US Tax Expertise",
    description:
      "Maria Serafica’s 20+ years of expertise ensures efficient financial management and tax planning.",
  },
];

const ServicesList = () => {
  return (
    <List className="mt-16 lg:mt-0  space-y-4" role="list">
      {servicesContent.map((service) => (
        <ListItem key={service.title} title={service.title}>
          {service.description}
        </ListItem>
      ))}
    </List>
  );
};

function Services() {
  return (
    <>
      <Container className="mt-16">
        <div className="">
          <div className="flex justify-center"></div>
          <ServicesList />
        </div>
      </Container>
    </>
  );
}

export const metadata = {
  description:
    "We are a development studio working at the intersection of design and technology.",
};

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3);

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display font-medium text-5xl tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Empowering Visionary Founders
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            At ACTAI Advisors, we partner with exceptional entrepreneurs to
            scale transformative ideas into impactful global businesses.
            Leveraging deep relationships, strategic insights, and targeted
            capital, we equip founders with essential tools and networks needed
            to successfully navigate growth and innovation.
          </p>
        </FadeIn>
      </Container>
    </>
  );
}
