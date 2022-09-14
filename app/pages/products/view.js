const React = require('react');

function View(props) {

    const { products } = props;

    return (
        <ul>
            {
                products.map(e => {
                    return (

                        <li key={e.id}>{e.name}</li>

                    )
                })
            }
        </ul>
    )
};


module.exports = View;