const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionariesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];


getRandomUser();
getRandomUser();
getRandomUser();

// fetch random user and add money
async function getRandomUser(){
    const res = await  fetch('https://randomuser.me/api');
    const data = await res.json();
    const user = data.results[0];
    
    const newUser = {
        name:`${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }

    addData(newUser);
    console.log(newUser,"newUser");

}

function addData(obj){
    data.push(obj);

    updateDOM();
}

function updateDOM(providedData = data){

    // clean main div
    main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';

    providedData.forEach(item => {
        // here we want to output the person and wealth

        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong>  $${formatMoney(item.money)}`;
            main.appendChild(element);

    })


}

// format number as money
function formatMoney(number){
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');  // 12,345.67
}

function doubleMoney(){
    data = data.map(user => {
        return {...user,money:user.money*2 };
    });

    updateDOM();
}

function sortByRichest(){
    data.sort((a,b) => b.money - a.money);

    updateDOM();
}

function showMillionaries(){
    data = data.filter(user => user.money > 1000000);

    updateDOM();
}

function calculateWealth(){
    const wealth = data.reduce((acc,user) => (acc += user.money),0);

    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total wealth:<strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthEl);
}

// Promise , arr.forEach((item,index,arr))
//functionality Adduser

// arr.map((item,index,arr) => {
   

// })

// const arr = [1,2,3,4];
// const arr2 = arr.map(item => item*2);
// console.log(arr2,"arr2");
// arr["aa","bb","cc"]---[1,2,3,110,5,6] ==> [1,110,2,3,4]
// a-1,b=2,c=3 == 2,4,6   1 + 1+ 0 ==> 2 ==> [1,2,110, ]
// arr.reduce((accumulator, currentValue))
 const arr = [1,2,3,4,5];
 const total = arr.reduce((acc,curr) => (acc+curr),0);
 console.log(total,"total");


// Event listener
addUserBtn.addEventListener('click',getRandomUser);
doubleBtn.addEventListener('click',doubleMoney);
sortBtn.addEventListener('click',sortByRichest);
showMillionariesBtn.addEventListener('click',showMillionaries);
calculateWealthBtn.addEventListener('click',calculateWealth);