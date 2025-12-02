import { useEffect, useState } from "react";
import { api } from "../api";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p._id}>
            {p.name} — ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
