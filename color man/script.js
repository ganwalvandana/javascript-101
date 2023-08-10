let buttons = document.querySelectorAll("#buttons button");
let humanHighlight = document.getElementsByClassName('box');

buttons.forEach(button => {
    button.style.backgroundColor = `#${button.id}`;
});

let selectedBox = null;

for (let i = 0; i < humanHighlight.length; i++) {
    let div = humanHighlight.item(i);
    div.addEventListener('click', () => {
        if (selectedBox !== null) {
            selectedBox.classList.remove('highlighted-box');
        }
        selectedBox = div;
        selectedBox.classList.add('highlighted-box');
    });
}

const fillColor = event => {
    if(selectedBox !== null){
        selectedBox.style.backgroundColor = `#${event.srcElement.id}`;
    }
    else{
        alert("kindly select a box");
        console.log("Select a box");
    }
}