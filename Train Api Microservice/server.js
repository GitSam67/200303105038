const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8000;

app.use(express.json());

let data = {
    "companyName": "Train Central",
    "ownerName": "Samanuay Nambiar",
    "ownerEmail": "200303105038@paruluniversity.ac.in",
    "rollNo": "200303105038",
    "accessCode": "oJnNPG"
}

let authData = {
    "companyName": "Train Central",
    "clientID": "671a923e-48f8-46a4-a46b-f923a8fc25eb",
    "ownerName": "Samanuay Nambiar",
    "ownerEmail": "200303105038@paruluniversity.ac.in",
    "rollNo": "200303105038",
    "clientSecret": "EktBDrWMYZTPdmDA"
}

app.post('/register', (req,res)=>{
    fetch('http://20.244.56.144/train/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
});


app.post('/login', (req,res)=>{
    fetch('http://20.244.56.144/train/auth', {
        method: 'POST',
        body: JSON.stringify(authData),
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
});

app.get('/trains', async (req, res) => {
    fetch('http://20.244.56.144/train/trains', {
        method: 'GET',
        headers: {'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODkyMzMzMzAsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiNjcxYTkyM2UtNDhmOC00NmE0LWE0NmItZjkyM2E4ZmMyNWViIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwMDMwMzEwNTAzOCJ9.BCI_GVJobMRB1X0kB0ykMY58uFOSS4mqp3JJQ9La23E'}
    })
        .then(res => res.json())
        .then(json => {
            console.log(json);
        })
});


app.get('/trains/2344', async (req, res) => {
    fetch('http://20.244.56.144/train/trains/2344', {
        method: 'GET',
        headers: {'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODkyMzMzMzAsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiNjcxYTkyM2UtNDhmOC00NmE0LWE0NmItZjkyM2E4ZmMyNWViIiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjIwMDMwMzEwNTAzOCJ9.BCI_GVJobMRB1X0kB0ykMY58uFOSS4mqp3JJQ9La23E'}
    })
        .then(res => res.json())
        .then(json => {
            console.log(json);
        })
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});