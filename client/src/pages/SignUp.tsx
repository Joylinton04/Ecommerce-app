import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useRegister } from "@/query/useRegister";
import { useLogin } from "@/query/useLogin";

// VALIDATION SCHEMAS
const signInSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

const signUpSchema = z.object({
  username: z.string().min(2, { message: "Full name required" }),
  email: z.string().email({ message: "Enter a valid email" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default function AuthPage() {
  const [isSignIn, setIsSignIn] = useState(true);
  const { mutate, isPending, isError } = useRegister();
  const {
    mutate: mutateSignIn,
    isPending: isPendingSignIn,
    isError: isErrorSignIn,
  } = useLogin();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();


  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: { email: "", password: "" },
  });
  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { username: "", email: "", password: "" },
  });

  const handleToggle = () => setIsSignIn(!isSignIn);

  const signInSubmit = (data: z.infer<typeof signInSchema>) => {
    mutateSignIn(data, {
      onSuccess: () => {
        handleToggle();
        navigate("/");
        console.log("LoggedIn");
      },
      onError: (err: any) => {
        if (err) {
          setErrorMessage("Invalid credentials");
          console.log(err);
        }
      },
    });
  };

  const signUpSubmit = (data: z.infer<typeof signUpSchema>) => {
    mutate(data, {
      onSuccess: () => {
        handleToggle();
      },
      onError: (err: any) => {
        if (err?.response?.status === 400) {
          setErrorMessage("User already exists");
        } else {
          setErrorMessage("Something went wrong");
        }
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <AnimatePresence mode="wait">
        {isSignIn ? (
          <motion.div
            key="signin"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="sm:w-[345px] w-full shadow-xl">
              <CardHeader>
                <CardTitle className="text-center text-3xl font-semibold">
                  Welcome
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...signInForm}>
                  <form
                    className="space-y-6"
                    onSubmit={signInForm.handleSubmit(signInSubmit)}
                  >
                    <FormField
                      control={signInForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="example@gmail.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={signInForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isPendingSignIn}
                    >
                      {isPendingSignIn ? "Loading..." : "Sign In"}
                    </Button>
                    {isErrorSignIn && (
                      <p className="text-red-500">{errorMessage}</p>
                    )}
                  </form>
                </Form>

                <p className="text-sm text-center text-gray-500 mt-4">
                  Don't have an account?{" "}
                  <button
                    onClick={handleToggle}
                    className="text-blue-600 underline"
                  >
                    Sign Up
                  </button>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="signup"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="sm:w-[345px] w-full shadow-xl">
              <CardHeader>
                <CardTitle className="text-center text-3xl font-semibold">
                  Create an Account
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...signUpForm}>
                  <form
                    className="space-y-6"
                    onSubmit={signUpForm.handleSubmit(signUpSubmit)}
                  >
                    <FormField
                      control={signUpForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={signUpForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={signUpForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Create a password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isPending}
                    >
                      {isPending ? "Loading..." : "Sign Up"}
                    </Button>
                    {isError && <p className="text-red-500">{errorMessage}</p>}
                  </form>
                </Form>

                <p className="text-sm text-center text-gray-500 mt-4">
                  Already have an account?{" "}
                  <button
                    onClick={handleToggle}
                    className="text-blue-600 underline"
                  >
                    Sign In
                  </button>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
