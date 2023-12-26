
import React, { Component } from "react";
import css from './header.module.css'
import PropTypes from 'prop-types'

export class SearchBar extends Component{
    state ={
        query: '',
        search: ''
    }

     handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { query, search } = this.state;

    if (query.trim() !== search) {

        this.setState({ search: query }, () => {

            console.log("Submitted query:", this.state.search);
        });

       
        this.props.onSubmit(query);
    }
};

    
    render(){
        return (<header className={css.searchbar}>
  <form className={css.form} onSubmit={this.handleSubmit}>
    
    <input
      className="input"
      type="text"
      autoComplete="off"
      name="searchQuery"
      autoFocus
      placeholder="Search images and photos"
      value={this.state.query}
      onChange={this.handleChange}
                />
    <button type="submit" className={css.button}>
      <span className={css.search}>Search</span>
    </button>

  </form>
</header>)
    }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};