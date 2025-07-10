"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import SubmitBtn from "../_components/SubmitBtn";
import Link from "next/link";
import BackButton from "../_components/BackButton";

export default function Register() {
  // Form Validation
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-screen w-full bg-gradient-to-l from-[#0C221B] to-[#5C7E6C] flex items-center justify-center px-2 py-5">
      <div className="max-w-xl w-full bg-primary-rich-black py-16 sm:py-8 px-5 rounded-3xl relative">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md w-full mx-auto"
        >
          <div>
            <Image
              src="/icons/Logo.svg"
              width={160}
              height={40}
              className="block mx-auto"
              alt="Logo"
            />
          </div>
          <h1 className="text-3xl font-normal text-white my-8 sm:my-10">
            Vul je gegevens in om jouw profiel aan te maken
          </h1>

          {/* Name Input*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {/* First Name Input */}
            <div>
              <input
                type="text"
                className="auth-inp"
                placeholder="Voornaam"
                name="first_name"
                {...register("first_name", {
                  required: "First name is required",
                })}
              />
              {errors.first_name && (
                <p className="error-msg pl-6" role="alert">
                  {errors.first_name.message}
                </p>
              )}
            </div>
            {/* Last Name Input */}
            <div>
              <input
                type="text"
                className="auth-inp"
                placeholder="Achternaam"
                name="last_name"
                {...register("last_name", {
                  required: "Last name is required",
                })}
              />
              {errors.last_name && (
                <p className="error-msg pl-6" role="alert">
                  {errors.last_name.message}
                </p>
              )}
            </div>
          </div>

          {/* Job Function Input */}
          <div className="mb-4">
            <input
              type="text"
              className="auth-inp"
              placeholder="Welke functie heb je?"
              name="function"
              {...register("function", {
                required: "Job function is required",
              })}
            />
            {errors.function && (
              <p className="error-msg pl-6" role="alert">
                {errors.function.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <input
              type="password"
              className="auth-inp"
              placeholder="Nieuw wachtwoord"
              name="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="error-msg pl-6" role="alert">
                {errors.password.message}
              </p>
            )}
          </div>
          {/* Confirm Password */}
          <div className="mb-6">
            <input
              type="password"
              className="auth-inp"
              placeholder="Bevestig wachtwoord"
              name="confirm_password"
              {...register("confirm_password", {
                required: "Confirm password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
                validate: (value) =>
                  value === getValues("password") || "Passwords do not match", // Custom validation
              })}
            />
            {errors.confirm_password && (
              <p className="error-msg pl-6" role="alert">
                {errors.confirm_password.message}
              </p>
            )}
          </div>

          {/* Terms */}
          <div className="mb-6">
            <label class="flex items-center cursor-pointer gap-2 px-2">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                class="hidden"
                {...register("checkbox", {
                  required: "You must agree to the terms",
                })}
              />
              <span class="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center transition-all duration-200">
                <Image
                  className="hidden"
                  src="../icons/check-mark.svg"
                  width={16}
                  height={16}
                  alt="Check Mark"
                ></Image>
              </span>
              <span class="text-primary-beige text-sm select-none">
                I will ingelogd blijven
              </span>
            </label>
            {errors.checkbox && (
              <p className="error-msg pl-8" role="alert">
                {errors.checkbox.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <SubmitBtn btnText="Volgende stap"></SubmitBtn>

          {/* Login Link */}
          <p className="text-base font-normal text-center text-primary-beige mt-6">
            Nog geen account? Meld je{" "}
            <Link href="/auth" className="underline">
              hier
            </Link>{" "}
            in.
          </p>
        </form>

        {/* Back Button */}
        <BackButton></BackButton>
      </div>
    </div>
  );
}
