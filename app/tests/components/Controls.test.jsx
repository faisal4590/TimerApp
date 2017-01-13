var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', ()=> {
    it('should exist', ()=> {
        expect(Controls).toExist();
    });

    describe('render', ()=> {
        it('should render pause when countdownStatus is started', ()=> {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Pause)');

            /*
             * ami check korbo countDownStatus jokhn started tokhn pause button render hoccekina
             * estUtils.renderIntoDocument(<Controls countdownStatus={"started"}/>); started mane pause kora jabe ekhn..
             * so pause render howar kotha...
             * $el.find('button:contains(Pause)'); eta 1ta specific jQuery selector..
             * amr code e jekhane button tag pabe jar text = Pause setake tule anbe..
             * jodi etake khuje pay tahole test successful....
             *
             * */

            expect($pauseButton.length).toBe(1);

        });

        it('should render Resume when paused', ()=> {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $el.find('button:contains(Start)');

            expect($pauseButton.length).toBe(1);

        });
    });

});