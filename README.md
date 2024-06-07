# express-middleware

## Middleware

Created repo

- .gitignore
- README.md

Ran  
 npm init -y  
 npm i express  
 npm i nodemon --save-dev  
 npm i dotenv  
 npm i bodyparser

Set up express server

Created get route at root url returning 'Hello, World!'

Created middleware function reqDetails logging request details

Tested middleware if details get logged

![/](<Screenshot 2024-06-06 214942.png>)

Created post route at /contact returning sent json data

Used bodyparser as json parser

Created logHeader middleware function that logs req header
Created errorHandler middleware function that handles request errors  
Created notFound middleware function that handles if routes is not found

Tested route response if parsed json data is returned  
![/contact](<Screenshot 2024-06-06 214942-1.png>)
Tested if middleware executed in correct order
Tested successfully
![index.js](<Screenshot 2024-06-06 222441.png>)
