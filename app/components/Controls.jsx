var React = require('react');

/*
 * Controls component ta countdown pause/resume eta nie kaj korbe..
 * so ei component e countdownStatus props ta pass kora hobe..
 * countdownStatus jodi started hoy tahole pause button render korte hbe./.
 * countdownStatus jodi stopped hoy tahole resume button render korte hbe...
 * eta holo basic logic..............
 * */
var Controls = React.createClass({

    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange : React.PropTypes.func.isRequired
    },

    onStatusChange: function (newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
            /*
             * function er moddhe function call korlam..
             * tahole ekbare sob button er jonno kaj hye jabe..
             * 3ta button er jonno 3bar alada alada kore lekha lagbena
             * function............
             * */
        }
    },

    render: function () {
        var {countdownStatus} = this.props;

        var renderStartStopButton = ()=> {
            /*
             * amake check korte hbe countdownStatus = started/stopped konta..
             * jsx code er moddhe if else check korar way nai.. tai 1ta function create korlam
             * jeta return korbe countdownStatus..
             * */
            if (countdownStatus === 'started') {
                return <button className="button success" onClick={this.onStatusChange('paused')}>Pause</button>
            } else if (countdownStatus === 'paused') {
                return <button className="button primary" onClick={this.onStatusChange("started")}>Resume</button>
            }
        };

        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert" onClick={this.onStatusChange("stopped")}>Clear
                </button>
            </div>

        );
    }
});

module.exports = Controls;