import { camelCase } from "lodash-es";
import { EventEmitter } from "events";
import * as $ from "jquery";
import { randomNum } from "./math";

const emittor = new EventEmitter();
var username = "";

emittor.on('generated',function(){ 
   // alert("The generated username is " + username);
});

var hint = "Another alternative is ";

export function generate(myArg:string){
    var name = null;// (<HTMLInputElement>document.getElementById("fname")).value;
    if(name == null ) {
        name = myArg;
    }
    username = camelCase(name + randomNum(10));
    var temp = camelCase(randomNum(10) + name);
    console.log(username);
    emittor.emit('generated');
    return username;
    // $(document).ready(function(){
    //     $('#hint').text(hint + temp);
    //   });
}



