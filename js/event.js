document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('open').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'block';

    });
    document.getElementById('btn').addEventListener('click', function () {
        document.getElementById('popup').style.display = 'none';
    });



    let inputText = document.querySelectorAll('input[type="text"]')
    //    console.log(inputText);
    //    console.log(inputLenght);

    for (let i = 0; i < inputText.length; i++) {
        inputText[i].addEventListener('change', function () {
            document.getElementById('result').innerHTML += this.value;
        })
    }
    document.body.addEventListener('keydown', zmienKolor);
    //    document.body.removeEventListener('keydown', zmienKolor);

    let linki = document.getElementsByClassName('link');
    for (i = 0; i < linki.length; i++) {
        linki[i].addEventListener('click', function (event) {
            console.log(event);
        })
    }
})



function zmienKolor() {

    this.style.backgroundColor = 'beige';
}
