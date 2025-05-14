// File: app/components/DataChart.tsx
"use client";

import { useEffect, useRef } from "react";
import styles from "../page.module.css";
import { Product } from "../types";

interface DataChartProps {
  data?: Product[];
}

export default function DataChart({ data }: DataChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartLabelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartRef.current || !data) return;

    chartRef.current.innerHTML = "";

    try {
      data.forEach((item, index) => {
        const bar = document.createElement("div");
        bar.style.width = `${item.popularity * 10}px`;
        bar.style.height = "20px";
        bar.style.backgroundColor = index % 2 ? "#4299e1" : "#3182ce";
        bar.style.marginBottom = "4px";
        chartRef.current?.appendChild(bar);

        const chartLabel = document.createElement("div");
        chartLabel.innerHTML = item.title;
        chartLabel.style.height = "20px";
        chartLabel.style.textOverflow = "ellipsis";
        chartLabel.style.overflow = "hidden";
        chartLabel.style.maxWidth = "50px";
        chartLabelRef.current?.appendChild(chartLabel);
      });
    } catch (err) {
      console.error("Chart rendering failed", err);
    }
  }, [data]);

  return (
    <div className={styles.chartContainer}>
      <h3 className={styles.chartTitle}>Popularity Chart</h3>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div ref={chartLabelRef} className={styles.chartLabel}></div>
        <div ref={chartRef} className={styles.chart}></div>
      </div>
    </div>
  );
}
