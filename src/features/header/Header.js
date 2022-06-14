import React from 'react';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <section className='logo'>
                <h1>Redditize</h1>
            </section>
            <form className='searchBar'>
                <input className='search'
                        type='text'
                        placeholder='Search' />
                <input type='submit' className='submit'/>
            </form>
        </header>
    )
}