
import React, {useState } from "react";
import css from './header.module.css'
import PropTypes from 'prop-types'

export const SearchBar =({onSubmit})=>{

  
  const [query, setQuery] = useState('')
  

    const handleChange = (e) => {
      setQuery(e.target.value.toLowerCase());
      console.log(query)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.searchQuery.value.toLowerCase();
        onSubmit(searchValue);
    
  };
  
        return (<header className={css.searchbar}>
  <form className={css.form} onSubmit={handleSubmit}>
    
    <input
      className="input"
      type="text"
      autoComplete="off"
      name="searchQuery"
      autoFocus
      placeholder="Search images and photos"
      value={query}
      onChange={handleChange}
                />
    <button type="submit" className={css.button}>
      <span className={css.search}>Search</span>
    </button>

  </form>
</header>)
    }


SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};