import React,{useState, useEffect, Fragment} from 'react';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';
import {withRouter} from 'react-router-dom';

function EditarProducto(props) {

//obtener el id
const {id}= props.match.params;

// producto = state, y funcion para axtualizar
const [ producto, guardarProducto]= useState({
    nombre: '',
    precio:'',
    imagen: ''
});

//archivo = state, guardarArchivo= setState
const [archivo, guardarArchivo] = useState('');

//consultar la api para traer el producto a editar

const consultarAPI = async () => {
    const productoConsulta = await clienteAxios.get(`/productos/${id}`)
    console.log(productoConsulta.data)
    guardarProducto(productoConsulta.data);
}

// cuando el producto carga
useEffect (()=> {
    consultarAPI();
}, [])

//leer los datos del formulario
const leerInformacionProducto = e => {
    guardarProducto({
        //obtener una copia del state y agregar el nuevo
        ...producto,
        [e.target.name]: e.target.value
    })

}

//colocar la imagen en el state
const leerArchivo = e => {

    guardarArchivo(e.target.files[0]);

}
    return(
                <Fragment>
               
               
                <h2>Editar Producto</h2>
    
    
    
                <form  >
                    <legend>Llena todos los campos</legend>
    
                    <div className="campo">
                        <label>Nombre:</label>
                        <input
                            type="text"
                            placeholder="Nombre Producto"
                            name="nombre"
                            onChange={leerInformacionProducto}
                        />
                    </div>
    
                    <div className="campo">
                        <label>Precio:</label>
                        <input
                            type="number"
                            name="precio"
                            min="0.00"
                            step="1"
                            placeholder="Precio"
                            onChange={leerInformacionProducto}
    
                        />
                    </div>
    
                    <div className="campo">
                        <label>Imagen:</label>
                        <input
                            type="file"
                            name="imagen"
                            onChange={leerArchivo}
    
                        />
                    </div>
    
                    <div className="enviar">
                        <input
                            type="submit"
                            className="btn btn-azul"
                            value="Agregar Producto" />
                    </div>
                </form>
    
            </Fragment>
    
         
        
    )
}

export default withRouter (EditarProducto);