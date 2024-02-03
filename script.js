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

// const header = document.querySelector('.header');
// // console.dir(header.nextElementSibling);


// let div = document.createElement('div');
// div.id = 'note';
// div.className = 'content';
// div.innerHTML = '<p> Hi My name is mehedi hasan </p>';
// document.body.appendChild(div);

// const body = document.querySelector('body');
// console.dir(body.children);




const box = document.querySelector('.boxes');

// var box5 = document.createElement('div');
// box5.className = 'box';
// box5.id = 'box5';
// box5.innerHTML = '<h3> This is box Five </h3>';
// box.appendChild(box5);

const button = document.querySelector('.button');
console.dir(button);

button.addEventListener('click',  function(){
    var box5 = document.createElement('div');
    box5.className = 'box';
    box5.id = 'box5';
    box5.innerHTML = '<h3> This is box Five </h3>';
    box.appendChild(box5);

    
})


