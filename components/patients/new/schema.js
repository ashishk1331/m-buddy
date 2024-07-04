import * as yup from "yup";

export const addFormSchema = yup.object({
	firstName: yup.string().required("First name is a required field."),
	lastName: yup.string().required("Last name is a required field."),
	gender: yup.string().oneOf(["Male", "Female", "Prefer not to say"]).required("Gender is a required field."),
	age: yup.number().required("Age is a required field."),
	street: yup.string().required("Street Address is a required field."),
	city: yup.string(),
	region: yup.string(),
	postalCode: yup.string().min(6).max(8),
});
