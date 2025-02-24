import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";

const API_URL = "https://fakestoreapi.com/products"; // Example API for products

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }
                return res.json();
            })
            .then((data) => setProducts(data))
            .catch((error) => setError(error.message));
    }, []);

    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch product details");
                }
                return res.json();
            })
            .then((data) => setProduct(data))
            .catch((error) => setError(error.message));
    }, [id]);

    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} width={200} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <Link to="/">Back to List</Link>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
