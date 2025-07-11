"use client";

import { useBreadcrumbs } from "@/hooks/use-breadcrumbs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import Link from "next/link";
import { Fragment } from "react";

export function LayoutBreadcrumbs() {
  const { list } = useBreadcrumbs();

  return list.length > 0 ? (
    <Breadcrumb>
      <BreadcrumbList>
        {list.map((item, idx) => (
          <Fragment key={idx}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={item.href}>{item.title}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {idx < list.length - 1 ? (
              <BreadcrumbSeparator className="hidden md:block" />
            ) : null}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  ) : null;
}
