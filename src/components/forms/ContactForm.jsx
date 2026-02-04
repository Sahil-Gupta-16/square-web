"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import { toast } from "sonner";
import { Send } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().min(10, { message: "Please enter a valid 10-digit phone number." }),
    business: z.string().min(2, { message: "Business name is required." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const ContactForm = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            business: "",
            message: "",
        },
    });

    const onSubmit = async (values) => {
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                toast.success("Message sent successfully!");
                form.reset();
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again later.");
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700 font-semibold">Your Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} className="h-12 rounded-xl" />
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
                                <FormLabel className="text-gray-700 font-semibold">Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="john@example.com" {...field} className="h-12 rounded-xl" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700 font-semibold">Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="+91 XXXXX XXXXX" {...field} className="h-12 rounded-xl" />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="business"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-700 font-semibold">Business Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Glass Wholesaler Pvt Ltd" {...field} className="h-12 rounded-xl" />
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
                            <FormLabel className="text-gray-700 font-semibold">How can we help?</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us more about your business needs..."
                                    className="min-h-[120px] rounded-xl resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold gap-2 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                    <Send className="w-5 h-5" />
                    Send Message
                </Button>
            </form>
        </Form>
    );
};

export default ContactForm;
