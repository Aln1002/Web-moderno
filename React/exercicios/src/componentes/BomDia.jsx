import React from "react"

export default props => [
    <h1 key='h1'>bom dia {props.nome}!</h1>,
    <h2 key='h2'>Até Breve!</h2>
]


/* export default props =>
    <React.Fragment>
        <h1>Bom dia {props.nome}!
            <p>hoje é seu aniversario, esta fazendo {props.idade} anos</p>
        </h1>
    </React.Fragment> */

    /* export default props =>
    <div>
        <h1>Bom dia {props.nome}!
            <p>hoje é seu aniversario, esta fazendo {props.idade} anos</p>
        </h1>
    </div> */