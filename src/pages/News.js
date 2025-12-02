import React from "react";

const News = () => {
  const items = [
    {
      id: 1,
      title: "Новина 1",
      body: "Trees share nutrients and send warning signals through a network of fungi known as the “Wood Wide Web.",
      image: "/images/news1.jpeg",
    },
    {
      id: 2,
      title: "Новина 2",
      body: "Tropical rainforests, especially the Amazon, generate about 20% of the Earth’s oxygen and host millions of species.",
      image: "/images/news2.jpg",
    },
    {
      id: 3,
      title: "Новина 3",
      body: "Due to tectonic movement, some mountain ranges are still rising each year, changing the Earth’s surface slowly but steadily.",
      image: "/images/news3.jpg",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>News</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((i) => (
          <li
            key={i.id}
            style={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              marginBottom: "20px",
              overflow: "hidden",
            }}
          >
            <img
              src={i.image}
              alt={i.title}
              style={{
                width: "180px",
                height: "120px",
                objectFit: "cover",
              }}
            />
            <div style={{ padding: "15px" }}>
              <h4 style={{ marginBottom: "8px" }}>{i.title}</h4>
              <p style={{ margin: 0 }}>{i.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
