function love(){
    let name1=document.getElementById("name1").value;
    var firstChar=name1.slice(0,1);
    var capitalizedFirstChar=firstChar.toUpperCase();
    var rest0fname1=name1.slice(1,name1.length);
    var correctForm=rest0fname1.toLowerCase();
    var capitalizedName1=capitalizedFirstChar+correctForm;
    let name2=document.getElementById("name2").value;
    var firstChar2=name2.slice(0,1);
    var capitalizedFirstChar=firstChar2.toUpperCase();
    var rest0fname2=name2.slice(1,name2.length);
    var correctForm=rest0fname2.toLowerCase();
    var capitalizedName2=capitalizedFirstChar+correctForm;
    var loveScore=Math.random()*100;
    loveScore=Math.floor(loveScore) +1;
    document.getElementById("Output").innerHTML="The love Between "+capitalizedName1+ " and "+ capitalizedName2+ " is "+loveScore+" % Strong"
    
}