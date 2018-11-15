import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = (props) => {
    return (
        <div onClick={props.historybs}>
            Página não existe
            <Link to="/"> Vá pra Home</Link>
        </div>
    )
}

export default Page404;