var React = require('react');
var Dalliance = require('dalliance');
        console.log(Dalliance);

var TrackHub = React.createClass({
    render: function() {
        return (
            React.DOM.h2(null, 'hello');
        );
    }
});


React.render(<TrackHub />, document.getElementById('trackhub'));
