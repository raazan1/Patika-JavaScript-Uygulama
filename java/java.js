let isim = prompt("İsiminizi Giriniz")


let mrb =  document.querySelector("div>h3#isim")
mrb.innerHTML ="Merhaba " + isim + " Hoş geldin!!!"

let days = document.querySelector("div>h3#hour")
let hour = new Date()
let day = hour.getDay()



function zaman (){
    let hou = new Date()
    saat = hou.getHours();
    dakika = hou.getMinutes();
    saniye = hou.getSeconds();
    let s = document.querySelector("div>h3#saat")
    s.innerHTML = saat + ":" + dakika + ":" + saniye


}
setInterval(zaman, 1000);


if (day ==1 ){
    days.innerHTML ="Pazartesi"
}
else if (day ==2 ){
    days.innerHTML ="Salı"
}
else if (day ==3 ){
    days.innerHTML = "Çarşamba"
}
else if (day ==4 ){
    days.innerHTML = "Perşembe"
}
else if (day ==5 ){
    days.innerHTML = "Cuma"
}
else if (day ==6 ){
    days.innerHTML = "Cumartesi"
}
else if (day ==7 ){
    days.innerHTML = "Pazar"
}
