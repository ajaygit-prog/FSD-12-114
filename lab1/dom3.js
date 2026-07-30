import { EventEmitter } from "events";
const button = new EventEmitter() ;
button.on("click" , (uname) => {
    console.log(`button clicked by ${uname}`) ;
}) ;
button.emit("click" , "Ajay") ;
button.emit("click", "Manish");
button.emit("click", "Prateek");
button.emit("click", "ABhay ");