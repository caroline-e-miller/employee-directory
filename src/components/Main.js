import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
import DataTable from "./DataTable";

class Main extends Component {
    state = {
        search: "",
        employees: [],
        results: [],
        error: ""
    };

    // When the component mounts, get a list of all available employees and update this.state.employees
    componentDidMount() {
        API.getAllEmployees()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        console.log('search button');
        const value = event.target.value;
        const results = this.state.results;

        const searchResults = results.filter((result) => result.name.first.startsWith(`${value}`));
        console.log(searchResults);

        this.setState({
            search: value,
            results: searchResults
        });
        // this.setState({ search: event.target.value });
    };

    handleOnClick = event => {
        event.preventDefault();
        API.getEmployeesByNationality(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };
    render() {
        return (
            <div>
                <h1 className="text-center">Find an employee!</h1>
                <SearchForm
                    handleFormSubmit={this.handleOnClick}
                    handleInputChange={this.handleInputChange}
                    employees={this.state.employees}
                />
                {/* <SearchResults results={this.state.employees} /> */}
                <DataTable results={this.state.employees} />
            </div>
        );
    }
}

export default Main;
