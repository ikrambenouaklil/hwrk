var butt= document.getElementById("gen"); //get the id of the generate button
var con= document.getElementById("content");//get the id of quote 
var aut= document.getElementById("author"); //get id of the author
var quotes = [
    {
        quote: ' "Tegla3 est infini"',
        author: "-mikou-"
    },
    {
        quote: ' "duk nht chelkha msg"',
        author: "-Sofiane chikhi-"
},{
    quote: ' "nanani nana"',
    author: "-Adam design leader tae design-"
},{
    quote: ' "tarararaaaaaa"',
    author: "-Sara tae Ai trainings-"
}]
var i=0; 
butt.addEventListener('click', function(){
if(i>=quotes.length){
    i=0;
}else{
i++; 
}
con.textContent=quotes[i].quote; 
aut.textContent=quotes[i].author; 

})
