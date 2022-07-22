import axios from "axios";

const clientId = import.meta.env.VITE_CLIENT_ID;
const clienteSecret = import.meta.env.VITE_CLIENT_SECRET;
const contentType = "application/x-www-form-urlencoded";
let urlencoded = new URLSearchParams();

urlencoded.append("grant_type", "client_credentials");
urlencoded.append("client_id", clientId);
urlencoded.append("client_secret", clienteSecret);
urlencoded.append("Content-Type", contentType);

let token = sessionStorage.getItem("auth_token");

const authUrl = "https://test.api.amadeus.com/v1/security/oauth2/token";

const baseUrl = "https://test.api.amadeus.com/v2/shopping/flight-offers";

//Pruebas con variables fuera el scope

// let data

export const authToken = async () => {
  try {
    const dataAuth = await axios.post(authUrl, urlencoded);
    sessionStorage.setItem("auth_token", dataAuth.data.access_token);
    return dataAuth.data.access_token;
  } catch (error) {
    return error;
  }
};

const formatDate = (date) => {
  let d = new Date(date);
  let month = (d.getMonth() + 1).toString();
  let day = d.getDate().toString();
  let year = d.getFullYear();
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }
  return [year, month, day].join("-");
};

// const convertTimestampToDate = (timestamp) => {
//   const date = new Date(timestamp);
//   //if the date is today, return how many hours or minutes ago
//   if (date.toDateString() === new Date().toDateString()) {
//     const hours = Math.floor((new Date().getTime() - date.getTime()) / 1000 / 60 / 60);
//     if (hours < 1) {
//       return `${ Math.floor((new Date().getTime() - date.getTime()) / 1000 / 60) } minutes ago`;
//     } else { return `${ hours } hours ago;` }
//   } return date.toLocaleDateString();
// };

export const apiCall = async (params, token) => {
  let fechaSalida = new Date(params.fechaIda)
    .toLocaleDateString("en-GB")
    .split("/")
    .reverse()
    .join("-");
  // let fechaSalida = formatDate(params.fechaIda);
  console.log(fechaSalida);

  try {
    const res = await axios
      .get(baseUrl, {
        params: {
          originLocationCode: params.origen,
          destinationLocationCode: params.destino,
          departureDate: fechaSalida,
          adults: params.adultos,
          children: params.niños ? params.niños : 0,
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        let data = response.data;
        console.log("esto es el dato:", data);
        return data;
      });
    console.log("Este es el res:", res);
    return res;
  } catch (error) {
    return error;
  }
};

// export const apiCall = async (params, token) => {
//   let fechaSalida = formatDate(params.fechaIda)
//   // let fechaRegreso = formatDate(params.fechaRegreso);
//   // console.log(params);
//   // console.log(fechaSalida);
//   // console.log(typeof fechaSalida);
//   // console.log(fechaRegreso);
//   try {
//     const res = await axios.get(
//       baseUrl,
//       {
//         params: {
//           'originLocationCode': params.origen,
//           'destinationLocationCode': params.destino,
//           'departureDate': fechaSalida,
//           'adults': params.adultos,
//           'children': params.niños,
//         },
//         headers:
//         {
//           "Content-Type": 'application/x-www-form-urlencoded',
//           "Authorization": "Bearer " + token,
//         },
//       }
//     ).then((response) => {
//       data = response.data.data;
//       console.log('esto es el dato:',data);
//       return Promise.resolve(data);
//     });

//     console.log('Este es el res:', res);
//     } catch (error) {
//     return error;
//     }
//   }
