var myDiv = document.querySelector("div");
var myRadio = document.getElementsByClassName("radio");
var nom = document.getElementById("nom");
var oui = document.getElementById("oui");
var no = document.getElementById("no");
var nom = document.getElementById("nom");
var message = document.getElementById("message");
var slect = document.querySelector("select");
var sub = document.querySelector("#sub");
var password = document.getElementById("password");

//affiche and remove
function affiche() {
  myRadio[0].onclick = function () {
    if (oui.checked) {
      myDiv.classList.remove('hidden');
    }
  };
  myRadio[1].onclick = function () {
    if (no.checked)
      myDiv.classList.add('hidden');
  };
  return;
}
affiche();

var exp = new RegExp('^[A-Za-z]+$');
var checkExp = false;
nom.onkeyup = () =>{
  if(exp.test(nom.velue) == true){
    message.innerHTML = "le nom validé";
    checkExp = true;
  } else {
    message.innerHTML = "le nom n'est pas validé";
    checkExp = false;
  }
}

var chekingselect=false;

slect.onclick = function (){
    if(slect.selectedIndex !=0)
    {
        console.log("thiscis regexp 1 "+ exp.test(nom.value) );
        chekingselect = true;
    }
    if(slect.selectedIndex == 0)
    {
        
        console.log("this is regexp 2 "+ exp.test(nom.value) );
        chekingselect=false;
    }
}

sub.addEventListener("click",function(e){
  if(chekingselect==false || checkRgexp==false)
   {
      e.preventDefault();
   }
});

let info = {nom : nom.value, pass: password.value, city: select.text};
localStorage.setItem('Infos', JSON.stringify(info));
console.log(info);

function afficherLocastorage (){
 if (localStorage.getItem("nomInfo1") !== null) {
 var objetStockerString = localStorage .getItem(info) ;
 var objetStockerJs = JSON.parse(objetStockerString );
 }
}
