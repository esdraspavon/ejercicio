import React, { Component } from "react";

class Summary extends Component {
  showHistories = () => {
    const histories= this.props.histories;
    if (histories.length === 0) return null;
    return (
      <div className="history">
        <h2>Resumen</h2>
        <table>
            <thead>
            <tr>
                <th>Datetime</th>
                <th>Input</th>
                <th>Value</th>
            </tr>
            </thead>
            <tbody>
          {histories.map(history => (
            <tr key={history.id}>
                <td>{history.date}</td>
                <td>{history.string}</td>
                <td>{history.value}</td>
            </tr>
        ))}
        </tbody>
        </table>
      </div>
    );
  };
  render() {
    return <div>{this.showHistories()}</div>;
  }
}

export default Summary;