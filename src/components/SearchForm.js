import React from "react";

function SearchForm(props) {
    return (
        <div>
            <form className="search-form">
                {/* <div className="form-group">
                <label htmlFor="country">Sort by country:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.sort}
                    name="sort"
                    list="employees"
                    type="text"
                    className="form-control"
                    placeholder="Sort!"
                    id="sort"
                />
                {/* except with sort method */}
                {/* <datalist id="employees">
                    {props.employees && props.employees.map(employee => (
                        <option value={employee} key={employee} />
                    ))}
                </datalist> */}
                {/* <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
                    Sort
                </button>
            </div> */}



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
                {/* <datalist id="employees">
                    {props.employees && props.employees.map(employee => (
                        <option value={employee} key={employee} />
                    ))}
                </datalist> */}
                {/* <button onClick={props.handleInputChange} className="btn btn-primary mt-3">
                    Search
                </button> */}
            </form>
        </div>
    );
}

export default SearchForm;