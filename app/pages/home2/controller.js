const React = require('react');
const View = require('./view');

exports.render = function render(req, res) {

    const Home2 = props => <View {...props} />
    res.render(Home2, {
        title: 'Firts Page'
    })
}