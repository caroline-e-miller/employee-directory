import React from "react";

function DataTable(props) {
    return (
        <table className="list-group search-results">
            <thead>
                <tr>
                    <th scope="col">Photo</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB</th>
                    <th scope="col" onClick={props.handleOnClick}>Country</th>
                </tr>
            </thead>
            <tbody>
                {props.results && props.results.map((item, index) => (
                    // console.log(props.results),
                    <tr key={index} className="list-group-item">
                        {/* <tbody> */}
                        <td>
                            <img alt="Employee" src={item.picture.thumbnail} className="img-fluid" />
                        </td>
                        <td>
                            {item.name.first} {item.name.last} {item.email} {item.dob.date.split("T")[0]} {item.location.country}
                        </td>
                        {/* </tbody> */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataTable;