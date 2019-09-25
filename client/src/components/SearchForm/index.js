import React from "react";
import "./style.css";

function SearchForm(props) {
    return (
      <form>
      <div className = "container">
          <div className ="form-group">
            <label htmlFor="search">Search:</label>
            <input
                onChange={props.handleInputChange}
                value={props.search}
                name="search"
                type="text"
                className="form-control"
                placeholder="Search for a book"
                id="search"
            />
            <button onClick={props.handleFormSubmit} className="btn btn-primary"> 
                Search
            </button>
          </div>
          </div>
      </form>  
    );
}

export default SearchForm;