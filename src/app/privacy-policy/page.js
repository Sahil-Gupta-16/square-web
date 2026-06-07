"use client";

import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Privacy Policy for Karobaar ERP
                    </h1>
                    <div className="flex flex-wrap gap-4 mb-12">
                        <p className="text-gray-500 py-2 px-4 bg-gray-50 rounded-lg text-sm font-medium border border-gray-100">
                            Effective Date: February 5, 2026
                        </p>
                        <p className="text-gray-500 py-2 px-4 bg-gray-50 rounded-lg text-sm font-medium border border-gray-100">
                            Last Updated: February 5, 2026
                        </p>
                        <p className="text-gray-500 py-2 px-4 bg-gray-50 rounded-lg text-sm font-medium border border-gray-100">
                            DPDP Act 2023 Compliant
                        </p>
                    </div>

                    <div className="prose prose-blue max-w-none text-gray-700 space-y-12">
                        {/* Section: About This Privacy Policy */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">About This Privacy Policy</h2>
                            <p className="leading-relaxed text-lg mb-6">
                                The terms used in this Privacy Policy ("Policy") have the meaning as defined in the Terms of Use and should be read together with the Terms of Use. This Policy explains how <span className="font-bold">Gandhiva Technologies</span> ("the Company", "we", "us", "our") collects, uses, discloses, shares and transfers information of Users. This Policy applies to anybody who downloads the <span className="font-bold">Karobaar ERP</span> mobile application or opens an account with the Company.
                            </p>

                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <h3 className="font-bold text-gray-900 mb-4">Developer Information:</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <p className="font-bold text-gray-900 text-base">Gandhiva Technologies</p>
                                        <p>Registered Address: Thane, Mumbai, Maharashtra, India - 400604</p>
                                        <p>Owner: Vinayak Yadav</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p><span className="font-bold">Email:</span> <a href="mailto:gandhivatechnologies@gmail.com" className="text-primary hover:underline">gandhivatechnologies@gmail.com</a></p>
                                        <p><span className="font-bold">Phone:</span> +91 83038 07051</p>
                                    </div>
                                </div>
                            </div>

                            <p className="leading-relaxed mb-4">
                                The Company recognizes the need for appropriate protection and management of any information shared with the Company or on the Karobaar ERP application.
                            </p>
                            <p className="leading-relaxed mb-4">
                                By using or accessing the Karobaar ERP application in any manner or opening an Account, you acknowledge that you have read and accepted this Policy and consent that the Company will collect, use, disclose, share and transfer information and personal data including but not limited to sensitive Personal Information. This Policy is an electronic record in the form of an electronic contract formed under the <span className="font-bold">Information Technology Act, 2000</span> and the rules made thereunder and the <span className="font-bold">Digital Personal Data Protection Act, 2023</span>.
                            </p>
                            <p className="leading-relaxed mb-4">
                                However, if you do not intend to share the Information as referred herein for use by the Company, you are free to opt-out or not use the Karobaar ERP application and/or the Products and Services by deleting the Account, and in such a case, you are not required to give consent as per this Privacy Policy.
                            </p>
                            <p className="leading-relaxed">
                                If in future you feel that the Information or any part thereof as collected should not be used or should be deleted, consent granted in this Policy can be withdrawn by writing to the Company seeking to withdraw the consent or by deleting the Account. However, if you withdraw consent for the Company to use the Information as provided in this Policy, the Products and Services cannot be offered to you by the Company.
                            </p>
                        </section>

                        {/* Section: Modification */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Modification of Privacy Policy</h2>
                            <p className="leading-relaxed text-lg">
                                These policies may be updated from time to time in the future. You should agree to review our privacy policies regularly by visiting this page. Continued access to or use of the service will mean that you agree to the changes.
                            </p>
                        </section>

                        {/* Section: When This Privacy Statement Applies */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">When This Privacy Statement Applies</h2>
                            <p className="leading-relaxed text-lg">
                                This liability to you is limited to those who have downloaded the Karobaar ERP application and logged in by clicking on the "I Agree/Login" button for Terms and Conditions or have explicitly consented to the policy on any other product/service page offered to you.
                            </p>
                        </section>

                        {/* Section: How Information is Collected, Used, Disclosed, Shared and Stored */}
                        <section className="space-y-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">How Information is Collected, Used, Disclosed, Shared and Stored</h2>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-900">1. Collection of Information</h3>
                                <p className="leading-relaxed">
                                    The Company collects, uses, discloses, shares and transfers Information, including but not limited to User content, other content, communications, information etc. provided by Users when the Users access or use the Karobaar ERP application for the Products and Services. By use of the Karobaar ERP application and/or Products and Services, express consent and permission is granted to the Company for having access to, using, processing, disclosing, sharing and transferring of information in accordance with this Policy and the Terms of Use.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-gray-900">2. Types of Information Collected</h3>

                                <div className="space-y-4">
                                    <h4 className="font-extrabold text-gray-900">Personal Information</h4>
                                    <p className="text-sm">For the purpose of these Terms, "Personal Information" shall mean any information provided by the User and shall include, without limitation:</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-inside list-disc text-sm">
                                        <li>Name and business name</li>
                                        <li>Mobile number & Email address</li>
                                        <li>Business address</li>
                                        <li>GST number (if provided)</li>
                                        <li>MSME registration details (if applicable)</li>
                                        <li>FSSAI license details (if applicable)</li>
                                        <li>Customer/Party information (names, contact details)</li>
                                        <li>Product/inventory details (glass types, aluminum, hardware, dimensions, prices, thickness)</li>
                                        <li>Invoice and transaction records</li>
                                        <li>Payment information (amounts, dates, methods)</li>
                                        <li>User content including notes, custom fields, descriptions</li>
                                        <li>One Time Password (OTP) for authenticating registration processes</li>
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-extrabold text-gray-900">Non-Personal Information</h4>
                                    <p className="text-sm">For the purpose of these Terms, "Non-Personal Information" shall mean information that does not specifically identify an individual but includes:</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-inside list-disc text-sm">
                                        <li>Type of mobile device used</li>
                                        <li>Device's unique device ID (IMEI, SSAID, Serial Number)</li>
                                        <li>Android/iOS version and build info</li>
                                        <li>Hardware specs (RAM, storage, processor)</li>
                                        <li>ISP and IP address</li>
                                        <li>Network operator info (MCC, MNC codes)</li>
                                        <li>SIM info (roaming state, operator)</li>
                                        <li>WiFi info (MAC address)</li>
                                        <li>Battery level and charging state</li>
                                        <li>App version and build number</li>
                                        <li>Language and time zone settings</li>
                                    </ul>
                                </div>
                                <p className="text-sm italic p-4 bg-gray-50 rounded-xl">
                                    The Company may collect Information when registration or opening of an Account happens on the Karobaar ERP application, when features or Products and Services are used, when you share User content with the Company, and when you interact with the customer support team including the details of messages or chats.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-900">3. Cookies and Similar Technologies</h3>
                                <p className="leading-relaxed">
                                    The Company may use cookies and similar technologies to monitor usage including, without limitation, to provide useful features to simplify experiences for you, like remembering login credentials and certain Personal Information, and to deliver relevant content based on preferences, usage patterns and location.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-900">4. Payment Information</h3>
                                <p className="leading-relaxed">
                                    There could arise a requirement of providing payment information when you are required to make payment for Government Fees, subscription fees, or any Facilitation Fees as per the Terms of Use. The Company or any third party providing services related to payment may use this information. The Company shall in no case be liable for any loss or damage sustained by you arising out of any disclosure (inadvertent or otherwise) of any information relating to bank account, credit or debit card details, or UPI details in the course of any online transactions or payments made.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-900">5. Usage Information</h3>
                                <p className="leading-relaxed">
                                    The Company collects information about your use of the Karobaar ERP application and/or Products and Services, such as features used (invoice creation, inventory management, reports), activity carried out, time, frequency and duration of activities, screens viewed, navigation patterns, error logs, and performance data.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-900">6. Device Information</h3>
                                <p className="leading-relaxed">
                                    The Company is required to collect information from and about the mobile devices used and combines this information across different devices that are used.
                                </p>
                                <div className="space-y-4 pt-2">
                                    <p className="font-bold text-gray-900">a. Device and Technical Information:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-sm">
                                        <li>Operating system and version</li>
                                        <li>Hardware model and manufacturer</li>
                                        <li>Software versions, battery level, signal strength</li>
                                        <li>Available storage space and RAM</li>
                                        <li>App and file names and types</li>
                                        <li>Plugins and installed applications metadata</li>
                                        <li>Unique device identifiers (IMEI, Serial Number, SSAID, Android ID)</li>
                                    </ul>
                                    <p className="font-bold text-gray-900">b. Permissions and Access:</p>
                                    <ul className="list-disc pl-6 space-y-1 text-sm">
                                        <li>Access to device storage</li>
                                        <li>Access to camera (when taking photos)</li>
                                        <li>Network connectivity status</li>
                                        <li>Data from local storage on devices</li>
                                    </ul>
                                    <p className="font-bold text-gray-900">c. Location-Related Information:</p>
                                    <p className="text-sm">Location-related information such as approximate location to provide personalized and improved use of the Karobaar ERP application. Location-related information can be based on things such as IP addresses, network information, or mobile operator information. <span className="font-bold">We do not collect precise GPS location data.</span></p>
                                </div>
                            </div>
                        </section>

                        {/* Section: Google Services */}
                        <section className="space-y-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Google Services Permissions Usage</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="p-6 bg-red-50/50 rounded-2xl border border-red-100">
                                    <h3 className="font-bold text-red-900 mb-2">Gmail Send</h3>
                                    <p className="text-xs text-red-800">Allows you to send your invoices and report PDFs to your customers directly from the app and take backups to your email.</p>
                                </div>
                                <div className="p-6 bg-yellow-50/50 rounded-2xl border border-yellow-100">
                                    <h3 className="font-bold text-yellow-900 mb-2">Google Drive</h3>
                                    <p className="text-xs text-yellow-800">Allows the app to take regular automatic backup of your app data on your Google Drive.</p>
                                </div>
                                <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100">
                                    <h3 className="font-bold text-blue-900 mb-2">Google Contacts</h3>
                                    <p className="text-xs text-blue-800">Allows users to import Google Contacts for adding parties (customers/suppliers) to the accounting software.</p>
                                </div>
                            </div>
                            <div className="bg-gray-900 text-white p-8 rounded-3xl">
                                <h3 className="text-lg font-bold mb-4">How Karobaar ERP Stores and Shares Google User Data</h3>
                                <p className="leading-relaxed text-sm opacity-90">
                                    <span className="font-bold underline text-white">Karobaar ERP does not store any Google user data on our servers.</span> Whenever Karobaar ERP fetches this data, it gets shown to you while using the feature. You choose the data you want to use for import and that gets used to create customers/vendors for you in the software. Karobaar ERP will not store this data for any further use beyond the immediate import operation. Karobaar ERP will also not share your Google authentication data with anyone. Karobaar ERP will not store this data anywhere on external servers.
                                </p>
                            </div>
                        </section>

                        {/* Section: Financial SMS */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Collection of Financial SMS Information</h2>
                            <p className="leading-relaxed text-lg">
                                We don't collect, read or store your personal SMS from your inbox. <span className="font-bold underline">We collect and monitor only financial SMS sent by 6-digit alphanumeric senders</span> from your inbox which helps us in:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-inside list-disc text-sm">
                                <li>Identifying bank accounts held</li>
                                <li>Understanding cash flow patterns</li>
                                <li>Identifying transaction descriptions and amounts</li>
                                <li>Performing credit risk assessment</li>
                                <li>Determining your risk profile</li>
                                <li>Providing appropriate credit analysis</li>
                            </ul>
                            <p className="text-sm p-4 bg-orange-50 border border-orange-100 rounded-xl text-orange-900">
                                <span className="font-bold">Note:</span> This feature is <span className="font-bold underline">optional</span> and only activated if you explicitly opt-in to credit assessment services.
                            </p>
                        </section>

                        {/* Section: Device Location & ID */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Collection of Device Location and Information</h2>
                            <p className="leading-relaxed">
                                We collect and monitor information about the approximate location of your device to provide serviceability assessment, reduce risk, verify business address, make better decisions, and expedite KYC processes.
                            </p>
                            <div className="space-y-4">
                                <p className="text-sm">The information we collect from your device includes:</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 list-inside list-disc text-xs">
                                    <li>Hardware model and build model</li>
                                    <li>RAM and storage capacity</li>
                                    <li>Unique identifiers (IMEI, Serial Number, Android ID)</li>
                                    <li>SIM info (operator, roaming, MNC/MCC)</li>
                                    <li>WiFi info (MAC address)</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section: Installed Apps */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Collection of Installed Applications</h2>
                            <p className="leading-relaxed">
                                We collect a list of installed applications' metadata information (name, package name, version codes) to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 text-sm">
                                <li>Assess creditworthiness (if you opt-in to credit services)</li>
                                <li>Enrich your profile with pre-approved customized offers</li>
                                <li>Prevent fraud and ensure device security</li>
                            </ul>
                            <p className="text-sm p-4 bg-gray-50 border border-gray-100 rounded-xl">
                                <span className="font-bold">Note:</span> This feature is <span className="font-bold underline">optional</span> and only activated if you explicitly opt-in to credit assessment services.
                            </p>
                        </section>

                        {/* Section: Permissions (Storage & Camera) */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Storage Permission</h2>
                                <p className="text-sm leading-relaxed">Required so that your business data can be securely saved, invoices and reports can be exported as PDF/Excel, backup files created/restored, and product images stored locally.</p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">Camera Permission</h2>
                                <p className="text-sm leading-relaxed">Required to enable you to click photos of products for inventory, capture images of invoices or documents, and take photos for business records. Access is only used when you explicitly tap on "Add Photo".</p>
                            </div>
                        </section>

                        {/* Section: Other Non-Personal Info */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Collection of Other Non-Personal Information</h2>
                            <p className="leading-relaxed text-sm mb-4">
                                We automatically track certain information based on behavior in our Application for internal research on demographics, interests, and behavior. This includes IP address, app screen navigation, and analytics tools.
                            </p>
                            <p className="leading-relaxed text-sm">
                                We retain transaction and usage information as necessary to resolve disputes, provide customer support and troubleshoot problems as permitted by law.
                            </p>
                        </section>

                        {/* Section: Third-Party SDK */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Link to Third-Party SDK</h2>
                            <p className="leading-relaxed text-sm mb-6">
                                The Karobaar ERP Application may have a link to registered third-party SDKs that collect data on our behalf to perform analytics, provide crash reporting, enable cloud backup, process payments, or provide credit assessment.
                            </p>
                            <div className="p-6 bg-green-50/50 rounded-2xl border border-green-100 text-xs">
                                <h3 className="font-bold text-green-900 mb-4">Security measures employed by our partners:</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li>Separation of environments & segregation of duties</li>
                                    <li>Strict role-based access control (RBAC)</li>
                                    <li>Application-level encryption for stored data</li>
                                    <li>Intrusion prevention and detection systems</li>
                                    <li>File integrity monitoring solutions</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section: How Karobaar ERP Uses User Data */}
                        <section className="space-y-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">How Karobaar ERP Uses User Data</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                <div className="space-y-4">
                                    <h3 className="font-bold text-gray-900 underline">1. Core Application Services</h3>
                                    <ul className="list-disc pl-6 space-y-1 text-xs">
                                        <li>Managing your Account with the Company</li>
                                        <li>Creating invoices with automatic unit conversions</li>
                                        <li>Managing inventory for Glass, Aluminum, etc.</li>
                                        <li>Tracking stock levels & generating alerts</li>
                                        <li>GST-compliant invoices & business reports</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-gray-900 underline">2. Authentication and Verification</h3>
                                    <ul className="list-disc pl-6 space-y-1 text-xs">
                                        <li>Authentication using One Time Password (OTP)</li>
                                        <li>Verification with government/GST authorities</li>
                                        <li>MSME registration & Bureau checks</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-gray-900 underline">3. Communication</h3>
                                    <ul className="list-disc pl-6 space-y-1 text-xs">
                                        <li>Send SMS for OTP authenticating transactions</li>
                                        <li>Send invoices to customers via email/messaging</li>
                                        <li>Stock alerts and payment notifications</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-gray-900 underline">4. Research and Development</h3>
                                    <ul className="list-disc pl-6 space-y-1 text-xs">
                                        <li>Develop, test and improve the application</li>
                                        <li>Test and troubleshoot new products/features</li>
                                        <li>Improve navigation and transaction experience</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-gray-900 underline">5. Security, Fraud & Legal</h3>
                                    <ul className="list-disc pl-6 space-y-1 text-xs">
                                        <li>Prevent unauthorized access and fraud</li>
                                        <li>Verify device authenticity</li>
                                        <li>Comply with legal obligations & MAINTAIN records</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section: Sharing of Personal Information */}
                        <section className="space-y-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Sharing of Personal Information</h2>
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <h3 className="font-bold text-gray-900">1. Disclosure with Government Authorities</h3>
                                    <p className="text-sm">Personal Information may be shared with government authorities including <span className="font-bold">GST Authority, MSME Authority, FSSAI Authority, and Income Tax Department</span> to enable providing Products and Services and government registrations.</p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-gray-900">2. Disclosure to Third-Party Service Providers</h3>
                                    <p className="text-sm">We share information with cloud service providers (AWS, Google, Firebase), database services, email service providers (Gmail), SMS providers, and technology partners bound by confidentiality agreements.</p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="font-bold text-gray-900">3. Other Disclosures</h3>
                                    <ul className="list-disc pl-6 space-y-2 text-sm">
                                        <li><span className="font-bold">Prospective Acquirers:</span> In connection with a sale, merger, or reorganization.</li>
                                        <li><span className="font-bold">To Facilitate Payment:</span> Directing to a payment gateway service provider.</li>
                                        <li><span className="font-bold">With Your Consent:</span> Explicit consent for third-party business tools.</li>
                                        <li><span className="font-bold">Required by Law:</span> Under court orders or legal processes.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Section: Protection */}
                        <section className="bg-primary text-white p-8 md:p-16 rounded-[4rem] text-center">
                            <h2 className="text-3xl font-bold mb-6">Protection of Information</h2>
                            <p className="max-w-3xl mx-auto leading-relaxed opacity-90 mb-8 text-lg">
                                The Company, on a best effort basis, shall attempt to take adequate measures to protect the security of Personal Information and to ensure that choices for its intended use are honored.
                            </p>
                            <div className="flex justify-center flex-wrap gap-8">
                                <div className="bg-white/10 backdrop-blur-md px-8 py-6 rounded-3xl border border-white/20">
                                    <p className="font-bold text-xl mb-1">Vinayak Yadav</p>
                                    <p className="text-sm opacity-80 underline">Grievance Officer</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md px-8 py-6 rounded-3xl border border-white/20">
                                    <p className="font-bold text-xl mb-1 text-white">Contact Us</p>
                                    <p className="text-sm opacity-80 underline">gandhivatechnologies@gmail.com</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
