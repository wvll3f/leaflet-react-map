// src/store/useMarkersStore.ts
import { create } from "zustand";
import type { LatLngLiteral } from "leaflet";

type Marker = {
  id: string;
  descricao?: string;
  ip?: string;
  mac?: string;
  position: LatLngLiteral;
};
type MarkerReqeust = {
  descricao?: string;
  ip?: string;
  mac?: string;
  position: LatLngLiteral;
};

interface MarkersState {
  markers: Marker[];
  addMarker: ({descricao, ip, mac, position}: MarkerReqeust) => void;
  removeMarker: (id: string) => void;
}

export const useMarkersStore = create<MarkersState>((set) => ({
  markers: [],
  addMarker: ({ descricao, ip, mac, position }: MarkerReqeust) =>
    set((state) => ({
      markers: [
        ...state.markers,
        { id: crypto.randomUUID(), descricao, ip, mac, position },
      ],
    })),
  removeMarker: (id) =>
    set((state) => ({
      markers: state.markers.filter((m) => m.id !== id),
    })),
}));
