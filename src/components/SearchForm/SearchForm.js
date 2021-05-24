import React from "react";
import "./SearchForm.css";

function SearchForm(props) {
    return (
        <div>
            <form className="search-form">

                <label htmlFor="name">Search by name:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    list="employees"
                    type="text"
                    className="form-control"
                    placeholder="Search!"
                    id="search"
                />
                <p>To sort alphabetically by country, simply click on "country."</p>

            </form>
        </div>
    );
}

export default SearchForm;