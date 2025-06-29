const value = Math.round(Math.random() * 100); // generatin random value between 0 and 100.
console.log(value);

let count = 0  //Initiate count at 0

//Function to diable and enable buttons, according to count value
// When count is 0, Submit button is disables
// Otherwise Submit is enabled and Start Game is disabled.
function updateBtn(countVal) {
    const startBtn = document.getElementById('start')
    const submitBtn = document.getElementById('submitBtn');

    if (countVal === 0) {
        submitBtn.classList.add('disable');
    } else if (countVal <= 10) {
        startBtn.classList.add('disable');
        submitBtn.classList.remove('disable')
    } else {
        startBtn.classList.remove('disable');
        submitBtn.classList.add('disable');

    }
}

updateBtn(count)

//Handle input section
document.getElementById('input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        count += 1;
        submitFunction(count);
    }
});

//Handle Submit button
document.getElementById('submitBtn').addEventListener('click', function (e) {
    count += 1;
    submitFunction(count);
})

//Handle Start Button
document.getElementById('start').addEventListener('click', function (e) {
    count += 1;
    if (document.getElementById('comment')) {
        document.getElementById('comment').remove();
    }
    if (document.getElementById('answerString')) {
        document.getElementById('answerString').remove();
    }
    updateBtn(count);
})

//Function to take input value
function submitFunction(count) {
    const inputVal = parseInt(document.getElementById('input').value);
    compare(inputVal, count);
    updateBtn();
}

//FUnction to compare value and print comment
function compare(inputVal, count) {
    if (count > 10) {
        opString(`You lost! The number was ${value}`)
    }
    else if (inputVal > value) {
        opString('Too High!');
        answer(inputVal);
    } else if (inputVal < value) {
        opString('Too low!');
        answer(inputVal);
    } else {
        win(inputVal);
    }
}

//Print comment
function opString(stringVal) {
    if (document.getElementById('comment')) {
        document.getElementById('comment').innerText = stringVal;
    } else {
        const comment = document.createElement('p');
        comment.id = 'comment'
        comment.innerText = stringVal;
        document.getElementById('container').appendChild(comment);
    }
}

//Function to print answer string
function answer(val) {
    if (document.getElementById('answerString')) {
        const ans = document.getElementById('answerString')
        const curr = ans.innerText
        const newAns = curr + ',' + val;
        ans.innerText = newAns;
    } else {
        const answerString = document.createElement('p');
        answerString.id = 'answerString';
        answerString.innerText = `Your guesses: ${val}`;
        document.getElementById('container').appendChild(answerString)
    }
}

//Final comment
function win(val) {
    const comment = document.getElementById('comment');
    comment.innerText = 'You got it, Congrats'

    const ans = document.getElementById('answerString')
    if (ans) {
        const curr = ans.innerText
        const newAns = curr + ',' + val;
        ans.innerText = newAns;
    } else {
        const answerString = document.createElement('p');
        answerString.id = 'answerString';
        answerString.innerText = `Your guesses: ${val}`;
        document.getElementById('container').appendChild(answerString)
    }
}