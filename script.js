function calcCels(cels){
     cels= document.getElementById("input").value;
    var p= document.getElementById("para1");
    var farhen= (cels*1.8) +32;
    if (cels!="") {
        p.innerHTML = "temperature is: "+Math.round(farhen)+"°F"
    }else{
        alert("Please enter a number!")
    }
    
    return farhen

}
function calcFarhen(farhen){
    farhen= document.getElementById("input").value;
   var p= document.getElementById("para1");
   var cels= (farhen/1.8) -32;
   if (farhen!="") {
    p.innerHTML = "temperature is: "+Math.round(cels)+"°C"
   }else{
    alert("Please enter a number!")
   }
   return cels

}
