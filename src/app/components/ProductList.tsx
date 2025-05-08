// File: app/components/ProductList.tsx
import styles from "../page.module.css";
import { Product } from "../types";

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  const handleProductClick = (id: string) => {
    console.log("Product clicked:", id);
    alert(`You selected product: ${id}`);
  };

  return (
    <div className={styles.productsPanel}>
      <h2 className={styles.panelTitle}>Available Products</h2>

      <ul className={styles.productList}>
        {products.map((product) => (
          <li
            key={product.id}
            className={styles.productItem}
            onClick={() => handleProductClick(product.id)}
          >
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productMeta}>
              ${product.price} - {product.stock} in stock
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
