const fs = require('fs');
const path = require('path');

const argv = require('yargs').argv;

const contactsPath = "./db/contacts.json";

function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case 'list':
        fs.readFile(contactsPath, (err, data) => {
            if (err) {
                console.log(`Error reading file from disk: ${err}`);
            } else {
                const databases = JSON.parse(data);
                console.log(databases)
            }
        });
        break;
  
      case 'get':
        fs.readFile(contactsPath, (err, data) => {
            if (err) {
                console.log(`Error reading file from disk: ${err}`);
            } else {
                const databases = JSON.parse(data);
                databases.map((el) => {
                    if(id === el.id){
                        console.log(el)
                    }
                })
            }
        });
        break;
  
      case 'add':
        fs.readFile(contactsPath, (err, data) => {
            if (err) {
                console.log(`Error reading file from disk: ${err}`);
            } else {
                const databases = JSON.parse(data);

                const user = {
                    id: databases.length + 1,
                    name: name,
                    email: email,
                    phone: phone
                }
    
                databases.push(user)
    
                console.log(databases)
                fs.writeFile(contactsPath, JSON.stringify(databases), function (err) {
                    if (err) return console.log(err);
                    console.log('Hello World > helloworld.txt');
                });
            }
        });
        
        break;
  
      case 'remove':
        fs.readFile(contactsPath, (err, data) => {
            if (err) {
                console.log(`Error reading file from disk: ${err}`);
            } else {
                const databases = JSON.parse(data);
s
                databases.map((el) => {
                    if(id === el.id){
                        const path = databases.indexOf(el);
    
                        databases.splice(path, 1)
    
                        fs.writeFile(contactsPath, JSON.stringify(databases), function (err) {
                            if (err) return console.log(err);
                        });
    
                        console.log(databases)
                    }
                })
            }
        });
        break;
  
      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  }

invokeAction(argv);