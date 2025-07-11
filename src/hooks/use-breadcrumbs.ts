import { create } from "zustand";

export type BreadcrumbsItem = {
  title: string;
  href: string;
};

export type BreadcrumbsList = {
  list: BreadcrumbsItem[];
};

type Actions = {
  clear: () => void;
  updateRoutes: (routes: BreadcrumbsList) => void;
};

export const useBreadcrumbs = create<BreadcrumbsList & Actions>((set) => ({
  list: [],
  clear: () => set(() => ({ list: [] })),
  updateRoutes: (routes) => set(() => ({ list: routes.list })),
}));
