let parFirst = document.getElementById('parFirst');

console.log(parFirst.innerHTML);

parFirst.innerHTML += '<span>Lorem input</span>';

//parFirst.innerHTML = '<span>Lorem input</span>';


let parSecond = document.getElementById('parSecond');

console.log(parSecond.innerText);


parSecond.innerText += '<p> To jest nowy tekst w tym akapicie </p>'

let nav = document.getElementById('main-nav');

nav.outerHTML += '<nav id ="new-nav"><ul><li><a href="#">new link</a></li></ul></nav>'

document.getElementById('link').href = 'http://google.com';

document.getElementById('link').innerText = 'google';

//document.getElementById('link').className = 'nowa_kasa'

document.getElementById('link').classList.add('nowa_kasa');

document.getElementById('link').classList.remove('google');

document.getElementById('link').style.color = 'red';

//document.getElementById('link').style.display = 'none';
