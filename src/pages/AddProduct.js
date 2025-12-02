import { useState } from "react";
import { api } from "../api";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const save = async (e) => {
    e.preventDefault();

    try {
      await api.post("/products", {
        name,
        price: Number(price)
      });

      alert("Product added!");
      setName("");
      setPrice("");
    } catch (err) {
      alert("Error adding product");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add product</h2>

      <form onSubmit={save}>
        <input
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <br /><br />

        <button>Add</button>
      </form>
    </div>
  );
}
