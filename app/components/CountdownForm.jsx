var React = require('react');

/*
 * eta hobe countdown component er under e child component..
 * etao simple presentational component hobe...
 * just submit ta nie kaj kora lagbe alada kore...
 *
 * */

var CountdownForm = React.createClass({
    formSubmitKorle: function (e) {
        e.preventDefault();

        var stringSeconds = this.refs.seconds.value;
        
        console.log('input count', $('input').length);

        /*
         * refs attribute use kore jsx e kono element ke target kora hoy jmn
         * php te name attribute use kore kora hoicilo...
         * refs.seconds mane refs = "seconds" je ref ace setake target korlo...
         * this.refs.seconds.value; die oi input field er value take nie aslam..
         * value string akare thakbe 1st e.. tai bojhar jonno variable er name
         * stringSeconds dilam....
         * */

        if (stringSeconds.match(/^[0-9]*$/)) {
            /*
             * 1st e check kore nicchi input ta number kina...
             * ^ mane holo input suru hbe 0-9 die and $ mane holo input ses hobe
             * 0-9 die...
             * 0-9 onekbar thakte pare. tai * dilam...
             *
             * */
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(stringSeconds, 10));
            //10 mane hocce decimal.. mane user binay value dileo otake
            //int e convert kore nibe....

        }else{
            alert('Please enter a valid number between 0-9 >_<');
            this.refs.seconds.value = '';
        }


    },

    render: function () {
        return (
            <div>
                <form ref="form" onSubmit={this.formSubmitKorle} className="countDown-form">
                    <input type="text" placeholder="enter time in seconds" ref="seconds" required/>
                    <button className="button expanded">Start</button>

                </form>
            </div>
        );
    }
});

module.exports = CountdownForm;