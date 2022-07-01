import React from "react";
import { Formik } from "formik";
// const app = (
//   <div>
//     <h1>Tu boleto seguro al lugar que quieras</h1>
//   </div>
// );

const Formulario = () => {
  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.nombre) {
            errores.nombre = "Por favor ingresa un origen";
          }

          return errores;
        }}
        onSubmit={() => {
          console.log("Formulario enviado");
        }}
      >
        {({ handleSubmit, errors, handleChange, handleBlur }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            {console.log(errors)}
            <div>
              <label htmlFor="origen">*Origen</label>
              <input
                type="text"
                id="origen"
                name="origen"
                placeholder="¿Cuál es tú ubicación?"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.nombre && <div className="error">{errors.nombre}</div>}
            </div>
            <div>
              <label htmlFor="destino">*Destino</label>
              <input
                type="text"
                id="destino"
                name="destino"
                placeholder="¿Cuál es tú ubicación?"
              />
            </div>
            <div>
              <label htmlFor="ida">*Ida</label>
              <input
                type="text"
                id="ida"
                name="ida"
                placeholder="Agregar fecha"
              />
            </div>
            <div>
              <label htmlFor="regreso">*Regreso</label>
              <input
                type="text"
                id="regreso"
                name="regreso"
                placeholder="Agregar fecha"
              />
            </div>
            <div>
              <label htmlFor="adultos">*Adultos</label>
              <input
                type="number"
                id="adultos"
                name="adultos"
                placeholder="¿Cuántos?"
              />
            </div>
            <div>
              <label htmlFor="niños">*Niños</label>
              <input
                type="number"
                id="niños"
                name="niños"
                placeholder="¿Cuántos?"
              />
            </div>

            <button type="submit">Buscar</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
