let angka = document.getElementById('tes');
let generate = document.getElementById('generate');



generate.onclick = function(){
    let input = document.getElementById('inputNumber').value;
    let random = Math.floor((Math.random() * input) + 1);
    angka.textContent = random;
    console.info(random);
}
