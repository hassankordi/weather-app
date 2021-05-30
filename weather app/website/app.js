/* Global Variables */
const APIKey = "&units=imperial&appid=10f26592d1b32ba6059f5711c286c659";
const baseUrl = "http://api.openweathermap.org/data/2.5/forecast?zip="

// // Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
let btn =  document.getElementById("generate");
let zipCode =  document.getElementById("zip");
let feelings =  document.getElementById("feelings");
let temp =  document.getElementById("temp");
let content =  document.getElementById("content");
let date =  document.getElementById("date");


/*
*1-check if the inputs is empty or not
*2-get data from API
*3-post data in our server
*4-get data from server to browser
*/ 
btn.addEventListener('click', async function(){
    if(zipCode.value!=" " && feelings.value!=""){
        getApi().then( function (ress){
            // console.log(ress.list);
            const obj = {date: ress.list[0].dt_txt,temp:ress.list[0].main.temp , feelings:feelings.value}
            // console.log(obj);
            postData(obj);  
            getData();
        })
    }
    else{
alert("zip code and feelings is require")
    }
})



/*post data to server*/
const postData = async function(obj){
// alert("hi from post")
const res = await fetch('/postll',{
    method: 'POST',
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin', 
    headers: {
      'Content-Type': 'application/json'
      
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(obj) 
  })
 try{
 const data = await res.json();
 alert("hi from try post");
 
 console.log(data)

 return data;
 }catch(err){
 console.log('error'+err)
 }


}



/*get data from server & update UI*/

async function getData(){
    // alert("hi from get");
const res = await fetch('/ll')
try{
const data = await res.json();
// alert("hi from try");
date.innerHTML = data.date
temp.innerHTML = data.temp;
content.innerHTML= data.feelings;
console.log(data)
}catch(err){
console.log('error'+err)
}
}




/*get data from API*/

const getApi= async function (){
    

    const res = await fetch(baseUrl+zipCode.value+APIKey)
    const myData = await res.json();
   
console.log(myData)
    return myData;
}

