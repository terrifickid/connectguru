import { RootLayout } from "@/components/RootLayout";

import "@/styles/tailwind.css";

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

export default function Layout({ children }) {
  return (
    <html lang="en" className="">
      <body class="bg-[#13151d]">
        <div class="bg-[#13151d]">
          <div class="container mx-auto">
            <img src={pageone.src} />
          </div>
        </div>
        <div class="container mx-auto">
          <img src={pagetwo.src} />
        </div>
        <div class="bg-[#13151d]">
          <div class="container mx-auto">
            <img src={pagethree.src} />
          </div>
        </div>
        <div class="bg-[#13151d]">
          <div class="container mx-auto">
            <img src={pagefour.src} />
          </div>
        </div>
        <div class="bg-[#13151d]">
          <div class="container mx-auto">
            <img src={pagefive.src} />
          </div>
        </div>
        <div class="bg-[#13151d]">
          <div class="container mx-auto">
            <img src={pagesix.src} />
          </div>
        </div>
        <div class="bg-[#13151d]">
          <div class="container mx-auto">
            <img src={pageseven.src} />
          </div>
        </div>
        <div class="bg-[#13151d]">
          <div class="container mx-auto">
            <img src={pageeight.src} />
          </div>
        </div>
      </body>
    </html>
  );
}
