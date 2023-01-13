
const balanceEl = document.getElementById('balance');
const moneyplusEl = document.getElementById('money-plus');
const moneyminusEl = document.getElementById('money-minus');
const listEl = document.getElementById('list');
const formEl = document.getElementById('form');
const transactionEl = document.getElementById('transaction');
const amountEl = document.getElementById('amount');

let transactions = [];
transactions = localStorage.getItem("transactions") != null ? JSON.parse(localStorage.getItem("transactions")): [];


let init = function(){
    listEl.innerHTML = null;
    transactions.forEach(addTransactionDOM);
    updateValues();
};

let addTransactionDOM = function(transaction)
{
    let item = document.createElement("li");
    item.classList.add(transaction.amount < 0 ? "minus" : "plus");
    item.innerHTML= `${transaction.transaction} <span>${transaction.amount}</span>
    <button class="delete-btn" onclick = "removeTransaction(${transaction.id})">X</button>`;
    listEl.appendChild(item);
};

let removeTransaction = function (id){
    transactions = transactions.filter((transaction)=>transaction.id !==id);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    init();
    
};

let updateValues = function(){
    let amounts = transactions.map((transaction)=>transaction.amount);
    let income = amounts.filter((item)=> item>0).reduce((acc, item)=> acc+item, 0);
    let expense = amounts.filter((item)=> item<0).reduce((acc, item)=> acc+item, 0);
    let total = income + expense;

    moneyplusEl.innerText = `₹${income}`;
    moneyminusEl.innerText = `₹${expense}`;
    balanceEl.innerText = `₹${total}`;
}; 

formEl.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(transactionEl.value.trim()==="" || amountEl.value.trim()===""){
        alert("Enter correct transaction details");
    }
    else{
        const transactionItem = {
            id : new Date().valueOf(),
            transaction : transactionEl.value,
            amount: Number(amountEl.value)
        };
        transactions.push(transactionItem);
        localStorage.setItem("transactions", JSON.stringify(transactions));
        addTransactionDOM(transactionItem);
        updateValues();
        transactionEl.value = null;
        amountEl.value = null;
    }
});

init();