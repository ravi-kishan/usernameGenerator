import _ from "lodash";
import * as EventEmittor from "events";
import * as $ from "jquery";
import { randomNum } from "./math";

const emittor = new EventEmittor();
var username = "";

emittor.on('generated',function(){ 
    alert("The generated username is " + username);
});

var hint = "Another alternative is ";

export function generate( ){
    var name = document.getElementById("fname").value;
    username = _.camelCase(name + randomNum(10));
    var temp = _.camelCase(randomNum(10) + name);
    console.log(username);
    emittor.emit('generated');
    $(document).ready(function(){
        $('#hint').text(hint + temp);
      });
}



