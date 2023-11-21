const countValue = document.querySelector('#count');

const increment = () =>
{
    // Get The Value From UI 
    let value = parseInt(countValue.innerText);

    // Update Value 
    value = value + 1;

    // set the Value onto UI 
    countValue.innerText = value;
}

const decrement = () =>
{
    // Get The Value From UI 
    let value = parseInt(countValue.innerText);

    // Update Value 
    value = value - 1;

    // set the Value onto UI 
    countValue.innerText = value;
}

