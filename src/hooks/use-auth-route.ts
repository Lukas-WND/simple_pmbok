import { create } from "zustand";

type Route = { route: string };

type Actions = {
  update: (route: string) => void;
};

export const useAuthRoute = create<Route & Actions>((set) => ({
  route: "",
  update: (href) => set(() => ({ route: href })),
}));
