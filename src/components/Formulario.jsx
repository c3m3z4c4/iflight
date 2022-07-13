import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const Formulario = () => {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          origen: "",
          destino: "",
          ida: "",
          regreso: "",
          adultos: 0,
          niños: 0,
          fecha: new Date(),
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
          return errores;
        }}
        onSubmit={({ resetForm }) => {
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
          <Form className="formulario">
            <div>
              <label htmlFor="origen">*Origen</label>
              <Field
                type="text"
                id="origen"
                name="origen"
                placeholder="¿Cuál es tú ubicación?"
              />

              <ErrorMessage
                name="origen"
                component={() => <div className="error">{errors.origen}</div>}
              />
            </div>

            <div>
              <label htmlFor="destino">*Destino</label>
              <Field
                type="text"
                id="destino"
                name="destino"
                placeholder="¿Dónde?"
              />
              <ErrorMessage
                name="destino"
                component={() => <div className="error">{errors.destino}</div>}
              />
            </div>

            <div>
              <label htmlFor="ida">*Ida</label>
              <Field
                type="text"
                id="ida"
                name="ida"
                placeholder="Agrega fechas"
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                  label="Date desktop"
                  inputFormat="MM/dd/yyyy"
                  value={values.fecha}
                  onChange={handleChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <ErrorMessage
                name="ida"
                component={() => <div className="error">{errors.ida}</div>}
              />
            </div>

            <div>
              <label htmlFor="regreso">*Regreso</label>
              <Field
                type="text"
                id="regreso"
                name="regreso"
                placeholder="Agrega fechas"
              />
              <ErrorMessage
                name="regreso"
                component={() => <div className="error">{errors.regreso}</div>}
              />
            </div>

            <div>
              <label htmlFor="adultos">*Adultos</label>
              <Field
                type="number"
                id="adultos"
                name="adultos"
                placeholder="¿Cuántos?"
                min="0"
                max="10"
              />
              <ErrorMessage
                name="adultos"
                component={() => <div className="error">{errors.adultos}</div>}
              />
            </div>

            <div>
              <label htmlFor="niños">Niños</label>
              <Field
                type="number"
                id="niños"
                name="niños"
                placeholder="¿Cuántos?"
                min="0"
                max="5"
              />
              <ErrorMessage
                name="niños"
                component={() => <div className="error">{errors.niños}</div>}
              />
            </div>

            <button type="submit">Buscar</button>
            {formularioEnviado && (
              <p className="exito">Formulario enviado con éxito!</p>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
