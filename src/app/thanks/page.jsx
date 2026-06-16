import Link from "next/link";

import { Border } from "@/components/Border";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { Offices } from "@/components/Offices";
import { PageIntro } from "@/components/PageIntro";
import { SocialMedia } from "@/components/SocialMedia";

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Our offices
      </h2>
      <p className="mt-6 text-base text-neutral-600"></p>

      <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[["Info", "info@actaiadvisors.com"]].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  );
}

export const metadata = {
  title: "Thanks!",
  description: "Your form has been received.",
};

export default function Thanks() {
  return (
    <>
      <PageIntro
        eyebrow="Message received"
        title="Thanks!"
      >
        <p>Your inquiry has been received. We’ll be in touch soon.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <FadeIn>
            <div className="max-w-xl">
              <p className="text-base text-neutral-600">
                Thank you for reaching out. A member of our team will review your
                submission and get back to you within 1-2 business days.
              </p>
              <div className="mt-8">
                <Button href="/">Back to homepage</Button>
              </div>
              <div className="mt-6 text-sm">
                <Link href="/contact" className="text-neutral-600 underline hover:text-neutral-950">
                  Submit another inquiry
                </Link>
              </div>
            </div>
          </FadeIn>
          <ContactDetails />
        </div>
      </Container>
    </>
  );
}
