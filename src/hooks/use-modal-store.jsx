import { create } from 'zustand';

export const useModal = create((set) => ({
  modalData: {},
  type: null,
  isOpen: false,
  onOpen: (type, modalData = {}) => set({ isOpen: true, type, modalData }),
  onClose: () => set({ type: null, isOpen: false }),
}));
