var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', ()=>{
    it('should exist my CountdownForm component', ()=>{
        expect(CountdownForm).toExist();
        //checking whether our component is exist or not

    });

    it('should call onSetCountDown if valid seconds entered' , ()=>{
        var spy = expect.createSpy();
        //1ta spy create korlam...

        var countDownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountDown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countDownForm));
        //ager moto jquery die select korbo

        countDownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
        //mainly check korlam je  onSetCountDown() function ta call hocce ki hoccena seta...


    });

    it('should not call onSetCountDown if invalid seconds entered' , ()=>{
        var spy = expect.createSpy();
        //1ta spy create korlam...

        var countDownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountDown={spy}/>);
        var $el = $(ReactDOM.findDOMNode(countDownForm));
        //ager moto jquery die select korbo

        countDownForm.refs.seconds.value = '109Basd231';//this should fail
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
        //kokhn function ta call hobena seta check korteci...


    });

});