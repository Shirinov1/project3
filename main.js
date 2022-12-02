const li1 = document.querySelector('.a');
const li2 = document.querySelector('.b');
const li3 = document.querySelector('.c');
const li4 = document.querySelector('.d');
const li5 = document.querySelector('.e');
const li6 = document.querySelector('.f');
const li7 = document.querySelector('.g');
const li8 = document.querySelector('.h');


const left = document.querySelector('.leftP');
const right = document.querySelector('.rightP');

const inpt1 = document.querySelector('.inpute');
const inpt2 = document.querySelector('.input2');


const btnLi1 = document.querySelectorAll('.liBottomLeft');

btnLi1.forEach(element => {
    element.addEventListener('click', () => {
        delete1();
        delete2();
        element.style.backgroundColor = '#833AE0';
        element.style.color = '#FFFFFF';
        left.innerHTML = ' ';
        right.innerText = ' ';
        inpt2.innerHTML = ' ';
        inpt1.value = '';
    });
});

function delete1() {

    btnLi1.forEach(element => {
        element.style.backgroundColor = 'white';
        element.style.color = '#C6C6C6';
    });

}

function delete2() {

    btnLi2.forEach(element => {
        element.style.backgroundColor = 'white';
        element.style.color = '#C6C6C6';
    });

}

let first = '';
let second = '';

li1.addEventListener('click', () => {
    first = ('RUB');
});

li2.addEventListener('click', () => {
    first = ('USD');
});

li3.addEventListener('click', () => {
    first = ('EUR');
});

li4.addEventListener('click', () => {
    first = ('GBP');
});

li5.addEventListener('click', () => {
    second = ('RUB');
});

li6.addEventListener('click', () => {
    second = ('USD');
});

li7.addEventListener('click', () => {
    second = ('EUR');
});

li8.addEventListener('click', () => {
    second = ('GBP');
});


const btnLi2 = document.querySelectorAll('.liBottomRight');

btnLi2.forEach(element => {

    element.addEventListener('click', () => {

        const url = (`https://api.exchangerate.host/latest?base=${first}&symbols=${second}`);

        fetch(`${url}`).then(res => res.json())

            .then(data => {
                console.log(data.rates[`${second}`]);
                left.innerText = `1 ${first} = ${data.rates[`${second}`]} ${second}`;
                right.innerText = `1 ${second} = ${1 / data.rates[`${second}`]} ${first}`;
                inpt2.innerHTML = inpt1.value * data.rates[`${second}`];
                console.log(inpt1.value.indexOf(3));
            });

        delete2();
        element.style.backgroundColor = '#833AE0';
        element.style.color = '#FFFFFF';
    });
});