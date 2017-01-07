var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
    it('should exist', ()=> {
        expect(Clock).toExist();
        /*
         * amr clock component e kisu ace kina seta age check kore nicci
         * */
    });
    describe('formatSeconds', () => {
        it('should format seconds', ()=> {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            /*
             * ei describe e ami test korbo ami jeta input dicci seta thikmoto second and
             * minute e convert hocce kina...
             * Clock.jsx file e Clock component er moddhe formatSeconds() function er moddhe
             * second and minute ke convert korci...
             * sejonno  describe('formatSeconds') likhe dilam jate oi function take point kore...
             * now amr dorkar 1ta component ke render korano.. normally eta korar kono way nai..
             * tai TestUtils.renderIntoDocument(<Clock/>); evabe render korlam...
             *
             *
             * */

            var seconds = 615; // 10 min and 15 seconds
            var expectedResult = '10 : 15';
            var actualResultThatComesBackAfterTesting = clock.formatSeconds(seconds);

            expect(actualResultThatComesBackAfterTesting).toBe(expectedResult);
            /*
             * so ekhane 615 pathalam jeta amake 10 : 15 retutn korbe.. mane holo 10 minute 15 second...
             *
             * */

        });

        //another test
        describe('render', ()=> {
            it('should render clock clock to output', ()=> {
                var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
                var $el = $(ReactDOM.findDOMNode(clock));
                /*
                * ami chacci jquery element selector er moto .clock-text class wala span tag er
                * text value ke tule ante jate ami test korte pari thik ace kina..
                * $(ReactDOM.findDOMNode(clock)); ei method use kore now jquery
                * selector use korte parbo...
                * */
                var actualTest = $el.find('.clock-text').text();
                /*
                * jQuery er find() method use korlam...
                * */

                expect(actualTest).toBe('01 : 02');//62 pass krci.. so 1 minute 2 second return korbe asha korci



            });
        });

        //another test
        it('should format seconds when min/sec are less than 10', ()=> {
            var clock = TestUtils.renderIntoDocument(<Clock/>);


            var seconds = 61;
            var expectedResult = '01 : 01';
            var actualResultThatComesBackAfterTesting = clock.formatSeconds(seconds);

            expect(actualResultThatComesBackAfterTesting).toBe(expectedResult);

        });
    });
});