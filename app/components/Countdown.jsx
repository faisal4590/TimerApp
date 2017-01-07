var React = require('react');

var Clock = require('Clock');
/*
 * countdown page e minute and second ke
 * display korate hbe.. tai Clock component ke
 * 1st  e nie nite hbe.......
 * */

var CountdownForm = require('CountdownForm');


var Countdown = React.createClass({

    getInitialState: function () {
      return {count: 0};
    },

    handleSetCountdown: function (seconds) {
        this.setState({
            count: seconds
        });
    },

    render: function () {
        var {count} = this.state;
        return (
            <div>
                <Clock totalSeconds={count}/>
                <CountdownForm onSetCountDown={this.handleSetCountdown}/>
            </div>
        );
    }
});

module.exports = Countdown;