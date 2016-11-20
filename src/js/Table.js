var React = require('react');

const Table = React.createClass({
    getData: function () {
        let rows = this.props.data.data.map(function (quarterData, index) {
          return  (
              <tr key={index}>
                  <td>{quarterData.quarter}</td>
                  <td>{quarterData.best}</td>
                  <td>{quarterData.mean}</td>
                  <td>{quarterData.your}</td>
              </tr>
          );
        });
        return (
            <tbody>{rows}</tbody>
        );
    },

    render: function () {
        return (
        <table>
            <thead>
                <tr>
                    <th>Quarter</th>
                    <th>Best</th>
                    <th>Mean</th>
                    <th>Your</th>
                </tr>
            </thead>
            {this.getData()}
        </table>
      );
    }
});

module.exports = Table;
