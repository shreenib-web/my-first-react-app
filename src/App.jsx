import ProductCard from "./components/ProductCard";

function App() {

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2999,
      image: "https://picsum.photos/200?1"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 4999,
      image: "https://picsum.photos/200?2"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 1999,
      image: "https://picsum.photos/200?3"
    }
  ];

  return (
    <div style={{ display: "flex", gap: "20px", padding: "40px" }}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default App;