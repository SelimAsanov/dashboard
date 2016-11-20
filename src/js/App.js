var React = require('react');
var Chart = require('./Chart');
var TabComponent = require('./TabComponent');
var jsonData = require('../data/data');

const Dashboard = React.createClass({
    render: function () {
        return (
            <div>
              <Chart data={jsonData.summary[0].data} />
              <TabComponent data={jsonData.summary} />
            </div>
        );
    }
});

module.exports = Dashboard;
