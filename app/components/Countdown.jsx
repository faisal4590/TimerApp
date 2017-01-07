var React = require('react');

var Clock = require('Clock');
/*
* countdown page e minute and second ke
* display korate hbe.. tai Clock component ke
* 1st  e nie nite hbe.......
* */

var Countdown = React.createClass({
    render: function () {
        return (
            <div>
                <Clock totalSeconds={129}/>
            </div>
        );
    }
});

module.exports = Countdown;