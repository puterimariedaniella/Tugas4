function displayForm() {
    var jmlhPilihan = document.getElementById("jmlhPilihan").value;
    var butt1;
    var choice = "";

    for (var i = 1; i <= jmlhPilihan; i++) {
        choice += "<p> Pilihan " + i + "<input placeholder = 'Masukkan Pilihan anda'>" + "</p>";
    }

    butt1 = "<p>" + '<button onclick="createRadioButton()">OK</button>' + "</p";
    document.getElementById("pilihan1").innerHTML = choice;
    document.getElementById("button1").innerHTML = butt1;
}

function createRadioButton() {
    var formulir = document.getElementById("pilihan1");
    var inputan = formulir.getElementByTagName("input");
    var submit;
    var radios = "";

    for (var i = 0; i < inputan.length; i++) {
        if (inputan[i].type == "text") {
            radios += '<input type = "radio" name = "option" value = "" + inputan[i].value >' + inputan[i].value + "<br>";
        }
    }

    submit = 'input type="submit" value="Submit" onclick="getInput()">';
    document.getElementById("submit1").innerHTML = submit;
    list.innerHTML = radios;

}

function getInput(){
    var nama = document.getElementById("Nama");
    var form = document.querySelector("form");
    var hasil = ducument.getElementById("hasil");
    var jmlhPilihan = document.getElementById("jmlhPilihan").value;
    var data = document.getElementById("pilihan1");
    var inputan = data.getElementsByTagName("input");
    var radios = "";

    for(var i = 0; i < inputan.length; i++){
        if(inputan[i].type == "text"){
            radios += inputan[i].value + ",";
        }
    }

    form.addEventListener("submit",function (event){
        event.preventDefault();
        var optionInput = document.querySelector('inputan[name="option"]:chekced');

        if(optionInput){ 
            hasil.textContent = "Halo, nama saya " + nama.value + " saya mempunyai sejumlah " 
            + jmlhPilihan.value + " pilihan yaitu " + radios + " dan saya memilih " + optionInput.value + ".";
        }else{
            hasil.textContent = "Pilih opsi"
        }
    });
}

