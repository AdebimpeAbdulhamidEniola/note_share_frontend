
"use client"
import BackgroundWave from "@/components/BackgroundWave";
import "./globals.css";
import { Outfit } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body
        className={`${outfit.className} bg-[url('/resources/Hero-Background-notecode@2x.png')] bg-position-[center_top_-2.5rem]  bg-size-[100vw_100vh]  bg-no-repeat bg-fixed pb-28`}
      >
        <QueryClientProvider client={queryClient}>
          {children}
          <BackgroundWave />
        </QueryClientProvider>
      </body>
    </html>
  );
}
