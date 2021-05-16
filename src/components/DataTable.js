import React from "react";

function DataTable(props) {
    return (
        <table className="list-group search-results">
            <tbody>
                {props.results && props.results.map((item, index) => (
                    console.log(props.results),
                    <tr key={index} className="list-group-item">
                        {/* <tbody> */}
                        <td>
                            <img alt="Employee" src={item.picture.thumbnail} className="img-fluid" />
                        </td>
                        <td>
                            {item.name.first} {item.name.last} {item.email} {item.dob.date} {item.location.country}
                        </td>
                        {/* </tbody> */}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataTable;