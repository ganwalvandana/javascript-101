let budgetList = [];

const addItem = event => {
    let type = event.srcElement.id;
    const title = document.querySelector(`.text-${type}`).value;
    const amount = document.querySelector(`.number-${type}`).value;
    const item = {
        type: type == 'add' ? 1 : -1,
        title,
        amount: parseFloat(amount)
    }
    budgetList.push(item);
    showItem(item);
}

const showItem = item => {
    const itemPara = document.createElement('h1');
    const itemText = document.createTextNode(`${item.title} - ${item.amount} - ${item.type > 0 ? 'Credit' : 'Debit'}`);
    itemPara.appendChild(itemText);
    document.getElementById('expenseList').appendChild(itemPara);
}
