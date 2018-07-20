let btn = document.createElement('button');
console.log(btn);

console.log(document.body.childNodes);

let btnTxt = document.createTextNode('Naciśnij');

let classAtr = document.createAttribute('class');

classAtr.value = 'btn';

document.body.appendChild(btn);

btn.appendChild(btnTxt);

btn.setAttributeNode(classAtr);

//btn.setAttribute('class', 'btn');

//console.log(document.body.childNodes);
