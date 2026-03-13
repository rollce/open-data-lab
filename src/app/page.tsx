"use client";

import { ArrowRightOutlined, DatabaseOutlined, DotChartOutlined, ExperimentOutlined } from "@ant-design/icons";
import { Button, Card, Col, List, Row, Statistic, Tag } from "antd";
import { motion } from "framer-motion";
import Link from "next/link";

const objectives = [
  "Compare regional air quality trajectories over time.",
  "Benchmark sustainability indicators across regions.",
  "Document transparent methods for reproducible findings.",
  "Package outputs for university admissions review.",
];

const modules = [
  {
    href: "/insights",
    title: "Insights Hub",
    description: "Interactive trend visualizations and dynamic region filtering.",
    icon: <DotChartOutlined style={{ fontSize: 22 }} />,
  },
  {
    href: "/datasets",
    title: "Dataset Library",
    description: "Data dictionary, source quality notes, and structured tables.",
    icon: <DatabaseOutlined style={{ fontSize: 22 }} />,
  },
  {
    href: "/methodology",
    title: "Methodology",
    description: "Research workflow, cleaning logic, and metric calculation rules.",
    icon: <ExperimentOutlined style={{ fontSize: 22 }} />,
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-4 py-8 md:py-10">
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card rounded-3xl p-7 md:p-10"
      >
        <Tag color="cyan" className="mb-4">
          UNIVERSITY PORTFOLIO PROJECT
        </Tag>
        <h1 className="max-w-4xl text-4xl leading-tight font-semibold md:text-6xl">
          Open Data Lab is now a full research website, not a single-page demo
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:rgba(16,32,35,0.78)] md:text-lg">
          This project combines research storytelling, dataset transparency, and visual analytics in
          a multi-page format suitable for admissions submissions.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Link href="/insights">
            <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
              Open Insights
            </Button>
          </Link>
          <Link href="/datasets">
            <Button size="large">View Datasets</Button>
          </Link>
          <Link href="/methodology">
            <Button size="large">See Methodology</Button>
          </Link>
        </div>
      </motion.section>

      <Row gutter={[16, 16]}>
        <Col xs={24} md={8}>
          <Card className="h-full">
            <Statistic title="Tracked Regions" value={4} suffix="areas" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="h-full">
            <Statistic title="Indicators" value={7} suffix="metrics" />
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card className="h-full">
            <Statistic title="Data Period" value="12 months" />
          </Card>
        </Col>
      </Row>

      <section className="grid gap-4 md:grid-cols-3">
        {modules.map((module, index) => (
          <motion.div
            key={module.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <Card
              className="h-full"
              title={
                <span className="inline-flex items-center gap-2">
                  {module.icon}
                  {module.title}
                </span>
              }
              extra={
                <Link href={module.href} className="text-[var(--teal)]">
                  Explore
                </Link>
              }
            >
              <p className="text-sm text-[color:rgba(16,32,35,0.76)]">{module.description}</p>
            </Card>
          </motion.div>
        ))}
      </section>

      <Card title="Research objectives" className="glass-card rounded-3xl">
        <List
          dataSource={objectives}
          renderItem={(item) => (
            <List.Item>
              <span className="text-sm md:text-base">{item}</span>
            </List.Item>
          )}
        />
      </Card>
    </main>
  );
}
