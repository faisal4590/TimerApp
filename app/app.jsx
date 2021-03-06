var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

var Timer = require('Timer');
var Countdown = require('Countdown');
var About = require('About');

// Load foundation

$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="countdown" component={Countdown}/>
                <IndexRoute component={Timer}/>
            <Route path="about" component={About}/>
        </Route>
    </Router>,
    /*
    * Main component ta protita page ei thakbe... tai main component er moddhe
    * baki 2ta component ke nesting koralam...
    * Now amr index page hobe Timer .. tai Timer ke index route dilam..
    * and countdown component add korlam....
    * */
document.getElementById('app')
);


