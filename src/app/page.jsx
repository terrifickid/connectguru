import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Border } from "@/components/Border";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { List, ListItem } from "@/components/List";
import { SectionIntro } from "@/components/SectionIntro";
import { StylizedImage } from "@/components/StylizedImage";
import { Testimonial } from "@/components/Testimonial";
import { GridPattern } from "@/components/GridPattern";
import { GridList, GridListItem } from "@/components/GridList";

import { PageLinks } from "@/components/PageLinks";
import { loadArticles } from "@/lib/mdx";

import canvalogo from "@/images/canva.svg";
import zoomlogo from "@/images/zoom.svg";
import wishlogo from "@/images/wish.svg";
import metagoodlogo from "@/images/metagood.svg";
import oneoflogo from "@/images/oneof.svg";
import dapperlabslogo from "@/images/dapperlabs.svg";
import hut8logo from "@/images/hut8.png";
import gigaverselogo from "@/images/gigaverse.webp";



import logoBrightPath from "@/images/clients/bright-path/logo-dark.svg";
import logoFamilyFund from "@/images/clients/family-fund/logo-dark.svg";
import logoGreenLife from "@/images/clients/green-life/logo-dark.svg";
import logoHomeWork from "@/images/clients/home-work/logo-dark.svg";
import logoMailSmirk from "@/images/clients/mail-smirk/logo-dark.svg";
import logoNorthAdventures from "@/images/clients/north-adventures/logo-dark.svg";
import logoPhobia from "@/images/clients/phobia/logo-dark.svg";
import logoUnseal from "@/images/clients/unseal/logo-dark.svg";

import imageLaptop from "@/images/whiteboard.jpg";
import { loadCaseStudies } from "@/lib/mdx";

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

function Values() {
  return (
    <div className="relative  pt-242 sm:pt-32  lg:pt-40 ">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro eyebrow="" title="The Upwind Podcast">
        <p>
          We strive to stay at the forefront of emerging trends and
          technologies, while completely ignoring them and forking that old
          Rails project we feel comfortable using. We stand by our core values
          to justify that decision.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            The first part of any partnership is getting our designer to put
            your logo in our template. The second step is getting them to do the
            colors.
          </GridListItem>
          <GridListItem title="Efficient">
            We pride ourselves on never missing a deadline which is easy because
            most of the work was done years ago.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every business has unique needs and our greatest challenge is
            shoe-horning those needs into something we already built.
          </GridListItem>
          <GridListItem title="Honest">
            We are transparent about all of our processes, banking on the simple
            fact our clients never actually read anything.
          </GridListItem>
          <GridListItem title="Loyal">
            We foster long-term relationships with our clients that go beyond
            just delivering a product, allowing us to invoice them for decades.
          </GridListItem>
          <GridListItem title="Innovative">
            The technological landscape is always evolving and so are we. We are
            constantly on the lookout for new open source projects to clone.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

function Culture() {
  return (
    <div className="mt-24 bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Expertise"
        title="Our global network, led by renowned investors and industry veterans, fosters unique opportunities for collaboration, innovation, and strategic alignment across technology, sustainability, and purpose-driven initiatives."
        invert
      >
        <p>Our expertise includes:</p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Strategic Advisory" invert>
            Tailored guidance to drive scalable growth and lasting impact for
            portfolio companies through strategic planning and execution.
          </GridListItem>
          <GridListItem title="Community Building" invert>
            Fostering connections with talent, investors, and industry leaders
            through curated events and mentorship for global innovation.
          </GridListItem>
          <GridListItem title="Growth Acceleration" invert>
            Hands-on support to propel portfolio companies toward rapid market
            leadership with strategic resources and expertise.
          </GridListItem>
          <GridListItem title="AI-Powered Insights" invert>
            Our AI platform monitors real-time opportunities across our 7,000+
            member community, enabling dynamic matchmaking and collaboration.
          </GridListItem>
          <GridListItem title="Talent & Legal Support" invert>
            Matching top engineering talent and providing expert legal counsel
            on corporate structuring and compliance by Lily Dash.
          </GridListItem>
          <GridListItem title="Financial & Tax Expertise" invert>
            Maria Serafica offers two decades of expertise in corporate
            accounting, tax planning, and financial governance for tech firms.
          </GridListItem>
        </GridList>

        <div class="invert mt-20">
          <p>
            Explore Our Approach Gain deeper insights into our advisory process,
            success stories, and strategic impact:
          </p>

          <p>Download Our Advisory Overview Deck (PDF)</p>
        </div>
      </Container>
    </div>
  );
}

const clients = [
  ["Phobia", logoPhobia],
  ["Family Fund", logoFamilyFund],
  ["Unseal", logoUnseal],
  ["Mail Smirk", logoMailSmirk],
  ["Home Work", logoHomeWork],
  ["Green Life", logoGreenLife],
  ["Bright Path", logoBrightPath],
  ["North Adventures", logoNorthAdventures],
];

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          We proudly collaborate with innovative industry leaders
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {clients.map(([client, logo]) => (
            <li key={client} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-nth-[-n+2]:-mt-px sm:group-nth-3:-mt-px lg:group-nth-4:-mt-px">
                  <Image src={logo} alt={client} unoptimized />
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  );
}

export const metadata = {
  description:
    " At ACTAI Advisors, we partner with exceptional entrepreneurs to scale transformative ideas into impactful global businesses.",
};

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3);
  let blogArticles = (await loadArticles()).slice(0, 2);
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

      <Culture />
      <PageLinks
        className=""
        title="The Upwind Podcast
"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />
    </>
  );
}
