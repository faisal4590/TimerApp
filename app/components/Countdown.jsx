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
         *Kono props / refs update hole tokhn ei function ta call hoy...
         *
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
                    this.setState({count: 0});
                case 'paused' :
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;
            }
        }
    },

    /*componentWillUpdate: function (nextProps, nextState) {
        /!*
         * eta component update howar thik ag die execute hoy..
         *
         * *!/
    },




    componentWillMount: function () {
        /!*
         * kono component browser e render howar age
         * ei lifecycle function ta call hoy...
         * as eta render howar agei call hoy ,
         * so component er refs or props er upor kono control
         * thakena ei function er... so input filed ba jekono kisur
         * value change korte chaile eta ei function e hbena...
         * *!/

        console.log('Component will be mounted.. Please wait....');
        alert('Component will be mounted.. Please wait....');


    },
    componentDidMount: function () {
        /!*
         * ei lifecycle method ta browser e sobkisu render howar
         * por then run hoy...
         * so ei method e component er sob refs and props ke
         * access korte parbo karon eta render howar por run hoy...
         *
         * *!/

        console.log('Component Mounted Successfully');
        alert('Component Mounted Successfully');

    },*/
    componentWillUnmount: function () {

        /** ei function ta automatically call hoy jokhn
        * component dom theke remove hoy...
        * mane component browser theke visually
        * remove hye jay...*/


       /* console.log('Component removed form the dom');
        alert('Are you sure want to leave this page?');*/

        /** now browser e page refresh korle countdown theke
         * timer page e switch korle dekhte parbo je console tab e(developer tool)
         * Component remove message ta dekhacce.. mane holo
         * countdown page er component gula remove howar thik ag muhurte ei function ta call hoy..
         *so now jodi countdown page theke onno page e jete chai tokhn age alert dibe
         *  "Are you sure want to remove?"
         */

            clearInterval(this.timer);
            this.timer = undefined;
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

            if(newCount === 0){
                this.setState({
                    /*
                    * 0 sec e chole asle countdownStatus = stopped
                    * o kore dite hbe.. nahole component update hotei thakbe..
                    *
                    * */
                    countdownStatus : 'stopped'
                });
            }


        }, 1000);
    },

    handleSetCountdown: function (seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    },

    handleStatusChange: function (newStatus) {
        this.setState({
            countdownStatus: newStatus
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
                <h1 className="page-title">Countdown Application</h1>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Countdown;