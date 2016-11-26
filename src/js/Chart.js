var React = require('react');
var ChartJS = require('C:/Users/Selim/Documents/Projects/dashboard/node_modules/chart.js');

const Chart = React.createClass({

    componentDidMount : function () {
        let ctx = document.getElementById('myChart').getContext('2d');
        let lineOptions = {
            responsive: true
        };

        new ChartJS(ctx, {
            type: 'line',
            data: this.processData(),
            options: lineOptions
        });
    },

    getProperty: function (index) {
        return this.props.data.filter(function (obj) {
            return index in obj && typeof obj[index] === 'number';
        }).map(function (obj) {
            return obj[index];
        });
    },

    processData: function () {

        return {
            labels: ['2015/Q1', '2015/Q2', '2015/Q3', '2015/Q4', '2016/Q1', '2016/Q2', '2016/Q3'],
            datasets: [{
                label: 'best',
                backgroundColor: 'rgba(220, 220, 220, 0.5)',
                pointBorderColor: '#fff',
                data: this.getProperty('best')
            }, {
                label: 'mean',
                backgroundColor: 'rgba(26,179,148,0.5)',
                borderColor: 'rgba(26,179,148,0.7)',
                pointBackgroundColor: 'rgba(26,179,148,1)',
                pointBorderColor: '#fff',
                data: this.getProperty('mean')
            }, {
                label: 'your',
                backgroundColor: 'rgba(89,205,47,0.5)',
                borderColor: 'rgba(89,205,47,0.7)',
                pointBackgroundColor: 'rgba(89,205,47,1)',
                pointBorderColor: '#fff',
                data: this.getProperty('your')
            }]
        }
    },

    render: function () {
        return(
            <canvas id="myChart" width="400px" height="300px"></canvas>
        );
    }
});

module.exports = Chart;
