var butt= document.getElementById("gen"); //get the id of the generate button
var fav= document.getElementById("favoo"); //get the id of the fav button
var con= document.getElementById("content");//get the id of quote 
var aut= document.getElementById("author"); //get id of the author
var Ul= document.getElementById("favolist"); //get id of the author


var quotes = [
    {
        quote: ' "Tegla3 est infini"',
        author: "mikou vice président"
    },
    {
        quote: ' "duk nht chelkha msg"',
        author: "Sofiane chikhi"
},{
    quote: ' "nanani nana"',
    author: "Adam design leader "
},{
    quote: ' "tarararaaaaaa"',
    author: "Sara tae Ai trainings"
}]
/*---------------generate quote-----------*/
let i=0;//initialize index array to 0  
butt.addEventListener('click', function(){
    
if(i>=quotes.length){
    i=0; //if  array index >= array lenght => i=0 so we will start from the beginning 
}
var qo =quotes[i]; //
 
con.textContent=qo.quote; 
aut.textContent=qo.author;
i++; 
})
/*---------------fav list -----------*/
fav.addEventListener('click', function(){
   
if(con.textContent!=='' && aut.textContent!==''){
    var mm = con.textContent +"\n"+ aut.textContent ; 
    var exist = Ul.getElementsByTagName('li');
    var isQuoteAlreadyFavorite = false;
    
    for (var i = 0; i < exist.length; i++) {
//parcours ul list 
      if (exist[i].textContent === mm) {
        isQuoteAlreadyFavorite = true;
        break;
      }
    }
    if (!isQuoteAlreadyFavorite) {
        var listItem = document.createElement('li'); 
  listItem.textContent= mm ; 
   Ul.appendChild(listItem);
    }
  
   
}
})