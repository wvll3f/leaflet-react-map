import { create } from "zustand";

type Store = {
  latitude?: string;
  longitude?: string;
  setLatitude: (latitude: string) => void;
  setLongitude: (longitude: string) => void;
};

export const useMapStore = create<Store>()((set) => ({
  latitude: "",
  longitude: "",
  setLatitude: (latitude: string) => set(() => ({ latitude: latitude })),
  setLongitude: (longitude: string) => set(() => ({ longitude: longitude })),
}));

