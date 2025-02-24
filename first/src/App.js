import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import ProductDetail from "./components/ProjectDetail";
import "./App.css"

const API_URL = "https://fakestoreapi.com/products"; 

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
        <div className="container">
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
