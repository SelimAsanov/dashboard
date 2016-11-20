var React = require('react');

const Tab = React.createClass({
    propTypes: {
    label: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
    },
    render: function () {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Tab;
