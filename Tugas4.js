function displayForm() {
    var jmlh = document.getElementById("jmlhPilihan2").value;
    var butt1;
    var choice = "";

    for (var i = 1; i <= jmlh; i++) {
        choice += "<p> Pilihan " + i + " <input placeholder = 'Masukkan Pilihan anda'>" + "</p>";
    }

    butt1 = "<p>" + '<button onclick="createRadioButton()">OK</button>' + "</p";
    document.getElementById("pilihan1").innerHTML = choice;
    document.getElementById("button1").innerHTML = butt1;
}

function createRadioButton() {
    var form = document.getElementById("pilihan1");
    var inputs = form.getElementsByTagName("input");
    var submit;
    var radios = "";

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "text") {
            radios += '<input type="radio" name="option" value="' + inputs[i].value + '">' + inputs[i].value + "<br>";
        }
    }
    
    submit = '\n' + '<input type="submit" value="Submit" onclick="getInput()">';
    document.getElementById("submit1").innerHTML = submit;
    list.innerHTML = radios;

}

function getInput() {
    var name = document.getElementById("Nama");
    var form = document.querySelector("form");
    var result = document.getElementById("hasil");
    var bnykPilihan = document.getElementById("jmlhPilihan2").value;
    var form1 = document.getElementById("pilihan1");
    var inputan = form1.getElementsByTagName("input");
    var radios = "";

    for (var i = 0; i < inputan.length; i++) {
        if (inputan[i].type == "text") {
            radios += inputan[i].value + ", ";
        }
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var inputOption = document.querySelector('input[name="option"]:checked');

        if (inputOption) {
            result.textContent = "Halo, nama saya " + name.value + ", saya mempunyai sejumlah " + 
            bnykPilihan + " pilihan yaitu " + radios + "dan saya memilih " + inputOption.value + ".";
        } else {
            result.textContent = "Please select an option.";
        }
    });
}