import Link from "next/link";
import clsx from "clsx";

//upwind
import Image from "next/image";
import upwindLogo from "@/images/upwindlogo.png";

import { Border } from "@/components/Border";
import { Container } from "@/components/Container";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import { GridPattern } from "@/components/GridPattern";
import { SectionIntro } from "@/components/SectionIntro";
import { formatDate } from "@/lib/formatDate";

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
      />
    </svg>
  );
}

function PageLink({ page }) {
  return (
    <article key={page.href}>
      <Border
        position="left"
        className="relative flex flex-col items-start pl-8"
      >
        <h3 className="mt-6 text-base font-semibold text-neutral-950">
          {page.title}
        </h3>
        <time
          dateTime={page.date}
          className="order-first text-sm text-neutral-600"
        >
          {formatDate(page.date)}
        </time>
        <p className="mt-2.5 text-base text-neutral-600">{page.description}</p>
        <Link
          href={page.href}
          className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
          aria-label={`Read more: ${page.title}`}
        >
          Read more
          <ArrowIcon className="w-6 flex-none fill-current" />
          <span className="absolute inset-0" />
        </Link>
      </Border>
    </article>
  );
}

export function PageLinks({ title, pages, intro, className }) {
  return (
    <div className={clsx("relative pt-24 sm:pt-32 lg:pt-40", className)}>
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden  bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <div className="container mx-auto px-9 mb-5">
        <img
          src={upwindLogo.src}
          className="w-1/2 sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-3xl"
        />
      </div>
      <SectionIntro title={title} smaller>
        <p>
          Join Lily Dash, CEO of ACTAI Advisors, on The Upwind Podcast, where
          she uncovers powerful stories of resilience, innovation, and visionary
          leadership. Each episode features in-depth conversations with
          entrepreneurs, disruptors, and thought leaders driving meaningful
          change through technology, strategic innovation, and purpose-driven
          enterprise.
        </p>
        <div class="mt-8 ">
          <p class="">
            Follow The Upwind Podcast on social media to stay updated on the
            latest episodes:
          </p>
          <p> 🎧 Spotify 🎙️ Apple Podcasts 📸 Instagram 🔗 LinkedIn</p>
          <p>
            Join us as we sail Upwind, exploring what it truly takes to make a
            lasting difference.
          </p>
        </div>
      </SectionIntro>
    </div>
  );
}
