var React = require('react');
require('../css/styleTabComponent.css');

const TabContainer = React.createClass({
    propTypes: {
    selected: React.PropTypes.number,
    children: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.element
    ]).isRequired
  },
    getDefaultProps: function () {
        return {
            selected: 0
        };
    },
    getInitialState: function () {
        return {
            selected: this.props.selected
        };
    },
    handleClick: function (index, event) {
        event.preventDefault();
        this.setState({
            selected: index
        });
    },
    renderName: function () {
        function labels (child, index) {
            let activeTab = (this.state.selected === index ? 'active' : '');  //equated string 'active' to the chosen tab. This variable is going to be
                                                                              //used as a name of the class to work on it in css
            return (
                <li key={index}>
                    <a href="#"
                        className={activeTab}
                        onClick={this.handleClick.bind(this, index)}>
                        {child.props.label}
                    </a>
                </li>
            );
        }
        return (
            <ul className="tabsLabels">
                {this.props.children.map(labels.bind(this))}
            </ul>
        );
    },
    renderContent: function () {
         return (
            <div className="tabsContainer">
                {this.props.children[this.state.selected]}
            </div>
        );
    },
    render: function () {
        return (
        <div className="tabs">
            {this.renderName()}
            {this.renderContent()}
        </div>
        );
   }
});

module.exports = TabContainer;
