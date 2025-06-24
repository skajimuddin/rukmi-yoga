"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // If not already on the site-down page, redirect there
    if (pathname !== "/site-down") {
      router.push("/site-down");
    }

    // Disable right-click
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    // Disable mouse clicks
    document.addEventListener(
      "click",
      (e) => {
        if (pathname !== "/site-down") {
          e.preventDefault();
          e.stopPropagation();
        }
      },
      true
    );

    // Disable keyboard input
    document.addEventListener(
      "keydown",
      (e) => {
        if (pathname !== "/site-down") {
          e.preventDefault();
          e.stopPropagation();
        }
      },
      true
    );

    // Disable text selection
    document.addEventListener("selectstart", (e) => {
      if (pathname !== "/site-down") {
        e.preventDefault();
        return false;
      }
    });

    // Disable copy/paste
    document.addEventListener("copy", (e) => {
      if (pathname !== "/site-down") {
        e.preventDefault();
      }
    });
    document.addEventListener("paste", (e) => {
      if (pathname !== "/site-down") {
        e.preventDefault();
      }
    });

    // Add CSS to show that interactions are disabled
    if (pathname !== "/site-down") {
      document.body.style.cursor = "not-allowed";
    }

    return () => {
      // Clean up event listeners on component unmount
      document.removeEventListener("contextmenu", (e) => e.preventDefault());
      document.body.style.cursor = "default";
    };
  }, [pathname, router]);

  return (
<<<<<<< HEAD
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
=======
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Sri Rukhamini Yoga</title>
        <meta
          name="description"
          content="Authentic yoga teachings for holistic wellness"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
>>>>>>> d85bb187f6aad6827ca0344fcee18e40b4a13c3e
    </html>
  );
}
