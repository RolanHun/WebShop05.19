$(function(){
    id=1;
    for (var i = 0; i < targyak.length; i++) {
        $("#alap").append("<tr><td>"+targyak[i].nev+"</td><td>"+targyak[i].ar+"</td><td>"+targyak[i].evjarat+"</td><td>"+"<button id="+(id)+">Töröl</button>"+"</td></tr>");
        id+=1;
    }
    $("tr button").click(kattintasra);
    $("#ok").click(ujTermek);
});
    
var targy1 = JSON.parse('{ "nev":"Audi R8", "ar":"60 000 000 Ft", "evjarat":"2021", "id":"1"}');
var targy2 = JSON.parse('{ "nev":"Lamborghini Huracan", "ar":"100 000 000 Ft", "evjarat":"2017", "id":"2"}');
var targy3 = JSON.parse('{ "nev":"BMW M4", "ar":"20 000 000 Ft", "evjarat":"2016", "id":"3"}');
var targy4 = JSON.parse('{ "nev":"Ferrari 488", "ar":"120 000 000 Ft", "evjarat":"2020", "id":"4"}');
var targy5 = JSON.parse('{ "nev":"Mercedes C63S", "ar":"40 000 000 Ft", "evjarat":"2021", "id":"5"}');

var targyak=[targy1,targy2,targy3,targy4,targy5];

function ujTermek() {
        var ujTargy={};
            ujTargy.nev=$("#NewNev").val();
            ujTargy.ar=$("#NewAr").val();
            ujTargy.evjarat=$("#NewEvjarat").val();
        $("#alap").append("<tr><td>"+ujTargy.nev+"</td><td>"+ujTargy.ar+"</td><td>"+ujTargy.evjarat+"</td><td>"+"<button id="+(id)+">Töröl</button>"+"</td></tr>");
        id+=1;
        
};

function kattintasra() {
        JelenId=this.id;
        console.log(JelenId);
        $(this).remove();
    
};