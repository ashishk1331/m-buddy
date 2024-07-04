import { create } from "zustand";

export const userStore = create((set) => ({
	// Fields related for all user detials
	firstName: "",
	lastName: "",
	post: "",
	email: "",
	number: "",

	// functions to mutate User related fields
	updateFirstName: (firstName) => set({ firstName }),
	updateLastName: (lastName) => set({ lastName }),
	updatePost: (post) => set({ post }),
	updateEmail: (email) => set({ email }),
	updateNumber: (number) => set({ number }),
}));
