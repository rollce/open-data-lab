"use client";

import { motion } from "framer-motion";
import { BarChart3, Download, Filter, Leaf, LineChart as LineChartIcon } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const airQualityData = [
  { month: "Jan", north: 42, south: 39, east: 45, west: 41 },
  { month: "Feb", north: 40, south: 37, east: 43, west: 39 },
  { month: "Mar", north: 37, south: 34, east: 40, west: 36 },
  { month: "Apr", north: 35, south: 32, east: 37, west: 34 },
  { month: "May", north: 32, south: 30, east: 35, west: 31 },
  { month: "Jun", north: 30, south: 28, east: 33, west: 29 },
  { month: "Jul", north: 29, south: 27, east: 31, west: 28 },
  { month: "Aug", north: 31, south: 29, east: 34, west: 30 },
  { month: "Sep", north: 33, south: 31, east: 36, west: 32 },
  { month: "Oct", north: 35, south: 33, east: 38, west: 34 },
  { month: "Nov", north: 38, south: 35, east: 41, west: 37 },
  { month: "Dec", north: 40, south: 37, east: 43, west: 39 },
];

const renewableShareData = [
  { region: "North", renewableShare: 52, recyclingRate: 64 },
  { region: "South", renewableShare: 61, recyclingRate: 67 },
  { region: "East", renewableShare: 45, recyclingRate: 58 },
  { region: "West", renewableShare: 57, recyclingRate: 70 },
];

const findings = [
  "Air quality improved 19.1% in all regions between January and July.",
  "South and West keep the strongest waste recycling consistency year-round.",
  "East region has the fastest growth potential if renewables exceed 50%.",
];

type RegionKey = "north" | "south" | "east" | "west";

const regions: Array<{ label: string; key: RegionKey }> = [
  { label: "North", key: "north" },
  { label: "South", key: "south" },
  { label: "East", key: "east" },
  { label: "West", key: "west" },
];

const statVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState<RegionKey>("north");

  const lineData = useMemo(
    () =>
      airQualityData.map((entry) => ({
        month: entry.month,
        pm25: entry[selectedRegion],
      })),
    [selectedRegion],
  );

  const avgValue = useMemo(
    () => Math.round(lineData.reduce((sum, row) => sum + row.pm25, 0) / lineData.length),
    [lineData],
  );

  const yearlyDrop = useMemo(() => lineData[0].pm25 - lineData[6].pm25, [lineData]);

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-5 py-8 md:px-8 md:py-10">
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card relative overflow-hidden rounded-3xl p-7 md:p-10"
      >
        <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-[var(--teal)]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-4 h-56 w-56 rounded-full bg-[var(--orange)]/20 blur-3xl" />
        <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--surface-strong)] px-3 py-1 text-xs font-semibold tracking-[0.18em] text-[var(--teal)] uppercase">
          <Leaf size={14} />
          Open Data Observatory
        </p>
        <h1 className="max-w-3xl text-4xl leading-tight font-semibold md:text-6xl">
          Environmental Research Dashboard
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:rgba(16,32,35,0.8)] md:text-lg">
          A fully interactive prototype for university applications that transforms open civic
          data into a research-ready story: trends, regional comparisons, and transparent methods.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <span className="surface-strong rounded-full px-4 py-2">Data period: Jan-Dec 2025</span>
          <span className="surface-strong rounded-full px-4 py-2">
            Source format: CSV + public API
          </span>
          <span className="surface-strong rounded-full px-4 py-2">
            Last refresh: March 2026
          </span>
        </div>
      </motion.section>

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Selected region avg PM2.5", value: `${avgValue} ug/m3` },
          { label: "Best monthly drop", value: `${yearlyDrop} ug/m3` },
          { label: "Tracked indicators", value: "Air + Recycling + Energy" },
        ].map((item, index) => (
          <motion.article
            key={item.label}
            variants={statVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="glass-card rounded-2xl p-5"
          >
            <p className="text-xs tracking-wide text-[color:rgba(16,32,35,0.62)] uppercase">
              {item.label}
            </p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
          </motion.article>
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="glass-card rounded-3xl p-6"
        >
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="flex items-center gap-2 text-2xl font-semibold">
              <LineChartIcon size={22} />
              PM2.5 trend by month
            </h2>
            <div className="flex items-center gap-2">
              <Filter size={16} />
              <div className="flex flex-wrap gap-2">
                {regions.map((region) => (
                  <button
                    key={region.key}
                    type="button"
                    onClick={() => setSelectedRegion(region.key)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold tracking-wide transition ${
                      selectedRegion === region.key
                        ? "border-[var(--teal)] bg-[var(--teal)] text-white"
                        : "border-[var(--border)] bg-[var(--surface-strong)]"
                    }`}
                  >
                    {region.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="h-[340px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="4 4" stroke="rgba(16,32,35,0.14)" />
                <XAxis dataKey="month" stroke="rgba(16,32,35,0.7)" />
                <YAxis stroke="rgba(16,32,35,0.7)" />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid rgba(16,32,35,0.12)",
                    background: "rgba(255, 255, 255, 0.94)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="pm25"
                  stroke="var(--teal)"
                  strokeWidth={3}
                  dot={{ r: 3.5 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.article>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="glass-card rounded-3xl p-6"
        >
          <h3 className="mb-4 text-2xl font-semibold">Research highlights</h3>
          <ul className="space-y-3 text-sm leading-6">
            {findings.map((item) => (
              <li key={item} className="surface-strong rounded-xl p-3">
                {item}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--orange)] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-105"
          >
            <Download size={16} />
            Export Findings Report
          </button>
        </motion.aside>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="glass-card rounded-3xl p-6"
      >
        <h2 className="mb-5 flex items-center gap-2 text-2xl font-semibold">
          <BarChart3 size={22} />
          Sustainability benchmark by region
        </h2>
        <div className="h-[360px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={renewableShareData} barGap={10}>
              <CartesianGrid strokeDasharray="4 4" stroke="rgba(16,32,35,0.14)" />
              <XAxis dataKey="region" stroke="rgba(16,32,35,0.7)" />
              <YAxis stroke="rgba(16,32,35,0.7)" />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "1px solid rgba(16,32,35,0.12)",
                  background: "rgba(255, 255, 255, 0.94)",
                }}
              />
              <Legend />
              <Bar dataKey="renewableShare" fill="var(--blue)" radius={[10, 10, 0, 0]} />
              <Bar dataKey="recyclingRate" fill="var(--orange)" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.section>
    </main>
  );
}
