"use client";

import { BookOutlined, ExperimentOutlined, NumberOutlined } from "@ant-design/icons";
import { Card, Collapse, Steps, Tag } from "antd";

const steps = [
  {
    title: "Define Questions",
    description: "Formalize hypotheses and measurable targets.",
  },
  {
    title: "Prepare Data",
    description: "Normalize columns, fill missing values, and align periods.",
  },
  {
    title: "Compute Indicators",
    description: "Calculate PM2.5 trend, renewable share, and recycling rates.",
  },
  {
    title: "Communicate Findings",
    description: "Publish visual narratives and limitations.",
  },
];

export default function MethodologyPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-7 px-4 py-8 md:py-10">
      <section className="glass-card rounded-3xl p-7 md:p-10">
        <Tag color="geekblue" className="mb-3">
          REPRODUCIBLE RESEARCH
        </Tag>
        <h1 className="text-4xl leading-tight font-semibold md:text-5xl">Methodology and Evidence Chain</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:rgba(16,32,35,0.78)] md:text-lg">
          This section explains exactly how indicators are built, so reviewers can validate logic and
          trust the conclusions.
        </p>
      </section>

      <Card title="Research workflow" className="rounded-3xl">
        <Steps current={3} direction="vertical" items={steps} />
      </Card>

      <Collapse
        size="large"
        items={[
          {
            key: "1",
            label: (
              <span className="inline-flex items-center gap-2">
                <NumberOutlined />
                Indicator formulas
              </span>
            ),
            children:
              "PM2.5 trend = (month_t - month_t-1) / month_t-1. Recycling benchmark and renewable share are standardized to 0-100 for direct comparison.",
          },
          {
            key: "2",
            label: (
              <span className="inline-flex items-center gap-2">
                <ExperimentOutlined />
                Validation rules
              </span>
            ),
            children:
              "A value is flagged if it deviates more than 2.5 standard deviations from rolling monthly means. Flagged values are reviewed manually before publication.",
          },
          {
            key: "3",
            label: (
              <span className="inline-flex items-center gap-2">
                <BookOutlined />
                Limitations
              </span>
            ),
            children:
              "This prototype uses public-source snapshots and does not yet include sensor confidence intervals. Future versions will incorporate uncertainty visualization.",
          },
        ]}
      />
    </main>
  );
}
