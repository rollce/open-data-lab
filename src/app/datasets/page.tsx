"use client";

import { CheckCircleOutlined, CloudDownloadOutlined, FileSearchOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row, Table, Tag, Timeline } from "antd";

const sourceTableData = [
  {
    key: "1",
    dataset: "City Air Quality Monitor",
    source: "Open City API",
    updateFrequency: "Daily",
    coverage: "North/South/East/West",
    quality: "Validated",
  },
  {
    key: "2",
    dataset: "Renewable Energy Output",
    source: "Municipal Energy Portal",
    updateFrequency: "Monthly",
    coverage: "Regional",
    quality: "Validated",
  },
  {
    key: "3",
    dataset: "Waste Recycling Statistics",
    source: "Public Utilities Data Hub",
    updateFrequency: "Monthly",
    coverage: "Regional",
    quality: "Needs review",
  },
  {
    key: "4",
    dataset: "Population Mobility Index",
    source: "Open Mobility Dataset",
    updateFrequency: "Weekly",
    coverage: "Citywide",
    quality: "Validated",
  },
];

const columns = [
  {
    title: "Dataset",
    dataIndex: "dataset",
    key: "dataset",
  },
  {
    title: "Source",
    dataIndex: "source",
    key: "source",
  },
  {
    title: "Refresh",
    dataIndex: "updateFrequency",
    key: "updateFrequency",
  },
  {
    title: "Coverage",
    dataIndex: "coverage",
    key: "coverage",
  },
  {
    title: "Quality",
    dataIndex: "quality",
    key: "quality",
    render: (quality: string) => (
      <Tag color={quality === "Validated" ? "green" : "orange"}>{quality}</Tag>
    ),
  },
];

export default function DatasetsPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-7 px-4 py-8 md:py-10">
      <section className="glass-card rounded-3xl p-7 md:p-10">
        <Tag color="blue" className="mb-3">
          DATA DOCUMENTATION
        </Tag>
        <h1 className="text-4xl leading-tight font-semibold md:text-5xl">Dataset Library and Quality Tracking</h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[color:rgba(16,32,35,0.78)] md:text-lg">
          Each dataset includes source provenance, refresh strategy, quality signals, and scope.
          This section is designed to show reproducibility and research rigor.
        </p>
      </section>

      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <Card title="Data catalog" extra={<Button icon={<CloudDownloadOutlined />}>Export CSV</Button>}>
            <Table columns={columns} dataSource={sourceTableData} pagination={false} scroll={{ x: 700 }} />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Validation workflow">
            <Timeline
              items={[
                {
                  color: "blue",
                  dot: <FileSearchOutlined />, 
                  children: "Raw source pull and schema check",
                },
                {
                  color: "green",
                  dot: <CheckCircleOutlined />,
                  children: "Missing value normalization",
                },
                {
                  color: "green",
                  dot: <CheckCircleOutlined />,
                  children: "Outlier boundary review",
                },
                {
                  color: "blue",
                  dot: <FileSearchOutlined />,
                  children: "Final dataset publication",
                },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </main>
  );
}
