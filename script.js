
"use strict";
var myInit = {
method:'GET',
headers:
{
    'Content-Type':'application/json'
},
mode:'cors',
cache:'deafault' };



    let myRequest=new Request("C:\Users\ANAKHA MANOJ\Desktop\sample.json",myInit);

    fetch(myRequest)
        .then(function(resp){
            return resp.json();
        })
        .then(function(data){
            console.log(data);
        });
