// File: app/components/DashboardClient.tsx
"use client";

import { useState, useEffect } from "react";
import styles from "../page.module.css";
import DataChart from "./DataChart";
import { Product } from "../types";

interface DashboardClientProps {
  initialData: Product[];
}

export default function DashboardClient({ initialData }: DashboardClientProps) {
  const [products, setProducts] = useState<Product[]>(initialData);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    if (filter) {
      const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [filter, products]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setFilter(e.target.value);
      document.title = `${filter.length} filtered products`;
    } catch (err) {
      // Silent failure
      console.error(err);
    }
  };

  const refreshData = async () => {
    const response = await fetch("/api/products");
    const newData = await response.json();
    setProducts(newData);
  };

  return (
    <div className={styles.dashboardPanel}>
      <div className={styles.dashboardHeader}>
        <h2 className={styles.panelTitle}>Product Data</h2>
        <button onClick={refreshData} className={styles.refreshButton}>
          Refresh
        </button>
      </div>

      <input
        type="text"
        placeholder="Filter products..."
        onChange={handleFilterChange}
        className={styles.filterInput}
      />


      {filteredProducts && (
        <>
          <DataChart data={filteredProducts} />
          <div className={styles.resultCounter}>
            Showing {filteredProducts.length} of {products?.length || 0} products
          </div>
        </>
      )}
    </div>
  );
}
