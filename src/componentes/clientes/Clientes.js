import React, { useEffect, useState, Fragment } from 'react';

//iMPORT CLIENTE AXIOS
import clienteAxios from '../../config/axios';
import Cliente from './Cliente';
import {Link} from 'react-router-dom';

function Clientes() {

    //Trabajar con el state
    //clientes = state, guardarClientes = funcion para guardar el state
    const [clientes, guardarClientes] = useState([]);

    //Query a la API
    const consultarAPI = async () => {
        const clientesConsulta = await clienteAxios.get('/clientes');

        //colocar el resultado en el state
        guardarClientes(clientesConsulta.data);
    }

    // es similiar a componentdidmount y willmount
    useEffect( () => { //use efect se carga automaticamente
        consultarAPI();
    }, [clientes] );


    return (
        <Fragment>

            <h2>Clientes</h2>

            <Link to={"/clientes/nuevo"} className="btn btn-verde nvo-cliente">
                 <i className="fas fa-plus-circle"></i>
                Nuevo Cliente
            </Link>

            <ul className="listado-clientes">
                {clientes.map(cliente => (
                  <Cliente
                        key={cliente._id}
                    cliente = {cliente}
                    />  
                ))}

            </ul>

        </Fragment>

    )
}

export default Clientes;