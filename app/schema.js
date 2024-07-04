import * as yup from "yup";

export const signInSchema = yup.object({
	email: yup.string().email().required(),
	password: yup
		.string()
		.min(8)
		.matches(
			/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
			{ message: "Choose a strong password instead." },
		)
		.required(),
});

export const signUpSchema = yup.object({
	email: yup.string().email().required(),
	password: yup
		.string()
		.min(8)
		.matches(
			/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
			{ message: "Choose a strong password instead." },
		)
		.required(),
	repassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "both passwords should match.")
		.required(),
});
