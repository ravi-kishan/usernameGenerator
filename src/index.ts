import { camelCase } from "lodash-es";
import { EventEmitter } from "events";
import $ from "jquery";
import { cached } from "@ravik1/locator";
import { randomNum } from "./math";

const emittor = new EventEmitter();
var username = "";

var para = document.createElement("P");               
para.innerText = "Enter name to generate username";               
document.body.appendChild(para);  

var inpt = document.createElement("INPUT");
inpt.setAttribute("type", "text");
inpt.setAttribute("id", "name");
document.body.appendChild(inpt);

emittor.on('generated', function () {
     console.log("The generated username is " + username);
});

var btn = document.createElement("BUTTON");   
btn.innerHTML = "GENERATE";
document.body.appendChild(btn); 

var show = document.createElement("P"); 
document.body.appendChild(show);  


var hint = "Another alternative is ";

export function generate(myArg:string){
    var name = null;
    if(name == null ) {
        name = myArg;
    }
    username = camelCase(name + randomNum(10));
    var temp = camelCase(randomNum(10) + name);
    console.log(username);
    return username;
}

btn.onclick = function() {
    var name = (<HTMLInputElement>document.getElementById("name")).value;
    username = camelCase(name + randomNum(10));
    var temp = camelCase(randomNum(10) + name);
    show.innerText = "The generated username is " + username;
     $(document).ready(function(){
         $('#hint').text(hint + temp);
       });
}

cached("@ravik1/usernamegenerator");



