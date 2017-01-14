var React = require('react');

var About = React.createClass({
    render: function () {
        return (
            <div>
                <p>Hello world</p>

                <img src="./../../images/what we will be building.PNG" alt="what we will be building"/> <br/>
            </div>
        );
    }
});

module.exports = About;