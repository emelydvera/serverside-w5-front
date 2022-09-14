const React = require('react');

function View(props) {

    const { products } = props;
    return (
        <>
            <header role='banner' aria-label='inicio'>
                <h1>Productos</h1>
            </header>
            <nav role='menu'>
                <ul>
                    <li role='menuitems'>Celulares</li>
                    <li>Computadores</li>
                    <li>lavadoras</li>
                </ul>
            </nav>
            <main role='main' aria-label='informacion principal'>
                <h2> Motorola </h2>
                <ul>
                    {
                        products.map(e => {
                            return (

                                <li key={e.id}>{e.title}</li>

                            )
                        })
                    }
                </ul>

                <h2>Registro de usuario</h2>
                <form>

                    
                </form>
            </main>
            <footer role='contentInfo' aria-label='informacion empresarial'> Llegaste al final</footer>
        </>
    )
};


module.exports = View;