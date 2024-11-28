import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

const StyledTable = styled('table')({
    width: '100%',
    marginTop: '20px',
    borderCollapse: 'collapse',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
});

const StyledTh = styled('th')({
    backgroundColor: '#3949ab',
    color: 'white',
    padding: '10px',
    textAlign: 'left',
});

const StyledTd = styled('td')({
    padding: '10px',
    borderBottom: '1px solid #ddd',
    textAlign: 'left',
});

const StyledTr = styled('tr')({
    '&:nth-of-type(even)': {
        backgroundColor: '#f2f2f2',
    },
    '&:hover': {
        backgroundColor: '#e3f2fd',
    },
});

const StyledSelect = styled(FormControl)({
    margin: '20px 0',
    width: '300px',
});

export default function Filter2() {
    const [category, setCategory] = useState('');

    const product = [
        { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
        { id: 2, name: "Headphones", price: 150, category: "Electronics" },
        { id: 3, name: "Keyboard", price: 75, category: "Electronics" },
        { id: 4, name: "Monitor", price: 300, category: "Electronics" },
        { id: 5, name: "Mouse", price: 50, category: "Electronics" },
        { id: 6, name: "Chair", price: 250, category: "Furniture" },
        { id: 7, name: "Desk", price: 500, category: "Furniture" },
        { id: 8, name: "Sofa", price: 900, category: "Furniture" },
        { id: 9, name: "Bookshelf", price: 180, category: "Furniture" },
        { id: 10, name: "Lamp", price: 60, category: "Furniture" },
        { id: 11, name: "Shoes", price: 120, category: "Apparel" },
        { id: 12, name: "Jacket", price: 200, category: "Apparel" },
        { id: 13, name: "T-shirt", price: 30, category: "Apparel" },
        { id: 14, name: "Jeans", price: 80, category: "Apparel" },
        { id: 15, name: "Hat", price: 40, category: "Apparel" },
        { id: 16, name: "Bicycle", price: 600, category: "Sports" },
        { id: 17, name: "Tennis Racket", price: 150, category: "Sports" },
        { id: 18, name: "Basketball", price: 30, category: "Sports" },
        { id: 19, name: "Football", price: 40, category: "Sports" },
        { id: 20, name: "Yoga Mat", price: 25, category: "Sports" },
        { id: 21, name: "Watch", price: 300, category: "Accessories" },
        { id: 22, name: "Sunglasses", price: 100, category: "Accessories" },
        { id: 23, name: "Backpack", price: 90, category: "Accessories" },
        { id: 24, name: "Belt", price: 45, category: "Accessories" },
        { id: 25, name: "Wallet", price: 75, category: "Accessories" },
        { id: 26, name: "Tablet", price: 800, category: "Electronics" },
        { id: 27, name: "Smartphone", price: 1000, category: "Electronics" },
        { id: 28, name: "Fridge", price: 1200, category: "Appliances" },
        { id: 29, name: "Microwave", price: 150, category: "Appliances" },
        { id: 30, name: "Washing Machine", price: 700, category: "Appliances" }
    ];

    let data = product.filter((item) =>
        category ? item.category.includes(category) : true
    );

    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <StyledSelect fullWidth>
                    <InputLabel id="category-select-label">Category</InputLabel>
                    <Select
                        labelId="category-select-label"
                        id="category-select"
                        value={category}
                        label="Category"
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <MenuItem value="Electronics">Electronics</MenuItem>
                        <MenuItem value="Furniture">Furniture</MenuItem>
                        <MenuItem value="Apparel">Apparel</MenuItem>
                        <MenuItem value="Sports">Sports</MenuItem>
                        <MenuItem value="Accessories">Accessories</MenuItem>
                        <MenuItem value="Appliances">Appliances</MenuItem>
                    </Select>
                </StyledSelect>
            </Box>

            <StyledTable>
                <thead>
                    <tr>
                        <StyledTh>ID</StyledTh>
                        <StyledTh>Name</StyledTh>
                        <StyledTh>Price</StyledTh>
                        <StyledTh>Category</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((e, i) => (
                        <StyledTr key={i}>
                            <StyledTd>{e.id}</StyledTd>
                            <StyledTd>{e.name}</StyledTd>
                            <StyledTd>${e.price}</StyledTd>
                            <StyledTd>{e.category}</StyledTd>
                        </StyledTr>
                    ))}
                </tbody>
            </StyledTable>
        </>
    );
}
