import { useId } from "react";
import Image from "next/image";
import clsx from "clsx";

import { AppDemo } from "@/components/pocket/AppDemo";
import { AppStoreLink } from "@/components/pocket/AppStoreLink";
import { Button } from "@/components/pocket/Button";
import { Container } from "@/components/pocket/Container";
import { PhoneFrame } from "@/components/pocket/PhoneFrame";
import logoBbc from "@/images/logos/bbc.svg";
import logoCbs from "@/images/logos/cbs.svg";
import logoCnn from "@/images/logos/cnn.svg";
import logoFastCompany from "@/images/logos/fast-company.svg";
import logoForbes from "@/images/logos/forbes.svg";
import logoHuffpost from "@/images/logos/huffpost.svg";
import logoTechcrunch from "@/images/logos/techcrunch.svg";
import logoWired from "@/images/logos/wired.svg";
import frame from "@/images/phone-frame.svg";

import canvalogo from "@/images/canva.svg";
import zoomlogo from "@/images/zoom.svg";
import wishlogo from "@/images/wish.svg";
import metagoodlogo from "@/images/metagood.svg";
import oneoflogo from "@/images/oneof.svg";
import dapperlabslogo from "@/images/dapperlabs.svg";
import hut8logo from "@/images/hut8.png";
import gigaverselogo from "@/images/gigaverse.webp";

const clients = [
  ["Canva", canvalogo],
  ["Zoom", zoomlogo],
  ["Wish", wishlogo],
  ["Metagood", metagoodlogo],
  //["Oneof", oneoflogo],
  // ["Dapper Labs", dapperlabslogo],
  //["Hut8mining", hut8logo],
  //["Gigaverse", gigaverselogo],
];

function BackgroundIllustration(props) {
  let id = useId();

  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#06b6d4" />
            <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-24 xl:pb-36 mt-10">
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 className="text-4xl font-medium tracking-tight text-gray-900">
              Al-Powered Advisory Ecosystem for Founders, Innovators, and
              Visionaries
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Unlock your potential with{" "}
              <b className="font-medium">Connect Guru</b>, where human expertise
              meets cutting-edge Al to revolutionize collaboration,
              decision-making, and impact globally.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <AppStoreLink />
            </div>
          </div>

          <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundIllustration className="absolute top-4 left-1/2 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame className="mx-auto max-w-[366px]" priority>
                <AppDemo />
              </PhoneFrame>
            </div>
          </div>
          <div className="relative lg:col-span-7 lg:mt-0 xl:col-span-6 hidden">
            <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
              We’ve worked with hundreds of amazing companies
            </p>
            <ul
              role="list"
              className="grid grid-cols-2 md:grid-cols-4 gap-x-12 flex justify-center"
            >
              {clients.map(([client, logo]) => (
                <li key={client} class="flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={client}
                    style={{ filter: "saturate(0%) brightness(0%)" }}
                    className="px-8 md:px-0 w-25"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
