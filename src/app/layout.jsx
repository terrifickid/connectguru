import { RootLayout } from "@/components/RootLayout";
import { useId } from "react";

import "@/styles/tailwind.css";

import { Button } from "@/components/Button";

import pageone from "@/images/pane1.webp";
import pagetwo from "@/images/pane2.webp";
import pagethree from "@/images/pane3.webp";
import pagefour from "@/images/pane4.webp";
import pagefive from "@/images/pane5.webp";
import pagesix from "@/images/pane6.webp";
import pageseven from "@/images/pane7.webp";
import pageeight from "@/images/pane8.webp";

export const metadata = {
  title: {
    template: "Connect.guru",
    default: "Connect.guru",
  },
};

function TextInput({ label, ...props }) {
  let id = useId();

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  );
}

function ContactForm() {
  return (
    <form
      action="https://vapi-le6wug7tlq-vp.a.run.app/actai"
      method="POST"
      enctype="application/x-www-form-urlencoded"
    >
      <h2 className="font-display text-5xl font-semibold text-neutral-950 text-center mb-10">
        Join Connect Guru
      </h2>
      <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
        <TextInput
          label="First Name"
          name="firstName"
          autoComplete="First Name"
        />
        <TextInput label="Last Name" name="lastName" autoComplete="Last Name" />
        <TextInput
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
        />
        <TextInput
          label="Contact Number"
          type="tel"
          name="contactNumber"
          autoComplete="tel"
        />
        <TextInput
          label="Social Media Handles"
          name="socialMediaHandles"
          autoComplete="Social Media Handles"
        />
        <TextInput
          label="Name of Company"
          name="nameOfCompany"
          autoComplete="Name of Company"
        />
        <TextInput
          label="Phase of Project (Seed, Series A, Series B, Series C)"
          name="phaseOfProject"
          autoComplete="Phase of Project"
        />
        <TextInput label="About your Project" name="aboutYourProject" />
        <TextInput label="Website" name="website" />
      </div>
      <div class="flex justify-center">
        <Button type="submit" className="mt-12 bg-blue-600 text-4xl rounded-md">
          <span class="text-3xl p-2 font-semibold block">
            Let&apos;s work together
          </span>
        </Button>
      </div>
    </form>
  );
}

export default function Layout({ children }) {
  return (
    <html lang="en" className="">
      <body style={{ backgroundColor: "#13151d" }}>
        <div class="bg-[#13151d]">
          <div class="container mx-auto">
            <a href="#contact">
              <img src={pageone.src} />
            </a>
          </div>
        </div>
        <div class="bg-white">
          <div class="container mx-auto">
            <a href="#contact">
              <img src={pagetwo.src} />
            </a>
          </div>
        </div>
        <div class="bg-[#13151d]">
          <div class="container mx-auto">
            <a href="#contact">
              <img src={pagethree.src} />
            </a>
          </div>
        </div>
        <div class="bg-[#13151d]">
          <div class="container mx-auto">
            <a href="#contact">
              <img src={pagefour.src} />
            </a>
          </div>
        </div>
        <div class="bg-[#13151d]">
          <div class="container mx-auto">
            <a href="#contact">
              <img src={pagefive.src} />
            </a>
          </div>
        </div>
        <div class="bg-[#13151d]">
          <div class="container mx-auto">
            <a href="#contact">
              <img src={pagesix.src} />
            </a>
          </div>
        </div>

        <div id="contact" class="bg-white py-32">
          <div class="container mx-auto">
            <div class="max-w-3xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>

        <div class="bg-[#13151d]">
          <div class="container mx-auto">
            <a href="#contact">
              <img src={pageseven.src} />
            </a>
          </div>
        </div>
        <div class="bg-[#13151d]">
          <div class="container mx-auto">
            <a href="#contact">
              <img src={pageeight.src} />
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
