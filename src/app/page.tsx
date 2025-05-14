// File: app/page.js
import { Suspense } from "react";
import styles from "./page.module.css";
import DashboardClient from "./components/DashboardClient";
import ProductList from "./components/ProductList";
import UserGreeting from "./components/UserGreeting";
import ErrorBoundary from "./components/ErrorBoundary";
import { Product } from "./types";

export default async function Home() {
  // const isFirstLoad = localStorage.getItem("isFirstLoad");
  // if (!isFirstLoad) {
  //   localStorage.setItem("isFirstLoad", "true");
  // }

  let products: Product[] = [];
  try {
    const response = await fetch("http://localhost:3000/api/products", {
      method: "GET",
    });
    const { products: productData } = await response.json();
    products = productData;
  } catch (error) {
    console.error("Error fetching products:", error);
    products = [];
  }

  return (
    <main className={styles.container}>
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
