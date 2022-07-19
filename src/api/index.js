import axios from 'axios';


const clientId = import.meta.env.VITE_API_CLIENT_ID;
const secret = import.meta.env.VITE_API_CLIENT_SECRET;
const contentType = 'application/x-www-form-urlencoded';
let urlencoded = new URLSearchParams();

urlencoded.append('grant_type', 'client_credentials');
urlencoded.append('client_id', clientId);
urlencoded.append('client_secret', secret);
urlencoded.append('Content-Type', contentType);

let token = sessionStorage.getItem('auth_token');

const authUrl = 'https://test.api.amadeus.com/v1/security/oauth2/token';


const baseUrl = 'https://test.api.amadeus.com/v2/shopping/flight-offers';



//Pruebas con variables fuera el scope

let data

export const authToken = async () => {
  
  try {
    const dataAuth = await axios.post(authUrl, urlencoded); 
    sessionStorage.setItem('auth_token', dataAuth.data.access_token);
    return dataAuth.data.access_token;
    
  }
  catch (error) {
    return(error)
  }
} 




export const apiCall = async (token, params) => {
  let fechaSalida = new Date(params.fechaIda).toLocaleDateString('en-GB').split('/').reverse().join('-')
  console.log(fechaSalida) 

  try { 
    const res = await axios.get(
      baseUrl,
      {
        params: {
          'originLocationCode': params.origen,
          'destinationLocationCode': params.destino,
          'departureDate':fechaSalida,
          'adults': params.adultos
        },
        headers:
        {
          "Content-Type": 'application/x-www-form-urlencoded',
          "Authorization": "Bearer " + token,
        },
      }
    ).then((response) => {
      data = response.data.data;
       console.log('esto es el dato:',data);
      return Promise.resolve(data);
    });
   
    console.log('Este es el res:', res);
    } catch (error) {
    return error;
    }
  }
