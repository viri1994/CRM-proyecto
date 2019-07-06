import React, {Fragment}from 'react';

function Pedidos() {
    return(
        <Fragment>
      
       
               
               
        <h2>Nuevo Pedido</h2>



        <form  >
            <legend>Llena todos los campos</legend>

            <div className="campo">
                <label>Cliente</label>
                <input
                    type="text"
                    placeholder="Nombre Producto"
                    name="nombre"
                   
                />
            </div>

            <div className="campo">
                <label>Producto</label>
                <input
                    type="number"
                    name="precio"
                    min="0.00"
                    step="1"
                    placeholder="Producto"
                    

                />
            </div>

            <div className="campo">
                <label>Cantidad</label>
                <input
                    type="number"
                    name="precio"
                    min="0.00"
                    step="1"
                    placeholder="Cantidad"
                    

                />
            </div>

            <div className="enviar">
                <input
                    type="submit"
                    className="btn btn-azul"
                    />
            </div>
        </form>

    </Fragment>

    )
}

export default Pedidos;