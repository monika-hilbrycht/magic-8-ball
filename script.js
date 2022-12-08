const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = [`Yes!`, `No.`, `Hard to say...`, `Maybe...`, `You don't want to know the answer... :/`, `Yes, of course!`];

const shakeBall = () => {

    ball.classList.add('shake-animation');
    setTimeout(checkInput, 1000);
}

const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = ''
        ball.classList.remove('shake-animation');
    } else if (input.value !== '' && input.value.slice(-1) === '?') {
        error.textContent = 'Your question need to be end with a question mark.';
        answer.textContent = ''
    } else {
        error.textContent = 'You need to ask a question!';
        answer.textContent = ''
    }
}


const generateAnswer = () => {

    const number = Math.floor(Math.random() * 5)
    answer.innerHTML = `<span>Answer:</span> ${answersArr[number]}`

}

ball.addEventListener('click', generateAnswer);
