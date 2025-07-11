"use client";

import { useBreadcrumbs } from "@/hooks/use-breadcrumbs";
import { useEffect } from "react";

export default function NoWorkspacePage() {
  const { updateRoutes } = useBreadcrumbs();

  useEffect(() => {
    updateRoutes({
      list: [
        {
          title: "Home",
          href: "/",
        },
        {
          title: "Workspace",
          href: "/workspace/empty",
        },
      ],
    });
  }, []);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
        <div className="bg-muted/50 aspect-video rounded-xl" />
      </div>
      sem workspcace
      <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
    </div>
  );
}
