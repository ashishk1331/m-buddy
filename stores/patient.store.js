import { create } from "zustand";

export const patientStore = create((set) => ({
	patients: [],

	// methods to mutate patients array
	addPatient: (patient) =>
		set((state) => ({
			patients: [patient, ...state.patients],
		})),
}));
