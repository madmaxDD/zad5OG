const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const { check, validationResult } = require('express-validator');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('form', { errors: null });
});

const users = []//dane w globalnej zmiennej 


let id = 1
app.post('/submit2',[
  check('nick').isLength({ min: 2, max:20 }).withMessage('Nick must contain between 2 and 20 characters'),
  check('age').custom(value => {
    if (isNaN(value) || value < 18 || value >100) {
      throw new Error('age must be between 18 and 100');
    }
    return true;
  }),
  check('email').isEmail().withMessage('wrong email format'),
], (req, res) => {
  const { nick, age, email } = req.body;
  if (!nick || !age || !email) {
    return res.status(400).send('All form fields are required.');
  }

  users.push({...req.body, id})//zapisanie danych po stronie backendu
  id++
  const url = `/result.html`;
  res.redirect('' + url)
  return
})

app.get('/results', (req, res) =>{//endpoint do pobierania danych
  console.log(users)
  res.json(users)
})

app.delete('/results/:id', (req,res)=>{
   const resourceId = req.params.id;
   const index = users.findIndex(user =>{
    return user.id === resourceId
   })
   console.log(index)
   if(index = -1){
    console.log("-1")
   }else{
    users.splice(index, 1)
   }
})
/*
app.post('/submit', [
  check('imie').isLength({ min: 2, max:20 }).withMessage('Imię musi zawierać co najmniej 2 znaki i nie więcej niż 20'),
  check('wiek').custom(value => {
    if (isNaN(value) || value < 18 || value >100) {
      throw new Error('Musisz mieć co najmniej 18 lat, ale też nie więcej niż 100 xd');
    }
    return true;
  }),
  check('email').isEmail().withMessage('Niepoprawny format adresu email.'),
], (req, res) => {
  const { imie, wiek, email } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()){
    var errorLog = `Date and Time: ${new Date().toLocaleString()}\tMethod: ${req.method}\tURL: ${req.originalUrl}\tError: `;
    errors.array().forEach(error => {
      errorLog += `${error.msg}\t`;
    });
  
    errorLog += '\n';
    fs.appendFile(path.join(__dirname,'errorLogs', 'erorlogs.txt'),errorLog, (err)=>{
    if(err) throw err;
    console.log('write complete')
    })
  }

  if (errors.isEmpty()) {
     return res.render('results', { imie, wiek, email }); 
  }

  return res.render('form', {
    errors: errors.array()
  });
});

*/

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});