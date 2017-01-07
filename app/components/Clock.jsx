var React = require('react');
/*
* clock component hobe 1ta simple presentational component.
* eta props hisebe time input nibe...
* and 1ta string output dibe jeta time ke second e prokash korbe,...
* etar kono state maintain kora lagbena....
* */

var Clock = React.createClass({
    getDefaultProps: function () {
        totalSeconds: 0
    },

    propTypes : {
        totalSeconds  :React.PropTypes.number
    },


    formatSeconds : function (totalSeconds) {
        var seconds = totalSeconds % 60;
        //suppose ami 64 pathalam.. 64 mane 1 min and 4 second.. so 60 die mod kore 4 pacci... so seconds take pacci....

        var minutes =Math.floor( totalSeconds / 60);

        if(seconds < 10){
            seconds = '0'+seconds;
        }
        if(minutes < 10){
            minutes = '0'+minutes;
        }

        return minutes + ' : ' + seconds;

    },
    render: function () {
        var {totalSeconds} = this.props;

        return (
            <div className="clock">
                <span className="clock-text">
                    {this.formatSeconds(totalSeconds)}
                </span>
            </div>
        );
    }
});

module.exports = Clock;