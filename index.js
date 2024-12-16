const express = require('express');
const NodeRSA = require('node-rsa')
const moment = require('moment')
const app = express();


const port = 8080;


app.get('/', (req, res) => {


  res.send('Hello World!');


});


app.listen(port, () => {


  console.log(`Server is running on http://localhost:${port}`);


});
//////////////////////////////////////////

const token = "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC9uh3RcNWlWdye\nzByUWE9p/ac6HZvE9I9Gx3PLSJg1IrfK6nl3iMf3H568I9uws22FYGBG/FZEsj93\nSYbGsj2CgkmGkrXUJH5xjG0xCEMCBDhXd27QGh3V2kEo7yBhwWsoNZVmeowOHcH9\n4S3usSQQgji6x+eS1CLhjOziEQdLSHqXWGPOkXg6E1LZj8xPIZohE8deaY8DfQIE\nJK2ltBp6bNtJn5RED5Y+Edo5itJIaRVFbQQfl2iVwAdionzVz7nzYb+ZxPwS1I+w\nkxxYc+p9AmU5iLdx6rUvIu+N+qnR/gV2j75l/JqlSpSm/u/XBKCtyPUFbFJE3w74\nARuY4Q5PAgMBAAECggEACcvqbj4dSgRx1+FCOIa20wo98EpHGMxn+Yei+wQsl9HL\nG7cvvnRZnvELCTvwxBb/uLtZPVEaQ0HQ9R/ezbO2aV7A3SoGKYYY4VQW70k17Iy7\nPAj2t9ghYkF6y9pNGb8bAWCC7l+1i6UNt0ZBUOnkqtWOiFZ6JqK9ilf0g1fNwJ1O\nmkbuoUo6zzw9xA4op3fdlzXCWcvGjvXE1Eu4+YMd2zradcCqjEWhlGLuGAU75ts7\n/okKPNHzrhjuQkCfkaA0W8tBISTsCkvRhDBQe480VqOQ1b+fCsu6G8Xo5zBICERK\nHJko67sv0KN3jWxiC3GyXVCMdMO4pHE03n+qr05bAQKBgQDyaaCe5sGeDIpj9zMF\nn5xHsMj74lLaWg+mVTUX2f8u8VUOaVHa/inrE1th4SSIKMo/TK81Rf5QDjOr1mCr\nK1kZI91bevWjoOZzgdbx5En4sUcPSXOaFTwGF0emJnIigTERubjtQHq4iG82OmDN\nPURwetmZP3I/Z6a8Zfpp/sxnfwKBgQDIXIE7ghK4LQBidIYtv9JnsMuVp84OBkz+\n7nCzDfglJ5oX4BEuTvYr7Akx6zYulH1ViQDtRZywbmLf2JjUhZAy931chnJbh7ph\nLMfqnVdXofrr7aCNvx7hXNkeDKnfoiz/xkZck/LJnYQ0mRrYx3aFAHuhkyBlw6ll\nWpwWv4ZBMQKBgEiWKGpsXn2c87OLSdPdP0aYQRZrZrPLU/RSf1ttA2RjDz0JfGE+\nyf6CBVMBv5al4CmkJLKnCsed+QrzXm7ixAMrIhVKdFNS0q6zqlE0MpItQ0HolJ0G\nzrpkLigqSvLaDH9qRV2FeTnYYLS0Nlg+iEfGAXJJ9UPXHa48OweSLFKxAoGAEY+K\nBB0yZtIK5pYv7HKTjmMAdO1wMep7dRyQ5CClTxxZdR4+Y0CoctENPULQTOTW11ha\nrHEdepkyMUxamMXcDZuDcUiXXU5YF4xFOVrw/M1FoMgC+ml122q33NpfSSp9py1J\nnXOaI/GaVMHWiIly6dVRAKhUfpbXkfqPE69VpQECgYEAzvLc3vJyJS3sWJ8WI77W\n6uHAnPHxvqq+guhrJYC0cbGZLvjuGNvNqCBSFmx8XJlGmueLqLsz1WPhAyf6A+c+\nIgUYOBrx0E+pWTb0JipYWfgYDt9XF2+BZkyZQIkpcboI4qY638Z1FHmc1p6LD5KN\nYYTSD+C/EbK031+2r3Lhils="
const key = new NodeRSA('-----BEGIN PRIVATE KEY-----\n' + token + '\n'+ '-----END PRIVATE KEY-----');

app.get('/sig-token', (req, res) => {
  const signature = {
    "timestamp": moment().format("YYYY-MM-DD HH:mm:ss"),
    "client_id": "UMMN",
    "warehouse_id": 17
  };

  const encrypted = key.encryptPrivate(signature, 'base64'); 

  res.json({ encrypted }); 
  
});
