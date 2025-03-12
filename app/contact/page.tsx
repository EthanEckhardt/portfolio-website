"use client";

import { ScrollSection } from "@/components/scroll-section";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .nonempty({
      message: "Name is required",
    })
    .max(255),
  email: z
    .string()
    .nonempty({
      message: "Email is required",
    })
    .email({
      message: "Is that an email?",
    })
    .max(255),
  message: z.string().nonempty({
    message: "Don't forget to write a message!",
  }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const randomMessage = () => {
    const messages = [
      "Hello, Ethan!",
      "I love your work!",
      "Can you help me with a project?",
      "I have a question.",
      "I want to hire you!",
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const [messagePlaceholder, setMessagePlaceholder] = useState("");

  useEffect(() => {
    setMessagePlaceholder(randomMessage());
  }, []);

  return (
    <ScrollSection className="justify-center items-center">
      <div className="fixed top-0 left-0 p-4">
        <Link href="/">
          <Button variant="ghost">
            <ChevronLeft />
            Home
          </Button>
        </Link>
      </div>
      <div className="flex flex-col justify-center w-screen h-full lg:w-4xl py-24">
        <h1 className="scroll-m-20 text-4xl font-sans font-extrabold tracking-tight lg:text-6xl">
          Contact Me
        </h1>
        <br />
        <Form {...form}>
          <form
            className="flex flex-col gap-2"
            onReset={() => form.reset()}
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="flex-grow flex gap-4 w-full items-baseline">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Ethan Eckhardt" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={messagePlaceholder}
                      {...field}
                      className="h-50"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <Button type="submit" className="w-fit">
                Submit
              </Button>
              <Button type="reset" variant="ghost" className="w-fit">
                Clear
                <X />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </ScrollSection>
  );
}
