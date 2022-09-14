const React = require('react');

function View(props) {

    const { title } = props;

    return (
        <h1>{title}</h1>
    )
};


module.exports = View;

