"use client";

import { Apple, KeyRound, Mail, Quote, Triangle } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// A helper component for the social login buttons, styled for the new theme.
function SocialButton({
  provider,
  children,
}: {
  provider: "google" | "apple";
  children: React.ReactNode;
}) {
  const providerIcons = {
    google: (
      <svg className="mr-3 size-5" role="img" viewBox="0 0 24 24">
        <path
          d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
          fill="#4285F4"
        />
      </svg>
    ),
    apple: <Apple className="mr-3 size-5" />,
  };

  return (
    <Button
      variant="outline"
      type="button"
      className="w-full border-stone-300 bg-[#FEFEFE] py-6 text-base text-stone-700 hover:bg-stone-50"
    >
      {providerIcons[provider]}
      {children}
    </Button>
  );
}

type AuthVariant = "login" | "register";

interface AuthFormProps extends React.ComponentProps<"div"> {
  variant?: AuthVariant;
}

export function AuthForm({
  className,
  variant = "login",
  ...props
}: AuthFormProps) {
  const isLogin = variant === "login";
  const accentColor = "#FF3402";

  return (
    <div
      className={cn("flex w-full max-w-4xl flex-col gap-6", className)}
      {...props}
    >
      {/* We inject a style tag to use the accentColor for dynamic focus rings */}
      <style>{`
        .focus-accent-ring:focus {
          --tw-ring-color: ${accentColor} !important;
        }
      `}</style>

      <Card className="overflow-hidden rounded-2xl border-stone-200 bg-[#FAF8F4] shadow-2xl shadow-stone-300/50">
        <CardContent className="grid p-0 md:grid-cols-2">
          {/* Form Section */}
          <div className="p-6 md:p-10">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center gap-2 text-center">
                <div
                  className="mb-2 flex items-center gap-2 text-xl font-bold"
                  style={{ color: accentColor }}
                >
                  <Triangle className="size-6 fill-current" />
                  <span>Jalur Mimpi</span>
                </div>
                <h1 className="text-3xl font-bold text-stone-800">
                  {isLogin ? "Welcome back" : "Create an account"}
                </h1>
                <p className="text-stone-500 text-balance">
                  {isLogin
                    ? "Login to continue your journey."
                    : "Register to start your journey."}
                </p>
              </div>

              <form className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-stone-600">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-stone-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      className="focus-accent-ring border-stone-300 bg-[#FEFEFE] pl-10 text-stone-800 placeholder:text-stone-400 focus:ring-2"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password" className="text-stone-600">
                    Password
                  </Label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-stone-400" />
                    <Input
                      id="password"
                      type="password"
                      required
                      className="focus-accent-ring border-stone-300 bg-[#FEFEFE] pl-10 text-stone-800 focus:ring-2"
                    />
                  </div>
                </div>

                {!isLogin && (
                  <div className="grid gap-2">
                    <Label
                      htmlFor="confirm-password"
                      className="text-stone-600"
                    >
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <KeyRound className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-stone-400" />
                      <Input
                        id="confirm-password"
                        type="password"
                        required
                        className="focus-accent-ring border-stone-300 bg-[#FEFEFE] pl-10 text-stone-800 focus:ring-2"
                      />
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  className="mt-2 w-full py-6 text-base text-white hover:opacity-90"
                  style={{ backgroundColor: accentColor }}
                >
                  {isLogin ? "Login" : "Create Account"}
                </Button>
              </form>

              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-stone-200">
                <span className="relative z-10 bg-[#FAF8F4] px-2 text-stone-500">
                  Or continue with
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <SocialButton provider="google">Google</SocialButton>
                <SocialButton provider="apple">Apple</SocialButton>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative hidden items-end p-8 md:flex">
            <img
              src="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1974&auto=format&fit=crop"
              alt="Starry night sky representing dreams and aspirations"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="relative z-10 text-white">
              <Quote className="mb-4 size-10 fill-white/80 text-white/80" />
              <blockquote className="text-xl font-semibold">
                "Masa depan adalah milik mereka yang percaya pada keindahan
                mimpi mereka."
              </blockquote>
              <footer className="mt-2 text-sm text-white/80">
                - Eleanor Roosevelt
              </footer>
            </div>
          </div>
        </CardContent>
      </Card>

      <div
        className="text-center text-xs text-balance text-stone-500 *:[a]:text-stone-600 *:[a]:underline *:[a]:underline-offset-4"
        style={{ "--primary-color": accentColor } as React.CSSProperties}
      >
        By clicking continue, you agree to our{" "}
        <a href="#" className="hover:text-[var(--primary-color)]">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="hover:text-[var(--primary-color)]">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
