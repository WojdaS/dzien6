let parFirstParentNode = document.getElementById('parFirst').parentNode;

console.log(parFirstParentNode);


let parFirstParentElement = document.getElementById('parFirst').parentElement;

console.log(parFirstParentElement);




let sectionFirstChildNode = document.getElementById('sectionFirst').childNodes;

console.log(sectionFirstChildNode);
console.log(sectionFirstChildNode[0]);
console.log(sectionFirstChildNode[0].nodeName);


let sectionFirstChild = document.getElementById('sectionFirst').children;
console.log(sectionFirstChild);

let prevparSecondSiblings = document.getElementById('parSecond').previousElementSibling;
console.log(prevparSecondSiblings);


let nextParSecondSiblings = document.getElementById('parSecond').nextElementSibling;
console.log(nextParSecondSiblings);
