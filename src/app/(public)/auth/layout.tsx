"use client";

import React, { ReactElement, useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useGSAP } from "@gsap/react";

import { Card, CardContent } from "@/components/ui/card";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useAuthRoute } from "@/hooks/use-auth-route";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  gsap.registerPlugin(useGSAP, Flip);

  const { route } = useAuthRoute();

  const pathname = usePathname();
  const cardItems = useRef<HTMLDivElement[]>([]);

  const swapComponents = route != null && !pathname.includes(route);

  const [component, setComponent] = useState<ReactElement>();

  useEffect(() => {
    const signin: boolean = pathname.includes("sign-in");

    if (signin) {
      setComponent(
        <>
          <div
            id="form-content"
            className={cn("item h-full flex-1 bg-slate-900")}
          >
            {children}
          </div>
          <div
            id="image-logo"
            className="item bg-muted relative hidden flex-1 md:block"
          >
            <img
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.9] dark:grayscale"
            />
          </div>
        </>
      );
    } else {
      setComponent(
        <>
          <div
            id="image-logo"
            className="item bg-muted relative hidden flex-1 md:block"
          >
            <img
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.9] dark:grayscale"
            />
          </div>
          <div
            id="form-content"
            className={cn("item h-full flex-1 bg-slate-900")}
          >
            {children}
          </div>
        </>
      );
    }
  }, []);

  useGSAP(() => {
    if (!swapComponents) return;
    cardItems.current = gsap.utils.toArray(".item");

    function doFlip() {
      const state = Flip.getState(cardItems.current);

      swap(cardItems.current);

      Flip.from(state, { duration: 0.7, ease: "power2.inOut" });
    }

    function swap([a, b]: HTMLDivElement[]) {
      a.parentNode?.children[0] === a
        ? a.parentNode?.appendChild(a)
        : a.parentNode?.appendChild(b);
    }

    doFlip();
  }, [swapComponents]);

  return (
    <main className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className="flex flex-col gap-6">
          <Card className="overflow-hidden p-0 relative h-full">
            <CardContent className="flex p-0">{component}</CardContent>
          </Card>
          <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </main>
  );
}
