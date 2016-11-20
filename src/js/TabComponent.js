var React = require('react');
var TabContainer = require('./TabContainer');
var Tab = require('./Tab');
var Table = require('./Table');


const TabComponent = React.createClass({
    getKPIData: function (kpiName) {
        return this.props.data.reduce(function (prev, cur) {
           return prev || (cur.name === kpiName ? cur : prev);
        },null);
    },

    render: function () {
        return (
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
       );
    }
});

module.exports = TabComponent;
