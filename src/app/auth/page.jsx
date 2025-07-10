"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import BackButton from "./_components/BackButton";
import SubmitBtn from "./_components/SubmitBtn";

export default function LoginPage() {
  // Form Validation
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-screen w-full bg-black grid grid-cols-1 md:grid-cols-2 gap-5 relative">
      {/* Form */}
      <div className="flex items-center justify-center text-center text-white py-10 px-4 md:px-3 md:py-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md w-full mx-auto"
        >
          <div>
            <Image
              src="/icons/Logo.svg"
              width={160}
              height={40}
              className="block mx-auto mb-4"
              alt="Logo"
            ></Image>
          </div>
          <h1 className="text-[40px] sm:text-[50px] font-medium mb-8">
            Welkom terug!
          </h1>

          <div className="mb-4">
            <input
              type="text"
              className="auth-inp"
              placeholder="Email"
              name="email"
              {...register("email", {
                required: "Email Address is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="error-msg pl-6" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              className="auth-inp"
              placeholder="Wachtwoord"
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

          <div className="flex justify-end mb-4">
            <a
              href="#"
              className="text-primary-beige text-sm font-normal hover:underline"
            >
              Wachtwoord vergeten?
            </a>
          </div>

          <div className="mb-4">
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
                  src="icons/check-mark.svg"
                  width={16}
                  height={16}
                  alt="Check Mark"
                ></Image>
              </span>
              <span class="text-primary-beige text-base font-normal select-none">
                I will ingelogd blijven
              </span>
            </label>
            {errors.checkbox && (
              <p className="error-msg pl-8" role="alert">
                {errors.checkbox.message}
              </p>
            )}
          </div>

          {/* Submit Btn */}
          <SubmitBtn btnText="Log In"></SubmitBtn>

          {/* Resgiter */}
          <p className="text-base font-normal text-primary-beige">
            Nog geen account? Meld je{" "}
            <Link href="/auth/register" className="underline">
              hier
            </Link>{" "}
            aan.
          </p>
        </form>
      </div>
      {/* Image */}
      <div className="h-full w-full hidden md:block">
        <Image
          src="/images/login-img.png"
          alt="Login Image"
          width={500}
          height={500}
          className="object-cover h-full w-full"
        />
      </div>
      {/* Back Button */}
      <BackButton></BackButton>
    </div>
  );
}
