import React from "react";

function DataTable(props) {
    return (
        <table className="list-group search-results">
            {props.results && props.results.map((item, index) => (
                <tr key={index} className="list-group-item">
                    <td>
                        <img alt="Employee" src={item.picture.thumbnail} className="img-fluid" />
                    </td>
                    <td>
                        {item.name.first} {item.name.last}
                    </td>
                </tr>
            ))}
        </table>
    );
}

export default DataTable;