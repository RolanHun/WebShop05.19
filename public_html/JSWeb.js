$(function(){
    for (var i = 0; i < targyak.length; i++) {
        $("#alap").append(targyak[i].nev+" | "+targyak[i].ar+" | "+targyak[i].evjarat+"<br>");
        $("#alap").append("<br>");
        $("#alap").append("");
    }
    $("div img").click(kattintasra);
    $("#ok").click(ujTermek);
});

var targy1={
    nev:"Audi R8",
    ar:"60 000 000 Ft",
    evjarat:"2021",
    id:"1"
};
var targy2={
    nev:"Lamborghini Huracan",
    ar:"100 000 000 Ft",
    evjarat:"2020",
    id:"2"
};
var targy3={
    nev:"BMW M4",
    ar:"20 000 000 Ft",
    evjarat:"2016",
    id:"3"
};
var targy4={
    nev:"Ferrari 488",
    ar:"80 000 000 Ft",
    evjarat:"2019",
    id:"4"
};
var targy5={
    nev:"Mercedes C63S",
    ar:"40 000 000 Ft",
    evjarat:"2021",
    id:"5"
};



var targyak=[targy1,targy2,targy3,targy4,targy5];

function ujTermek() {
        var ujTargy={};
            ujTargy.nev=$("#NewNev").val();
            ujTargy.ar=$("#NewAr").val();
            ujTargy.evjarat=$("#NewEvjarat").val();
        $("#alap").append(ujTargy.nev+" | "+ujTargy.ar+" | "+ujTargy.evjarat+"<br>");
        $("#alap").append("<br>");
        
};

function kattintasra() {
    
        
    
};