//-------------------------------------------------------------------
//Course: SDEV 255
//Date: 20 Sept 2022
//Assignment:  Mod 4 Lab
//File: server.js
//Student: Nativida Barlow
//Instructor: Professor Zachary Hamby
//IVY Tech Community College
//------------------------------------------------------------------->
const http = require('http');
const fs = require('fs');
const _= require('lodash');

const server = http.createServer((req, res) => {
  //console.log(req.url, req.method);

  //lodash
  const num = _.random(0,20);
  console.log(num);

  const greet = _.once(() => {
    console.log('hello');
  });

  greet();
  greet();

//Set header content type
  res.setHeader('Content-Type', 'text/html');

  let path = './views/';
  switch(req.url){
    case'/':
    path += 'index.html';
    res.statusCode = 200;''
    break;
    case '/about':
    path += 'about.html';
    res.statusCode = 200;
    break;
    case '/about-me':
    res.statusCode = 301;
    res.setHeader ('Location', '/about');
    res.end();
    break;
    default:
    path += '404.html';
    res.statusCode = 404;
    break;
  }

  //send an html file
  fs.readFile('./views/index.html', (err, data) => {
    if(err){
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end(data);
    }
  })


server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000')
})
})
