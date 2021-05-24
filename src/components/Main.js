import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "./SearchForm/SearchForm";
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
        const results = this.state.employees;

        console.log(results);
        const searchResults = results.filter((result) => {
            console.log(result.name.first);
            // toLowerCase
            return result.name.first.toLowerCase().startsWith(this.state.search)
        });
        console.log(searchResults);

        this.setState({
            search: value,
            employees: searchResults
        });

        // this.setState({ search: event.target.value });
    };

    handleOnClick = event => {
        event.preventDefault();

        const results = this.state.employees;
        const nationOrder = results.sort((employeea, employeeb) => employeea.location.country.localeCompare(employeeb.location.country));

        this.setState({
            results: nationOrder
        });
    };
    render() {
        return (
            <div class="container" >
                <SearchForm
                    handleInputChange={this.handleInputChange}
                    employees={this.state.employees}
                    search={this.state.search}
                />

                <DataTable results={this.state.employees} handleOnClick={this.handleOnClick} />
            </div>
        );
    }
}

export default Main;
