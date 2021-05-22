import React from "react";

function DataTable(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th></th>
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
                    <tr key={index}>
                        {/* <tbody> */}
                        <th scope="row"></th>
                        <td>
                            <img alt="Employee" src={item.picture.thumbnail} className="img-fluid" />
                        </td>
                        <td>
                            {item.name.first} {item.name.last}
                        </td>
                        <td>
                            {item.email}
                        </td>
                        <td>
                            {item.dob.date.split("T")[0]}
                        </td>
                        <td> {item.location.country} </td>
                        {/* </tbody> */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataTable;