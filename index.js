const nameItem = document.querySelector('#name');
const weightItem = document.querySelector('#weight');
const distanceItem = document.querySelector('#distance');
const formElement = document.querySelector('.form');


formElement.addEventListener('submit',  (evt) => {
    evt.preventDefault();
    nameItem.setCustomValidity('');
    weightItem.setCustomValidity('');
    distanceItem.setCustomValidity('');

    if (nameItem.value === '') {
        nameItem.setCustomValidity('Заполните данное поле!');
    }

    if (weightItem.value === '') {
        weightItem.setCustomValidity('Заполните данное поле');
    } else if (weightItem.value < 0) {
        weightItem.setCustomValidity('Нельзя вводить отрицательные числа!');
    }

    if (distanceItem.value === '') {
        distanceItem.setCustomValidity('Заполните данное поле!');
    } else if (distanceItem.value < 0) {
        distanceItem.setCustomValidity('Нельзя вводить отрицательные числа!');
    }

    const dataArray = new FormData(formElement);
    const tableElement = document.querySelector('.product-table tbody');
    const newRow = document.createElement('tr');
    let resultArray = [];

    dataArray.forEach((item, index) => {
        if (isNaN(item)) {
           resultArray.push(item);
        } else {
            resultArray.push(Number(item));
        }
    });
    
    let resultDelivery = (resultArray[1] * resultArray[2]) / 10;
    resultArray.push(`${resultDelivery.toFixed(2)} руб.`)
    
    const addRows = document.querySelector('.product-table tbody');
    const resultRow = document.createElement('tr');
    resultArray.forEach(element => {
            const resultCell = document.createElement('td');
            resultCell.textContent = element;
            addRows.append(resultRow);
            resultRow.append(resultCell);
    });

    formElement.reset();
});

