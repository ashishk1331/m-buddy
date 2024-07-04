import slugify from "slugify";
import { twMerge } from "tailwind-merge";
import { Image, UserCircle } from "@phosphor-icons/react";
import { useId } from "react";
import { useFormik } from "formik";
import { editFormSchema } from "./schema";
import Link from "next/link";
import { userStore } from "@/stores/user.store.js";
import { shallow } from "zustand/shallow";
import { useRouter } from "next/navigation";

export default function Example() {
  const router = useRouter();
  const [firstName, lastName] = userStore(
    (state) => [state.firstName, state.lastName],
    shallow,
  );
  const [updateFirstName, updateLastName] = userStore(
    (state) => [state.updateFirstName, state.updateLastName],
    shallow,
  );
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: firstName || "",
        lastName: lastName || "",
      },
      validationSchema: editFormSchema,
      onSubmit: (values) => {
        updateFirstName(values.firstName);
        updateLastName(values.lastName);
        console.log(values);
        router.push("/app/me")
      },
    });

  return (
    <form
      className="mt-6 pt-3 pb-12 px-4 overflow-y-scroll"
      onSubmit={handleSubmit}
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Basic information about patient for hospital records.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.firstName && touched.firstName && (
                <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
              )}
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              {errors.lastName && touched.lastName && (
                <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link href="/app/patients">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
        </Link>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
