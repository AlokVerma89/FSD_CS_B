const url="https://api.github.com/users";
const response=fetch(url);
response.then((res)=>{
    return res.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
}).finally(()=>
{
    console.log("finally executed");
})