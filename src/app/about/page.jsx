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
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
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
            Our team's unwavering commitment stems from the beginning, fostering
            a bond beyond LinkedIn profiles.
          </GridListItem>
          <GridListItem title="Flexibility" invert>
            Work isn't bound by time; it's about continuous dedication every
            waking moment.
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
    title: "Leadership",
    people: [
      {
        name: "Leslie Alexander",
        role: "Co-Founder / CEO",
        image: { src: imageLeslieAlexander },
      },
      {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        image: { src: imageMichaelFoster },
      },
      {
        name: "Dries Vincent",
        role: "Partner & Business Relations",
        image: { src: imageDriesVincent },
      },
    ],
  },
  {
    title: "Team",
    people: [
      {
        name: "Chelsea Hagon",
        role: "Senior Developer",
        image: { src: imageChelseaHagon },
      },
      {
        name: "Emma Dorsey",
        role: "Senior Designer",
        image: { src: imageEmmaDorsey },
      },
      {
        name: "Leonard Krasner",
        role: "VP, User Experience",
        image: { src: imageLeonardKrasner },
      },
      {
        name: "Blake Reid",
        role: "Junior Copywriter",
        image: { src: imageBlakeReid },
      },
      {
        name: "Kathryn Murphy",
        role: "VP, Human Resources",
        image: { src: imageKathrynMurphy },
      },
      {
        name: "Whitney Francis",
        role: "Content Specialist",
        image: { src: imageWhitneyFrancis },
      },
      {
        name: "Jeffrey Webb",
        role: "Account Coordinator",
        image: { src: imageJeffreyWebb },
      },
      {
        name: "Benjamin Russel",
        role: "Senior Developer",
        image: { src: imageBenjaminRussel },
      },
      {
        name: "Angela Fisher",
        role: "Front-end Developer",
        image: { src: imageAngelaFisher },
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
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
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
      <PageIntro eyebrow="About us" title="Uniting Tech for Global Impact.">
        <p>
          Connecting Tech Innovators with Purpose, Profit, and a Transformative
          Ecosystem
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            It's universally acknowledged that launching startups can be an
            arduous endeavor, and their likelihood of success is notoriously
            limited. The key to triumph doesn't solely lie in having a team with
            exceptional skills; it's about having a skillful team that 's well -
            connected within a robust and supportive ecosystem. Innovation isn't
            an isolated event - it's a collective endeavor.
          </p>
          <p>
            Actai Advisor serves as the consultative extension of the Actai
            community. Our role is to guide our clients, making certain they're
            linked with the most conducive ecosystem to propel their success.
          </p>
          <p>
            Actai Advisor isn't just a profit driven organization; it was built
            first and foremost as an instrument for persistently cultivating
            lasting change and meaningful impact in the world. With each company
            we bring on board as a client, we form an equity business
            partnership. Half of this equity is contributed to our legacy impact
            fund. This fund is committed to supporting the causes and projects
            that are dear to our community and embody the v alues we deeply
            uphold.
          </p>
          <p>
            Actai Advisors is a digital platform that champions cultural
            advancement and sustainability by supporting individual
            entrepreneurs and companies. It connects a community of Athletes,
            Conservationists, Technologists, Artists, and I nnovators to
            encourage collaboration and engagement with a community - first
            approach to advancing tech startups and global sustainable
            development. Membership offers access to influential advisors,
            technologists, funds, and philanthropists, enabling members to
            establish significant connections that lead to global impact. The
            platform's industry classification system is focused on technology
            individuals and enterprises committed to solving real - world
            problems together. Actai Advisors harnesses capacity and ex pertise
            to create solutions that have a positive impact
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  );
}
