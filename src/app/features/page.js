"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Ruler,
  Layers,
  FileText,
  BarChart3,
  CheckCircle2,
  Share2,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { APP_LINKS } from "@/constants/links";

// ==========================================
// INTERACTIVE MOCKUP COMPONENTS
// ==========================================

// 1. UNIT SYSTEM MOCKUP
const UnitSystemMockup = () => {
  const [widthWhole, setWidthWhole] = useState(32);
  const [widthFrac, setWidthFrac] = useState(5); // in 1/16ths (5/16)
  const [heightWhole, setHeightWhole] = useState(48);
  const [heightFrac, setHeightFrac] = useState(8); // in 1/16ths (8/16 = 1/2)

  // Calculate Sq. Ft: (Width in inches * Height in inches) / 144
  const totalWidth = widthWhole + widthFrac / 16;
  const totalHeight = heightWhole + heightFrac / 16;
  const sqftValue = (totalWidth * totalHeight) / 144;
  const sqft = sqftValue.toFixed(2);
  const sqm = (sqftValue * 0.092903).toFixed(2);

  return (
    <div className="w-full bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl p-6 flex flex-col md:flex-row gap-6 text-white min-h-[350px]">
      {/* Input Panel */}
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            Dimension Entry
          </span>
          <span className="text-[10px] bg-blue-500/10 text-blue-300 px-2.5 py-1 rounded-full font-bold">
            Native SUT Mode
          </span>
        </div>

        {/* Width inputs */}
        <div className="space-y-2">
          <span className="text-xs text-slate-400 font-medium">Width (Inches)</span>
          <div className="flex gap-2">
            <div className="flex-1 bg-slate-950 rounded-xl p-2.5 border border-slate-800 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-200">{widthWhole}″</span>
              <div className="flex flex-col gap-0.5">
                <button
                  onClick={() => setWidthWhole((w) => w + 1)}
                  className="text-[10px] hover:text-blue-400"
                >
                  ▲
                </button>
                <button
                  onClick={() => setWidthWhole((w) => Math.max(1, w - 1))}
                  className="text-[10px] hover:text-blue-400"
                >
                  ▼
                </button>
              </div>
            </div>
            <div className="flex-1 bg-slate-950 rounded-xl p-2.5 border border-slate-800 flex items-center justify-between">
              <span className="text-sm font-bold text-blue-400">{widthFrac}/16″</span>
              <div className="flex flex-col gap-0.5">
                <button
                  onClick={() => setWidthFrac((f) => (f + 1) % 16)}
                  className="text-[10px] hover:text-blue-400"
                >
                  ▲
                </button>
                <button
                  onClick={() => setWidthFrac((f) => (f - 1 + 16) % 16)}
                  className="text-[10px] hover:text-blue-400"
                >
                  ▼
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Height inputs */}
        <div className="space-y-2">
          <span className="text-xs text-slate-400 font-medium">Height (Inches)</span>
          <div className="flex gap-2">
            <div className="flex-1 bg-slate-950 rounded-xl p-2.5 border border-slate-800 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-200">{heightWhole}″</span>
              <div className="flex flex-col gap-0.5">
                <button
                  onClick={() => setHeightWhole((h) => h + 1)}
                  className="text-[10px] hover:text-blue-400"
                >
                  ▲
                </button>
                <button
                  onClick={() => setHeightWhole((h) => Math.max(1, h - 1))}
                  className="text-[10px] hover:text-blue-400"
                >
                  ▼
                </button>
              </div>
            </div>
            <div className="flex-1 bg-slate-950 rounded-xl p-2.5 border border-slate-800 flex items-center justify-between">
              <span className="text-sm font-bold text-blue-400">{heightFrac}/16″</span>
              <div className="flex flex-col gap-0.5">
                <button
                  onClick={() => setHeightFrac((f) => (f + 1) % 16)}
                  className="text-[10px] hover:text-blue-400"
                >
                  ▲
                </button>
                <button
                  onClick={() => setHeightFrac((f) => (f - 1 + 16) % 16)}
                  className="text-[10px] hover:text-blue-400"
                >
                  ▼
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Calculation Outputs */}
        <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 grid grid-cols-2 gap-4">
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-bold">Total Sq. Ft</p>
            <p className="text-2xl font-black text-blue-400">{sqft}</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-bold">Total Sq. M</p>
            <p className="text-2xl font-black text-teal-400">{sqm}</p>
          </div>
        </div>
      </div>

      {/* Visual Glass Sheet Representation */}
      <div className="flex-1 bg-slate-950 rounded-2xl p-4 border border-slate-800 flex flex-col justify-between items-center relative overflow-hidden">
        <span className="text-xs font-bold text-slate-400 uppercase">
          Interactive Sheet Preview
        </span>

        {/* Simulated Glass Sheet */}
        <div className="relative w-40 h-44 bg-blue-500/10 border-2 border-blue-400/50 rounded-xl flex items-center justify-center group my-4 shadow-lg shadow-blue-500/5">
          {/* Measurement Lines */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t border-dashed border-blue-400/30" />
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 border-l border-dashed border-blue-400/30" />

          {/* Dimension Badges */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white font-bold text-[10px] px-2 py-0.5 rounded-full shadow-md">
            {totalWidth.toFixed(4)}″
          </div>
          <div className="absolute top-1/2 -right-5 -translate-y-1/2 rotate-90 bg-blue-500 text-white font-bold text-[10px] px-2 py-0.5 rounded-full shadow-md">
            {totalHeight.toFixed(4)}″
          </div>

          <div className="text-center">
            <span className="text-xs font-extrabold text-blue-300">Glass Sheet</span>
            <p className="text-[10px] text-slate-400">12mm Clear</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-[10px] text-slate-500">
            Auto-converts 1/16 fractional dimensions instantly
          </p>
        </div>
      </div>
    </div>
  );
};

// 2. MULTI-CATEGORY INVENTORY MOCKUP
const InventoryMockup = () => {
  const [selectedTab, setSelectedTab] = useState("glass");

  const inventoryData = {
    glass: [
      { name: "12mm Clear Toughened", stock: "45 Sheets", size: "96″ x 144″", status: "In Stock" },
      { name: "8mm Blue Reflective", stock: "8 Sheets", size: "72″ x 96″", status: "Low Stock" },
      { name: "6mm Frosted Glass", stock: "24 Sheets", size: "48″ x 72″", status: "In Stock" },
    ],
    aluminum: [
      {
        name: "Outer Frame section (6063)",
        stock: "140 Pcs",
        size: "12 Ft length",
        status: "In Stock",
      },
      { name: "Sliding Track Section", stock: "5 Pcs", size: "15 Ft length", status: "Low Stock" },
      {
        name: "Interlock Profile (Powder)",
        stock: "85 Pcs",
        size: "12 Ft length",
        status: "In Stock",
      },
    ],
    hardware: [
      {
        name: "Hydraulic Patch Fitting",
        stock: "120 Units",
        size: "Heavy duty",
        status: "In Stock",
      },
      {
        name: "Floor Spring Assembly",
        stock: "34 Units",
        size: "Double cylinder",
        status: "In Stock",
      },
      {
        name: "D-Handle 12 Inch Chrome",
        stock: "3 Units",
        size: "Stainless Steel",
        status: "Out of Stock",
      },
    ],
  };

  return (
    <div className="w-full bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl p-6 flex flex-col text-white min-h-[350px]">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-4 gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold">Catalog & Inventory</h4>
            <p className="text-[10px] text-slate-400">Categorized stock status</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
          {["glass", "aluminum", "hardware"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize transition-all ${
                selectedTab === tab
                  ? "bg-green-500 text-white shadow-md shadow-green-950/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Inventory List */}
      <div className="flex-1 py-4 space-y-2.5">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-2"
          >
            {inventoryData[selectedTab].map((item, index) => (
              <div
                key={index}
                className="bg-slate-950/50 p-3 rounded-xl border border-slate-850 flex justify-between items-center hover:border-slate-800 transition-colors"
              >
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-200">{item.name}</p>
                  <p className="text-[10px] text-slate-500">Spec: {item.size}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-black text-slate-300">{item.stock}</p>
                    <span
                      className={`text-[9px] px-2 py-0.5 rounded-full font-extrabold ${
                        item.status === "In Stock"
                          ? "bg-green-500/10 text-green-400"
                          : item.status === "Low Stock"
                            ? "bg-amber-500/10 text-amber-400"
                            : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="border-t border-slate-850 pt-3 flex justify-between items-center text-xs text-slate-500">
        <span>Total Items: {inventoryData[selectedTab].length}</span>
        <span className="flex items-center gap-1">
          <Plus className="w-3.5 h-3.5 text-green-400" /> Add Custom Product
        </span>
      </div>
    </div>
  );
};

// 3. SMART INVOICING MOCKUP
const InvoicingMockup = () => {
  return (
    <div className="w-full bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl p-6 flex flex-col text-white min-h-[350px] relative overflow-hidden">
      {/* Header / Meta */}
      <div className="flex justify-between items-center border-b border-slate-850 pb-4">
        <div>
          <h3 className="text-sm font-bold text-slate-100">Invoice KRB-2402</h3>
          <p className="text-[10px] text-slate-500">Client: Malabar Glass House</p>
        </div>
        <div className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-xs font-bold border border-purple-500/20">
          Draft Receipt
        </div>
      </div>

      {/* Document Details */}
      <div className="flex-1 py-4 space-y-3">
        {/* Table Header */}
        <div className="grid grid-cols-12 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
          <span className="col-span-6">Description</span>
          <span className="col-span-3 text-center">Qty / Area</span>
          <span className="col-span-3 text-right">Amount</span>
        </div>

        {/* Table Rows */}
        <div className="space-y-2 border-b border-dashed border-slate-800 pb-3">
          <div className="grid grid-cols-12 text-xs">
            <div className="col-span-6">
              <p className="font-bold text-slate-350">12mm Toughened Clear Glass</p>
              <p className="text-[9px] text-slate-500">96″ x 48.5″ (Imperial Size)</p>
            </div>
            <span className="col-span-3 text-center font-semibold text-slate-400">32.33 SqFt</span>
            <span className="col-span-3 text-right font-bold text-slate-200">₹16,165</span>
          </div>

          <div className="grid grid-cols-12 text-xs">
            <div className="col-span-6">
              <p className="font-bold text-slate-350">Heavy Hydraulic Floor Spring</p>
              <p className="text-[9px] text-slate-500">Heavy model, double cylinder</p>
            </div>
            <span className="col-span-3 text-center font-semibold text-slate-400">2 Units</span>
            <span className="col-span-3 text-right font-bold text-slate-200">₹4,200</span>
          </div>
        </div>

        {/* Total Summary */}
        <div className="space-y-1.5 text-xs">
          <div className="flex justify-between text-slate-400">
            <span>Subtotal</span>
            <span>₹20,365.00</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>Tax & Custom Charges</span>
            <span>₹3,665.70</span>
          </div>
          <div className="flex justify-between text-sm font-extrabold border-t border-slate-800 pt-2 text-white">
            <span>Total Balance</span>
            <span className="text-purple-400">₹24,030.70</span>
          </div>
        </div>
      </div>

      {/* Quick Share Overlay Button */}
      <div className="pt-3 border-t border-slate-850 flex gap-3">
        <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-green-950/20 transition-all duration-200">
          <MessageCircle className="w-4 h-4 fill-current" />
          Share on WhatsApp
        </button>
        <button className="bg-slate-800 hover:bg-slate-750 p-2 rounded-xl text-slate-400 hover:text-white transition-colors">
          <Share2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// 4. REAL-TIME STOCK MANAGEMENT MOCKUP
const StockTrackingMockup = () => {
  return (
    <div className="w-full bg-slate-900 rounded-[2rem] border border-slate-800 shadow-2xl p-6 flex flex-col text-white min-h-[350px]">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-slate-850 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400">
            <BarChart3 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-bold">Real-time Stock Monitor</h4>
            <p className="text-[10px] text-slate-500">Live movement updates</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-green-400 font-extrabold bg-green-500/5 px-2.5 py-1 rounded-full border border-green-500/10 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          Live Syncing
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-850">
          <span className="text-[10px] text-slate-500 uppercase font-bold">Daily Inflow</span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xl font-bold text-slate-200">+120 Sheets</span>
            <ArrowUpRight className="w-4 h-4 text-green-400" />
          </div>
        </div>
        <div className="bg-slate-950 p-3.5 rounded-2xl border border-slate-850">
          <span className="text-[10px] text-slate-500 uppercase font-bold">Daily Outflow</span>
          <div className="flex items-center justify-between mt-1">
            <span className="text-xl font-bold text-slate-200">-85 Sheets</span>
            <ArrowDownRight className="w-4 h-4 text-rose-400" />
          </div>
        </div>
      </div>

      {/* Simulated graph / status bars */}
      <div className="flex-1 bg-slate-950 rounded-2xl p-4 border border-slate-850 flex flex-col justify-between">
        <span className="text-[10px] text-slate-400 uppercase font-bold">Stock Trend - Weekly</span>

        {/* SVG Visual graph representation */}
        <div className="h-20 flex items-end gap-3 pt-4">
          {[35, 45, 30, 65, 80, 55, 75].map((val, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-t-lg relative group cursor-pointer transition-all duration-300"
                style={{ height: `${val}%` }}
              >
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-orange-500 text-white font-extrabold text-[9px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
                  {val * 5} Sheets
                </div>
              </div>
              <span className="text-[8px] text-slate-600 uppercase font-bold">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
              </span>
            </div>
          ))}
        </div>

        {/* Warning Alert banner */}
        <div className="mt-3 bg-amber-500/10 border border-amber-500/25 p-2 rounded-xl flex items-center gap-2 text-[10px] text-amber-300">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            <strong>Low stock alert:</strong> Outer Frame sliding profile is below 10 Pcs.
          </span>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// MAIN FEATURES PAGE
// ==========================================

const detailedFeatures = [
  {
    title: "Revolutionary Unit System",
    description:
      "Our proprietary calculation engine handles Master Units (1/16 inch) natively. No more rounding errors or manual conversions. Just enter the dimensions and the app does the rest.",
    icon: Ruler,
    color: "bg-blue-500",
    details: ['Native 1/16" support', "Automatic SUT calculation", "Imperial & Metric switching"],
    mockup: <UnitSystemMockup />,
  },
  {
    title: "Multi-Category Inventory",
    description:
      "Whether you're selling glass, aluminum sections, hardware fittings, or other wholesale items, Karobar handles it all with specialized templates for each category.",
    icon: Layers,
    color: "bg-green-500",
    details: ["Glass & Mirror", "Aluminum Sections", "Hardware Fittings", "Custom Categories"],
    mockup: <InventoryMockup />,
  },
  {
    title: "Smart Invoicing",
    description:
      "Generate beautiful, professional invoices designed for modern wholesale operations. Export as PDF and share directly via WhatsApp with one tap.",
    icon: FileText,
    color: "bg-purple-500",
    details: ["Instant PDF Generation", "WhatsApp Sharing", "Automatic Tax Calculation"],
    mockup: <InvoicingMockup />,
  },
  {
    title: "Real-time Stock Management",
    description:
      "Never run out of stock again. Get instant alerts when your inventory levels are low. Track movements across multiple storage locations.",
    icon: BarChart3,
    color: "bg-orange-500",
    details: ["Low Stock Alerts", "In/Out History", "Multi-Warehouse Support"],
    mockup: <StockTrackingMockup />,
  },
];

const FeaturesPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
          >
            Powerful Features for <span className="text-primary">Modern Wholesalers</span>
          </motion.h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every tool in Karobar is meticulously designed to solve the real-world bottlenecks in
            the wholesale industry.
          </p>
        </div>

        <div className="space-y-32">
          {detailedFeatures.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}
            >
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div
                  className={`w-16 h-16 rounded-[2rem] ${feature.color} flex items-center justify-center text-white mb-8 shadow-2xl`}
                >
                  <feature.icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  {feature.title}
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">{feature.description}</p>
                <ul className="space-y-4">
                  {feature.details.map((detail, dIndex) => (
                    <li
                      key={dIndex}
                      className="flex items-center gap-3 text-lg font-medium text-gray-700"
                    >
                      <CheckCircle2 className="text-primary w-6 h-6" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 w-full"
              >
                {/* Fully Rendered, Meaningful Interactive CSS UI Mockup */}
                {feature.mockup}
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-24 rounded-[4rem] bg-gray-900 text-white text-center"
        >
          <h2 className="text-3xl md:text-6xl font-extrabold mb-8">
            Experience the difference today.
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Take the first step towards a more efficient, error-free, and profitable wholesale
            business. Download the app now.
          </p>
          <div className="flex justify-center">
            <Link href={APP_LINKS.PLAY_STORE} target="_blank">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white text-xl h-16 px-12 rounded-2xl font-bold"
              >
                Go to Play Store
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesPage;
