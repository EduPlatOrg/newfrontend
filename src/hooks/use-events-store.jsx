import { create } from 'zustand';
import {
  getAllEventsRequest,
  getEmailsFromEventByEventId,
} from '../api/events';

const useEventStore = create((set) => ({
  events: [],
  pastEvents: [],
  nextEvents: [],
  currentEvent: {},
  fetchEventById: async (eventId) => {
    try {
      const response = await getEmailsFromEventByEventId(eventId);
      set({ currentEvent: response.data });
    } catch (error) {
      console.error('Error al obtener el evento:', error);
    }
  },
  setCurrentEvent: (event) => set({ currentEvent: event }),
  setEvents: (events) => set({ events }),
  deleteEvent: (eventId) =>
    set((state) => ({
      events: state.events.filter((event) => event.id !== eventId),
    })),
  fetchEvents: async () => {
    try {
      const response = await getAllEventsRequest();
      set({ pastEvents: response.data.pastEvents });
      set({ nextEvents: response.data.nextEvents });
      set({
        events: response.data.pastEvents.concat(response.data.nextEvents),
      });
    } catch (error) {
      console.error('Error al obtener los eventos:', error);
    }
  },
}));

export default useEventStore;
