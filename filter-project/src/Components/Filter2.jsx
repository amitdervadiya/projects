import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import './Filter2.css';

export default function Filter2() {
    function valuetext(value) {
        return `${value}°C`;
    }
    const Product = [
        { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
        { id: 2, name: "Fridge", price: 1200, category: "Appliances" },
        { id: 3, name: "Smartphone", price: 1000, category: "Electronics" },
        { id: 5, name: "Sofa", price: 900, category: "Furniture" },
        { id: 4, name: "Tablet", price: 800, category: "Electronics" },
        { id: 8, name: "Washing Machine", price: 700, category: "Appliances" },
        { id: 7, name: "Bicycle", price: 600, category: "Sports" },
        { id: 6, name: "Desk", price: 500, category: "Furniture" },
        { id: 9, name: "Monitor", price: 300, category: "Electronics" },
        { id: 10, name: "Watch", price: 300, category: "Accessories" },
        { id: 11, name: "Chair", price: 250, category: "Furniture" },
        { id: 21, name: "Jacket", price: 200, category: "Apparel" },
        { id: 15, name: "Bookshelf", price: 180, category: "Furniture" },
        { id: 12, name: "Headphones", price: 150, category: "Electronics" },
        { id: 13, name: "Tennis Racket", price: 150, category: "Sports" },
        { id: 14, name: "Microwave", price: 150, category: "Appliances" },
        { id: 22, name: "Shoes", price: 120, category: "Apparel" },
        { id: 16, name: "Sunglasses", price: 100, category: "Accessories" },
        { id: 17, name: "Backpack", price: 90, category: "Accessories" },
        { id: 18, name: "Jeans", price: 80, category: "Apparel" },
        { id: 19, name: "Wallet", price: 75, category: "Accessories" },
        { id: 20, name: "Keyboard", price: 75, category: "Electronics" },
        { id: 25, name: "Lamp", price: 60, category: "Furniture" },
        { id: 29, name: "Mouse", price: 50, category: "Electronics" },
        { id: 23, name: "Hat", price: 40, category: "Apparel" },
        { id: 24, name: "Football", price: 40, category: "Sports" },
        { id: 26, name: "Basketball", price: 30, category: "Sports" },
        { id: 27, name: "T-shirt", price: 30, category: "Apparel" },
        { id: 28, name: "Belt", price: 45, category: "Accessories" },
        { id: 30, name: "Yoga Mat", price: 25, category: "Sports" }
    ];

    const [price, setPrice] = useState(1200);
    let data = Product.filter((item) =>
        item.price <= price
    )

    return (
        <>
            <Box className="slider-box">
                <Slider
                    value={price}
                    onChange={(e, newValue) => setPrice(newValue)}
                    aria-label="Price Range"
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={50}
                    marks
                    min={0}
                    max={1200}
                />
            </Box>

            <table className="product-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((e, i) => (
                        <tr key={i}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.price}</td>
                            <td>{e.category}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
