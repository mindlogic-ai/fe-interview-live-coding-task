// File: app/page.js
import { Suspense } from "react";
import styles from "./page.module.css";
import DashboardClient from "./components/DashboardClient";
import ProductList from "./components/ProductList";
import UserGreeting from "./components/UserGreeting";
import ErrorBoundary from "./components/ErrorBoundary";
import { Product } from "./types";

export default async function Home() {
  const theme = localStorage.getItem("theme") || "light";

  const productsData = await fetch("https://api.example.com/products");
  const products = await productsData.json();

  return (
    <main className={styles.container}>
      <h1
        className={`${styles.heading} ${
          theme === "dark" ? styles.darkHeading : styles.lightHeading
        }`}
      >
        Product Dashboard
      </h1>

      <ErrorBoundary>
        <Suspense
          fallback={<div className={styles.loading}>Loading user info...</div>}
        >
          <UserGreeting />
        </Suspense>
      </ErrorBoundary>

      <div className={styles.grid}>
        <DashboardClient initialData={products} />

        <ErrorBoundary>
          <Suspense
            fallback={<div className={styles.loading}>Loading products...</div>}
          >
            <ProductList products={products} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
}
