import React from "react";

function SearchForm(props) {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="sort">Sort by:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.sort}
                    name="sort"
                    list="employees"
                    type="text"
                    className="form-control"
                    placeholder="Sort the table!"
                    id="sort"
                />
                {/* except with sort method */}
                <datalist id="employees">
                    {props.employees && props.employees.map(employee => (
                        <option value={employee} key={employee} />
                    ))}
                </datalist>
                <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
                    Sort
        </button>
            </div>
            <div className="form-group">
                <label htmlFor="search">Search:</label>
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
                <datalist id="employees">
                    {props.employees && props.employees.map(employee => (
                        <option value={employee} key={employee} />
                    ))}
                </datalist>
                <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
                    Search
        </button>
            </div>
        </form>
    );
}

export default SearchForm;