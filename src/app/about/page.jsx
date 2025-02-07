import Image from "next/image";

import { Border } from "@/components/Border";
import { ContactSection } from "@/components/ContactSection";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { GridList, GridListItem } from "@/components/GridList";
import { PageIntro } from "@/components/PageIntro";
import { PageLinks } from "@/components/PageLinks";
import { SectionIntro } from "@/components/SectionIntro";
import { StatList, StatListItem } from "@/components/StatList";
import imageAngelaFisher from "@/images/team/angela-fisher.jpg";
import imageBenjaminRussel from "@/images/team/benjamin-russel.jpg";
import imageBlakeReid from "@/images/team/blake-reid.jpg";
import imageChelseaHagon from "@/images/team/chelsea-hagon.jpg";
import imageDriesVincent from "@/images/team/dries-vincent.jpg";
import imageEmmaDorsey from "@/images/team/emma-dorsey.jpg";
import imageJeffreyWebb from "@/images/team/jeffrey-webb.jpg";
import imageKathrynMurphy from "@/images/team/kathryn-murphy.jpg";
import imageLeonardKrasner from "@/images/team/leonard-krasner.jpg";
import imageLeslieAlexander from "@/images/team/leslie-alexander.jpg";
import imageMichaelFoster from "@/images/team/michael-foster.jpg";
import imageWhitneyFrancis from "@/images/team/whitney-francis.jpg";
import { loadArticles } from "@/lib/mdx";

function Culture() {
  return (
    <div className="mt-24 bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our Community"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          Harmonizing Tech Passion with Purposeful Living. Actai Advisors unites
          a collective of kindred spirits who champion shared core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Dedication" invert>
            Our team&apos;s unwavering commitment stems from the beginning,
            fostering a bond beyond LinkedIn profiles.
          </GridListItem>
          <GridListItem title="Flexibility" invert>
            Work isn&apos;t bound by time; it&apos;s about continuous dedication
            every waking moment.
          </GridListItem>
          <GridListItem title="Empathy" invert>
            Acknowledging personal challenges, we maintain a supportive
            environment, respecting personal boundaries.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
}

const team = [
  {
    title: "Advisors",
    people: [
      {
        name: "Bill Tai",
        role: "Venture Capitalist, Athlete, Adjunct Professor",
        image: { src: imageLeslieAlexander },
      },
      {
        name: "Lars Rasmussen",
        role: "Co-Founder, Google Maps",
        image: { src: imageMichaelFoster },
      },
      {
        name: "Young Sohn",
        role: "Founding Managing Partner, Walden Catalyst",
        image: { src: imageDriesVincent },
      },
      {
        name: "George Kikvadze",
        role: "Executive Vice Chairman, BitFury Group",
        image: { src: imageDriesVincent },
      },
      {
        name: "Jaeson Ma",
        role: "CEO OP3N",
        image: { src: imageDriesVincent },
      },
      {
        name: "Suna Said",
        role: "Founder and CEO, Nima Capital LLC",
        image: { src: imageDriesVincent },
      },
      {
        name: "Danish Chaudhry",
        role: "CEO & Co-Founder, FMFW.io",
        image: { src: imageDriesVincent },
      },
      {
        name: "George Bachiashvili",
        role: "Founder and CEO, Mission Gate Inc",
        image: { src: imageDriesVincent },
      },
    ],
  },
];

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden ">
                          <p className="font-display text-base/6 font-semibold tracking-wide">
                            {person.name}
                          </p>
                          <p className="mt-2 text-sm">{person.role}</p>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  );
}

export const metadata = {
  title: "About Us",
  description:
    "We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.",
};

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2);

  return (
    <>
      <PageIntro eyebrow="About us" title="Actai Advisors">
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            At Actai Advisors, we believe that the power of connection fuels
            innovation and success. As a premier networking and business
            development firm, we harness the power of artificial intelligence
            and human connection to create meaningful, high-impact relationships
            that drive growth.
          </p>

          <p>
            With a global community of 8,000+ entrepreneurs, investors, and
            industry leaders, we act as a Super Connector, unlocking new
            opportunities and fostering collaboration across diverse industries,
            including venture capital, artificial intelligence, and emerging
            markets.
          </p>

          <p>
            Our proprietary AI-powered networking platform and AI-enabled
            telephone advisor work around the clock to ensure that our members
            connect with the right people at the right time—helping businesses
            scale faster and making every interaction more valuable.
          </p>

          <p>
            Founded by Bill Tai, Lily Dash, and Maria Serafica, Actai Advisors
            is more than just a network—it’s an ecosystem of innovation,
            collective intelligence, and curated connections designed to
            maximize potential.
          </p>

          <p>
            Join us in redefining the future of networking and unlocking new
            possibilities—one connection at a time.
          </p>
        </div>
      </PageIntro>
      <div class="hidden">
        <Container className="mt-16">
          <StatList>
            <StatListItem value="Billions" label="Potential Capital Pool" />
            <StatListItem value="3000" label="Members" />
            <StatListItem value="100%" label="Startup Success Spark" />
          </StatList>
        </Container>

        <Culture />

        <Team />
      </div>
      <ContactSection />
    </>
  );
}
