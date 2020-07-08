import React from 'react'
import { Link } from 'react-router-dom';

export default function header() {
    return (
        <div>
            <header style={headstyle} className='dekho'>
            <h1>Todo-List</h1>
            <div ><Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link></div>
            </header>
        </div>
    )
}

const headstyle={
    backgroundColor: '#0080ff',
    textAlign:'center',
    padding:'10px',
    borderWidth:'10px',
}

const linkStyle={
    color:'#001001',
    textDecoration:'none'
}