// const box1 = document.querySelector('#box1');

// console.log(box1.innerHTML);

// const box1 = document.querySelector('.boxes');

// console.dir(box1);

// console.dir(box1);
// var arrayBox1 = Array.prototype.slice.call(box1);
// console.log(arrayBox1);


// const list = document.querySelector('#list')

// console.dir(list.childern);

// const univers = document.querySelector('*');
// console.dir(univers);

const header = document.querySelector('.header');
// console.dir(header.nextElementSibling);


let div = document.createElement('div');
div.id = 'note';
div.className = 'content';
div.innerHTML = '<p> Hi My name is mehedi hasan </p>';
document.body.appendChild(div);

const body = document.querySelector('body');
console.dir(body.children);

