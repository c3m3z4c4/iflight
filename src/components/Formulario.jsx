import React, { useState } from "react";
import { Formik } from "formik";

const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          origen: "",
          destino: "",
          ida: "",
          regreso: "",
          adultos: "",
          niños: "",
        }}
        validate={(valores) => {
          let errores = {};

          //Validacion origen
          if (!valores.origen) {
            errores.origen = "Por favor ingresa un origen";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,30}$/.test(valores.origen)) {
            errores.origen = "El origen solo puede contener letras y espacios";
          }

          //<validaciones destino
          if (!valores.destino) {
            errores.destino = "Por favor ingresa un destino";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,30}$/.test(valores.destino)) {
            errores.destino =
              "El destino solo puede contener letras y espacios";
          }

          //validacion ida
          if (!valores.ida) {
            errores.ida = "Por favor ingresa una fecha de ida";
          } else if (
            !/^[/^\d{1-2}-\d{1-2}-\d{2-4}$/]{1,10}$/.test(valores.ida)
          ) {
            errores.ida = "La fecha de ida solo puede contener fechas";
          }
          //validacion regreso
          if (!valores.regreso) {
            errores.regreso = "Por favor ingresa una fecha de regreso";
          } else if (
            !/^[/^\d{1-2}-\d{1-2}-\d{2-4}$/]{1,10}$/.test(valores.regreso)
          ) {
            errores.regreso = "La fecha de regreso solo puede contener fechas";
          }

          //validacion adultos
          if (!valores.adultos) {
            errores.adultos = "Por favor ingresa cuantos adultos viajaran";
          } else if (!/^[/^\d+$]{1,10}$/.test(valores.adultos)) {
            errores.adultos = "Por favor ingresa cuantos adultos viajaran";
          }

          //validacion niños
          if (!valores.niños) {
            errores.niños = "Por favor ingresa cuantos niños viajaran";
          } else if (!/^[/^\d*$]{0,10}$/.test(valores.niños)) {
            errores.niños = "Solo puede contener números";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formulario enviado");
          cambiarFormularioEnviado(true);
          setTimeout(() => cambiarFormularioEnviado(false), 4000);
        }}
      >
        {({
          values,
          handleSubmit,
          errors,
          touched,
          handleChange,
          handleBlur,
        }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="origen">*Origen</label>
              <input
                type="text"
                id="origen"
                name="origen"
                placeholder="¿Cuál es tú ubicación?"
                value={values.origen}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.origen && errors.origen && (
                <div className="error">{errors.origen}</div>
              )}
            </div>

            <div>
              <label htmlFor="destino">*Destino</label>
              <input
                type="text"
                id="destino"
                name="destino"
                placeholder="¿Dónde?"
                value={values.destino}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.destino && errors.destino && (
                <div className="error">{errors.destino}</div>
              )}
            </div>

            <div>
              <label htmlFor="ida">*Ida</label>
              <input
                type="text"
                id="ida"
                name="ida"
                placeholder="Agrega fechas"
                value={values.ida}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.ida && errors.ida && (
                <div className="error">{errors.ida}</div>
              )}
            </div>

            <div>
              <label htmlFor="regreso">*Regreso</label>
              <input
                type="text"
                id="regreso"
                name="regreso"
                placeholder="Agrega fechas"
                value={values.regreso}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.regreso && errors.regreso && (
                <div className="error">{errors.regreso}</div>
              )}
            </div>

            <div>
              <label htmlFor="adultos">*Adultos</label>
              <input
                type="number"
                id="adultos"
                name="adultos"
                placeholder="¿Cuántos?"
                value={values.adultos}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.adultos && errors.adultos && (
                <div className="error">{errors.adultos}</div>
              )}
            </div>

            <div>
              <label htmlFor="niños">Niños</label>
              <input
                type="number"
                id="niños"
                name="niños"
                placeholder="¿Cuántos?"
                value={values.niños}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.niños && errors.niños && (
                <div className="error">{errors.niños}</div>
              )}
            </div>

            <button type="submit">Buscar</button>
            {formularioEnviado && (
              <p className="exito">Formulario enviado con éxito!</p>
            )}
          </form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
