import { create } from 'zustand';
import { getAllEventsRequest } from '../api/events';

const useEventStore = create((set) => ({
  events: [],
  setEvents: (events) => set({ events }),
  deleteEvent: (eventId) =>
    set((state) => ({
      events: state.events.filter((event) => event.id !== eventId),
    })),
  fetchEvents: async () => {
    try {
      const response = await getAllEventsRequest(); // Asume que esta es tu función para obtener los eventos
      set({ events: response.data.events });
    } catch (error) {
      console.error('Error al obtener los eventos:', error);
    }
  },
}));

export default useEventStore;
