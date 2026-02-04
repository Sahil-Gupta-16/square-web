import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-xl font-bold text-primary flex items-center gap-2 mb-4">
                            <span className="bg-primary text-white p-1 rounded-lg">SQ</span>
                            <span>Square Glass</span>
                        </Link>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            Modern accounting and inventory management for glass and aluminum wholesalers.
                            Simplify your business with Square Glass.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">Product</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="#features" className="text-gray-600 hover:text-primary text-sm">Features</Link>
                            </li>
                            <li>
                                <Link href="#pricing" className="text-gray-600 hover:text-primary text-sm">Pricing</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-600 hover:text-primary text-sm">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-600 hover:text-primary text-sm">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">Legal</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy-policy" className="text-gray-600 hover:text-primary text-sm">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="text-gray-600 hover:text-primary text-sm">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="#" className="text-gray-600 hover:text-primary text-sm">GDPR Compliance</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 mt-1">
                                <Phone className="w-4 h-4 text-primary shrink-0" />
                                <span className="text-gray-600 text-sm">+91-XXXXX-XXXXX</span>
                            </li>
                            <li className="flex items-start gap-3 mt-1">
                                <Mail className="w-4 h-4 text-primary shrink-0" />
                                <span className="text-gray-600 text-sm">hello@squareglass.app</span>
                            </li>
                            <li className="flex items-start gap-3 mt-1">
                                <MapPin className="w-4 h-4 text-primary shrink-0" />
                                <span className="text-gray-600 text-sm">Gurgaon, Haryana, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} Square Glass App. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <span className="text-xs text-gray-400">DPDP Act 2023 Compliant</span>
                        <span className="text-xs text-gray-400">Made with ❤️ in India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
