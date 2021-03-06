var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', ()=> {
    it('should exist', ()=> {
        expect(Countdown).toExist();
    });

    describe('handleSetCountdown', ()=> {
        it('should set state to started and countdown', (done)=> {
            var countdown = TestUtils.renderIntoDocument(<Countdown/>);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);//testing whether our count variable has the correct value or not
            expect(countdown.state.countdownStatus).toBe('started');//checking whether countdown has started or not

            setTimeout(()=> {
                expect(countdown.state.count).toBe(9);//testing whether our count variable has the correct value or not
                done();
                /*
                 * ekhane check korteci 1 sec por por value update hoccekina..
                 * 1 sec por jodi count 10 theke 9 hoy tahole bujhbo amr countdown thik ace..
                 *
                 * */

                /*
                 * Done use korar karon :
                 * setTimeout hocce 1ta asynchronous method.. mane eta cholte thakbe but kokhn ses hbe seta
                 * karma bujhte parbena.. tai done na dile ei test fail korto..
                 * tai always asynchronous method er last e done die ses koray dibo..
                 * */
            }, 1001);
        });
    });


    it('should never set count less than zero', (done)=> {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(1);

        expect(countdown.state.count).toBe(1);//testing whether our count variable has the correct value or not

        setTimeout(()=> {
            expect(countdown.state.count).toBe(0);//testing whether our count variable has the correct value or not
            done();

            /*
             * ekhane check korteci kokhno neg value hye jay kina..
             * value 1 pathaici.. ekhn 3 second por jodi -2 hye jay tar mane neg value..
             * ami expect korteci 0.. taile test thik ace...
             * */
        }, 3001);
    });

    it('should pause countdown on paused status', (done)=> {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(3);
        countdown.handleStatusChange('paused');

        setTimeout(()=> {
            expect(countdown.state.count).toBe(3);
            expect(countdown.state.countdownStatus).toBe('paused');
            done();
            /*
             * ekhane check korteci jodi  3 sec er somoy ami pause button e click
             * kori tahole time = 3 sec i thakbe and countdownStatus = 'paused' hobe..
             *as eta 1ta continious process tai done dite hbe last e..
             *
             * */
        }, 1001);
    });

    it('should reset countdown on stopped status', (done)=> {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.handleSetCountdown(3);
        countdown.handleStatusChange('stopped');

        setTimeout(()=> {
            expect(countdown.state.count).toBe(0);
            expect(countdown.state.countdownStatus).toBe('stopped');
            done();
            /*
             * ekhane check korteci jodi  0 sec er somoy
             * auto reset hye jacce kina
             *as eta 1ta continious process tai done dite hbe last e..
             *
             * */
        }, 1001);
    });
});