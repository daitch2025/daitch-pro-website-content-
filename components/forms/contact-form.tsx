"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      reset();
      toast.success("Message sent — we'll be in touch shortly.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  if (submitted) {
    return (
      <div className="rounded-[var(--radius-lg)] border border-green-200 bg-green-50 p-8 text-center">
        <p className="font-display text-xl font-semibold text-green-800">Message received.</p>
        <p className="mt-2 text-sm text-green-700">Our team will get back to you within one business day.</p>
        <button onClick={() => setSubmitted(false)} className="mt-4 text-sm font-medium text-green-800 underline underline-offset-4">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Name *</Label>
          <Input id="name" placeholder="Jane Doe" {...register("name")} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" placeholder="jane@company.com" {...register("email")} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" placeholder="How can we help?" {...register("subject")} />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" rows={5} placeholder="Tell us a bit about your business..." {...register("message")} />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="group/btn inline-flex h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[var(--shadow-glow-green)] transition-all hover:brightness-110 disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
        Send Message
      </button>
    </form>
  );
}
