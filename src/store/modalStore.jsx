import { create } from "zustand";

export const useModalStore = create((set) => ({
  isModalOpen: false,

  openModal: () => {
    document.documentElement.classList.add("is-lock");
    set({ isModalOpen: true });
  },

  closeModal: () => {
    document.documentElement.classList.remove("is-lock");
    set({ isModalOpen: false });
  },
}));
