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
    console.log('Connection has status: ', dataAuth.data.state);
    console.log(dataAuth.data.token_type);
    
    sessionStorage.setItem('auth_token', dataAuth.data.access_token);
    
  }
  catch (error) {
    return(error)
  }
} 


export const apiCall = async () => {

  console.log(`El token dentro de la API Call es ${token}`);
  try { 
    const res = await axios.get(
      baseUrl,
      {
        params: {
          'originLocationCode': 'MEX',
          'destinationLocationCode': 'PER',
          'departureDate': '2022-11-01',
          'adults': '1'
        },
        headers:
        {
          "Content-Type": 'application/x-www-form-urlencoded',
          "Authorization": "Bearer " + token,
        },
      }
    ).then((response) => {
      console.log(response);
      data = response.data;
      // console.log(data)
    });
    console.log(data);
    } catch (error) {
       console.log(`error ===>> ${error}`); 
    }
  }
