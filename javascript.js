function ekle() {

    var button = document.querySelector(".kaydetbutonu");
    button.addEventListener("click", function () {

        kontrol();

    });
}

function kontrol() {
    var tc = document.getElementById("tc");
    var ad = document.getElementById("ad");
    var soyad = document.getElementById("soyad");
    var dtarih = document.getElementById("dtarih");
    var tel = document.getElementById("tel");

    if (tc.value == "" || ad.value == "" || soyad.value == "" || dtarih.value == "" || tel.value == "") {
        var alert = document.querySelector(".alert");
        alert.classList.remove("d-none");
    } else {
        var alert = document.querySelector(".alert");
        alert.classList.add("d-none");
        elemanolustur();
    }

}


function elemanolustur() {

    var tbody = document.querySelector(".tbody");
    var satır = document.createElement("TR");
    satır.className = "satır";
    tbody.appendChild(satır);
    satır.addEventListener("click", function () {
        satır.classList.toggle("seçili");
        hepsinisil();

    });

    var texttc = document.createTextNode(tc.value);
    var sütun = document.createElement("TH");
    satır.appendChild(sütun);
    sütun.appendChild(texttc);
    sütun.className = "tabletc";
    console.log(texttc);


    var textad = document.createTextNode(ad.value);
    var sütun = document.createElement("TH");
    satır.appendChild(sütun);
    sütun.appendChild(textad);
    sütun.className = "tablead";
    console.log(textad);



    var textsoyad = document.createTextNode(soyad.value);
    var sütun = document.createElement("TH");
    satır.appendChild(sütun);
    sütun.appendChild(textsoyad);
    sütun.className = "tablesoyad";
    console.log(textsoyad);


    var texttarih = document.createTextNode(dtarih.value);
    var sütun = document.createElement("TH");
    satır.appendChild(sütun);
    sütun.appendChild(texttarih);
    sütun.className = "tabletarih";
    console.log(texttarih);


    var cinsiyet = document.querySelectorAll(".form-check-input");
    var value;
    if (cinsiyet[0].checked) {
        value = "Erkek";
    } else {
        value = "Kadın";
    }
    var textcinsiyet = document.createTextNode(value);
    var sütun = document.createElement("TH");
    satır.appendChild(sütun);
    sütun.appendChild(textcinsiyet);
    sütun.className = "tablecinsiyet";
    console.log(textcinsiyet);



    var kangrubu = document.querySelectorAll(".kangrubu");
    var value1;
    for (var i = 1; i < kangrubu.length; i++) {
        if (kangrubu[i].checked) {
            value1 = kangrubu[i].text;
        }
    }
    var textkangrubu = document.createTextNode(value1);
    var sütun = document.createElement("TH");
    satır.appendChild(sütun);
    sütun.appendChild(textkangrubu);
    sütun.className = "tablekangrubu";
    console.log(textkangrubu);


    var texttel = document.createTextNode(tel.value);
    var sütun = document.createElement("TH");
    satır.appendChild(sütun);
    sütun.appendChild(texttel);
    sütun.className = "tabletel";
    console.log(texttel);

    var deletebutton = document.createElement("BUTTON");
    var sütun = document.createElement("TH");
    satır.appendChild(sütun);
    sütun.appendChild(deletebutton);
    deletebutton.textContent = "Sil";
    sütun.className = "tabledelete";
    deletebutton.className = "deletebutton";

    deletebutton.addEventListener("click", function () {

        this.parentElement.parentElement.style.display = "none";

    });

}


function hepsinisil()
{
       var seçili = document.querySelectorAll(".seçili");
        if (seçili.length > 0) {
            var deleteallbutton=document.querySelector(".deleteallbutton");
            deleteallbutton.classList.remove("d-none");
            deleteallbutton.addEventListener("click", function () {
                seçili.forEach(function (item) {

                    item.style.display = "none";
                    item.classList.remove("seçili");
                })
            });
        }
        else
            {
            deleteallbutton.classList.add("d-none");
            }
}

ekle();