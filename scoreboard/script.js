const addNum = () => {
    const number = document.getElementById('type-number');
    const list = document.getElementById('list-number');
    let divData = document.createElement("div");
    divData.onclick = event => addScore(event);

    divData.innerText = number.value;
    list.appendChild(divData);
    number.value = '';
}

let finalScore = document.getElementById('final-score');
finalScore.innerText = "0";
const addScore = (event) => {
    let divNumber = event.srcElement;
    let numberValue = divNumber.innerText;
    if (divNumber.className == "highlight") {
        divNumber.className = "";
        finalScore.innerText = parseInt(finalScore.innerText) - parseInt(numberValue);
    } else {
        divNumber.className = "highlight";
        finalScore.innerText = parseInt(finalScore.innerText) + parseInt(numberValue);
    }
}
