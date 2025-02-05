import { RootLayout } from "@/components/RootLayout";

import "@/styles/tailwind.css";

export const metadata = {
  title: {
    template: "Actai Advisors",
    default:
      "Actai Advisors - Accelerating innovation for startups, investors, and fund managers.",
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
