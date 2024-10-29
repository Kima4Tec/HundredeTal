let max = 90

function getRandomInt() {
    const number =Math.floor(Math.random() * max);
    const input1More = number+1;
    const input10More = number+10;
    const input1Less = number-1;
    const input10Less = number -10;

    document.querySelector('.random-number').value = number;
    document.querySelector('#input1-more').value = input1More;
    document.querySelector('#input10-more').value = input10More;
    document.querySelector('#input1-less').value = input1Less;
    document.querySelector('#input10-less').value = input10Less;
}
