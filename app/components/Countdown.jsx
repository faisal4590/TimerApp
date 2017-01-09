var React = require('react');

var Clock = require('Clock');
/*
 * countdown page e minute and second ke
 * display korate hbe.. tai Clock component ke
 * 1st  e nie nite hbe.......
 * */

var CountdownForm = require('CountdownForm');

var Controls = require('Controls');


var Countdown = React.createClass({

    getInitialState: function () {
        return {
            count: 0,
            countdownStatus: 'stopped'//initially clock stop thakbe

        };
    },

    componentDidUpdate: function (previousProps, previousState) {
        /*
         * kokhn countdownStatus = started and kokhn countdownStatus = stopped eta bujhbo kivabe?
         * eta bojhar jonno component life cycle use korbo..
         * jokhni kono state change hoy tokhni componentDidUpdate() function call hoy..
         * eta kivabe bujhte pare je kokhn kon state e ace?
         * ejonno parameter e previousState and previousProps pathate hoy...
         * so 1st e this.state.countdownStatus = 'started' hocce recent state and
         * previousState.countdownStatus = 'stopped' hocce previous state...
         * amra ei 2ta check korte pari.. jodi tara equal na hoy tar mane bujhbo state change hoice,,
         * so now necessary function use korte parbo....
         *
         * */

        if (this.state.countdownStatus !== previousState.countdownStatus) {
            switch (this.state.countdownStatus) {
                case 'started' :
                    this.startTimer();
                    break;
                /*
                 * jokhn clock started state e jabe tokhn timer start
                 * kore dilam...
                 * */

                case 'stopped' :
                    this.setState({count : 0});
                case 'paused' :
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },

    startTimer: function () {
        this.timer = setInterval(()=> {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0
                /*
                 * ekhane mainly setInterval 1 sec(1000 ms) kore dilam..
                 * so 1 second por por clock countdown korte thakbe..
                 * this.state.count - 1; mane count-- .. 1 sec kore komte thakbe..
                 * jodi count 0 hye jay tokhn theme jabo.. tokhn newCount ke 0 kore dicci..\
                 * else count = newCount korteci..
                 *
                 * */

            });


        }, 1000);
    },

    handleSetCountdown: function (seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },

    handleStatusChange : function (newStatus) {
        this.setState({
            countdownStatus : newStatus
        });
    },

    render: function () {
        var {count, countdownStatus} = this.state;

        var renderControlArea = ()=> {
            /*
             * jokhn amar countdownStatus == started hobe tokhn ami
             * contol form 2ta show korabo... (pause and resume)
             * else normal input box ta show korabo...
             * as jsx code e if else dewa jayna tai alada function create kore
             * funtion take render method e call korlam...
             *
             * */
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>;
            }
        };
        return (
            <div>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;