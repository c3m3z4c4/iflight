import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { Grid, Autocomplete, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addSearchItem, fetchFlightList } from "../../redux/actions/flightList";
import { countries } from "../../data/data";
import "./Landing.css";

const Landing = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(countries);
  }, []);

  return (
    <>
      <div style={{ backgroundImage: `url('/assets/IFlight Logo/vuelo.jpg')` }}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <br />
          <Grid item md={8} xs={12}>
            <h1>Busca disponibilidad</h1>
            <Formik
              initialValues={{
                origen: "",
                destino: "",
                adultos: 1,
                niños: 0,
                fechaIda: new Date(),
                fechaRegreso: new Date(),
              }}
              validate={(valores) => {
                let errores = {};

                //Validacion origen
                if (!valores.origen) {
                  errores.origen = "Por favor ingresa un origen";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,30}$/.test(valores.origen)) {
                  errores.origen =
                    "El origen solo puede contener letras y espacios";
                }

                //<validaciones destino
                if (!valores.destino) {
                  errores.destino = "Por favor ingresa un destino";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,30}$/.test(valores.destino)) {
                  errores.destino =
                    "El destino solo puede contener letras y espacios";
                }

                //validacion ida y regreso
                if (valores.fechaIda > valores.fechaRegreso) {
                  Swal.fire(
                    "Error",
                    "La fecha de ida no puede ser mayor que la fecha de regreso",
                    "error"
                  );
                }

                return errores;
              }}
              onSubmit={(values) => {
                console.log(values);
                console.log("Formulario enviado");
                cambiarFormularioEnviado(true);
                setTimeout(() => cambiarFormularioEnviado(false), 4000);
                dispatch(addSearchItem(values));
                dispatch(fetchFlightList(values));
              }}
            >
              {({ values, errors, setFieldValue }) => (
                <Form className="formulario">
                  <div>
                    <label htmlFor="origen">*Origen</label>
                    <Autocomplete
                      id="combo-box-origen"
                      options={countries}
                      getOptionLabel={(option) => `${option.name}`}
                      renderInput={(params) => (
                        <TextField {...params} label="" />
                      )}
                      onChange={(e, value) =>
                        setFieldValue("origen", value.code)
                      }
                    />
                    <ErrorMessage
                      name="origen"
                      component={() => (
                        <div className="error">{errors.origen}</div>
                      )}
                    />
                  </div>

                  <div>
                    <label htmlFor="destino">*Destino</label>
                    <Autocomplete
                      id="combo-box-destino"
                      options={countries}
                      getOptionLabel={(option) => `${option.name}`}
                      renderInput={(params) => (
                        <TextField {...params} label="" />
                      )}
                      onChange={(e, value) =>
                        setFieldValue("destino", value.code)
                      }
                    />
                    <ErrorMessage
                      name="destino"
                      component={() => (
                        <div className="error">{errors.destino}</div>
                      )}
                    />
                  </div>

                  <div>
                    <label htmlFor="ida">*Ida</label>
                    <DatePicker
                      selected={values.fechaIda}
                      name="startDate"
                      onChange={(date) => setFieldValue("fechaIda", date)}
                    />
                    <ErrorMessage
                      name="ida"
                      component={() => (
                        <div className="error">{errors.ida}</div>
                      )}
                    />
                  </div>

                  <div>
                    <label htmlFor="regreso">*Regreso</label>
                    <DatePicker
                      selected={values.fechaRegreso}
                      name="endDate"
                      onChange={(date) => setFieldValue("fechaRegreso", date)}
                    />
                    <ErrorMessage
                      name="regreso"
                      component={() => (
                        <div className="error">{errors.regreso}</div>
                      )}
                    />
                  </div>

                  <div>
                    <label htmlFor="adultos">*Adultos</label>
                    <Field
                      type="number"
                      id="adultos"
                      name="adultos"
                      value={values.adultos}
                      placeholder="¿Cuántos?"
                      min="1"
                      max="10"
                    />
                    <ErrorMessage
                      name="adultos"
                      component={() => (
                        <div className="error">{errors.adultos}</div>
                      )}
                    />
                  </div>

                  <div>
                    <label htmlFor="niños">Niños</label>
                    <Field
                      type="number"
                      id="niños"
                      name="niños"
                      value={values.niños}
                      placeholder="¿Cuántos?"
                      min="0"
                      max="5"
                    />
                    <ErrorMessage
                      name="niños"
                      component={() => (
                        <div className="error">{errors.niños}</div>
                      )}
                    />
                  </div>

                  <button type="submit">Buscar</button>
                  {formularioEnviado && (
                    <p className="exito">Formulario enviado con éxito!</p>
                  )}
                </Form>
              )}
            </Formik>
            <br />
            <br />
            <h1>¿No sabes a dónde quieres ir? Busca un vuelo</h1>

            <br />
          </Grid>
        </Grid>
        <br />
      </div>
    </>
  );
};

export default Landing;