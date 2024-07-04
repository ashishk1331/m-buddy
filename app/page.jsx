"use client";
import { HeartStraight } from "@phosphor-icons/react";
import { useFormik } from "formik";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { signInSchema, signUpSchema } from "./schema";
import { useRouter } from "next/navigation";
import { userStore } from "@/stores/user.store.js";

export default function () {
    const [signIn, setSignIn] = useState(true);
    const router = useRouter();

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <HeartStraight
                        className="mx-auto h-10 w-auto fill-indigo-600"
                        weight="fill"
                    />
                    <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        {signIn
                            ? "Sign in to your account"
                            : "Create an account"}
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <AnimatePresence>
                        {signIn ? (
                            <SignInForm router={router} />
                        ) : (
                            <SignUpForm route={router} />
                        )}
                    </AnimatePresence>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        {signIn ? "Not a member?" : "Already a member."}{" "}
                        <button
                            onClick={(e) => setSignIn((prev) => !prev)}
                            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            {signIn ? "Sign Up" : "Sign In"}
                        </button>
                    </p>
                </div>
            </div>
        </>
    );
}

let formAnimation = {
    initial: { opacity: 0.2 },
    animate: { opacity: 1 },
    exit: { opacity: 0.2 },
};

function SignInForm({ router }) {
    const updateEmail = userStore((state) => state.updateEmail);
    const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
        useFormik({
            initialValues: {
                email: "",
                password: "",
            },
            validationSchema: signInSchema,
            onSubmit: (values) => {
                updateEmail(values.email);
                router.push("/app");
            },
        });

    return (
        <motion.form
            {...formAnimation}
            className="space-y-6"
            onSubmit={handleSubmit}
        >
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                {errors.email && touched.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )}
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Password
                    </label>
                    <div className="text-sm">
                        <a
                            href="#"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                            Forgot password?
                        </a>
                    </div>
                </div>
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
                {errors.password && touched.password && (
                    <p className="text-sm text-red-500 mt-1">
                        {errors.password}
                    </p>
                )}
            </div>

            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign in
                </button>
            </div>
        </motion.form>
    );
}

function SignUpForm({ router }) {
    const updateEmail = userStore((state) => state.updateEmail);
    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues: {
            email: "",
            password: "",
            repassword: "",
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            updateEmail(values.email);
            router.push("/app");
        },
    });

    return (
        <motion.form
            {...formAnimation}
            className="space-y-6"
            onSubmit={handleSubmit}
        >
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Password
                </label>
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={values.password}
                        onChange={handleChange}
                        autoComplete="password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <label
                    htmlFor="repassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Re-type password
                </label>
                <div className="mt-2">
                    <input
                        id="repassword"
                        name="repassword"
                        type="text"
                        value={values.repassword}
                        onChange={handleChange}
                        autoComplete="password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Sign Up
                </button>
            </div>
        </motion.form>
    );
}
