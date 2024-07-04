import * as yup from "yup";

export const editFormSchema = yup.object({
	firstName: yup.string().required("First name is a required field."),
	lastName: yup.string().required("Last name is a required field."),
});
