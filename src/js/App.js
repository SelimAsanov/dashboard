var React = require('react');
var Chart = require('./Chart');
var Tab = require('./Tab');
var TabContainer = require('./TabContainer');
var Table = require('./Table');
var jsonData = require('../data/data');

const Dashboard = React.createClass({
    getKPIData: function (kpiName) {
        return jsonData.summary.reduce(function (prev, cur) {
            return prev || (cur.name === kpiName ? cur : prev);
        },null);
    },
    render: function () {
        return (
            <div>
              <Chart data={jsonData.summary[0].data} />
              <TabContainer selected={0}>
                  <Tab label="EBITDA">
                      <Table data={this.getKPIData('EBITDA %')} />
                  </Tab>
                  <Tab label="Gross Margin">
                      <Table data={this.getKPIData('Gross Margin')} />
                  </Tab>
                  <Tab label="Current Ratio">
                      <Table data={this.getKPIData('Current Ratio')} />
                  </Tab>
                  <Tab label="Debt to Equity Ratio">
                      <Table data={this.getKPIData('Debt to Equity Ratio')} />
                  </Tab>
              </TabContainer>
            </div>
        );
    }
});

module.exports = Dashboard;
