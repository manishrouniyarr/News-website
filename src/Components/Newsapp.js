import React, { useEffect, useState } from 'react';
import Card from './Card';

const Newsapp = () => {
    const [search, setSearch] = useState('india');
    const [newsData, setNewsData] = useState(null);
    const API_KEY = '9c3ed8ee95884dec979460a60f96675b';

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        let dt = jsonData.articles.slice(0, 10);
        setNewsData(dt);
    };

    useEffect(() => {
        getData();
    }, []);

    const handleInput = (e) => {
        setSearch(e.target.value);
    };

    const userInput = (event) => {
        setSearch(event.target.value);
    };

    const menuStyle = {
        fontWeight: 600,
        fontSize: '17px',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease-in-out',
    };

    return (
        <div>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: '#0078d7', color: 'white' }}>
                <div>
                    <h1 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>NewsSphere</h1>
                </div>
                <ul style={{ display: 'flex', gap: '20px', listStyleType: 'none', margin: 0, padding: 0 }}>
                    <li style={menuStyle}>Breaking Buzz</li>
                </ul>
                <div className='searchBar' style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input
                        type='text'
                        placeholder='Search News'
                        value={search}
                        onChange={handleInput}
                        style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ccc', width: '250px' }}
                    />
                    <button
                        onClick={getData}
                        style={{ padding: '8px 15px', backgroundColor: '#0056a6', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                    >
                        Search
                    </button>
                </div>
            </nav>
            <div>
                <p
                    className='head'
                    style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '28px',
                        margin: '20px 0',
                        color: '#333',
                    }}
                >
                    Your Gateway to Global Stories
                </p>
            </div>
            <div className='categoryBtn' style={{ display: 'flex', justifyContent: 'center', gap: '15px', margin: '20px 0' }}>
                <button onClick={userInput} value='sports' style={{ padding: '10px 20px', backgroundColor: '#ff6c6c', color: 'white', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>
                    Sports
                </button>
                <button onClick={userInput} value='politics' style={{ padding: '10px 20px', backgroundColor: '#ff6c6c', color: 'white', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>
                    Politics
                </button>
                <button onClick={userInput} value='entertainment' style={{ padding: '10px 20px', backgroundColor: '#ff6c6c', color: 'white', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>
                    Entertainment
                </button>
                <button onClick={userInput} value='health' style={{ padding: '10px 20px', backgroundColor: '#ff6c6c', color: 'white', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>
                    Health
                </button>
                <button onClick={userInput} value='fitness' style={{ padding: '10px 20px', backgroundColor: '#ff6c6c', color: 'white', borderRadius: '20px', border: 'none', cursor: 'pointer' }}>
                    Fitness
                </button>
            </div>
            <div>
                {newsData ? <Card data={newsData} /> : null}
            </div>
        </div>
    );
};

export default Newsapp;
