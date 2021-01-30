

// First Class
document.getElementById('firstClassPlusBtn').addEventListener('click', function () {
    TicketClassHandelar('firstClassInput', true);
})
document.getElementById('firstClassMinusBtn').addEventListener('click', function () {
    TicketClassHandelar('firstClassInput', false);
})


// Economy  Class 
document.getElementById('economyClassPlusBtn').addEventListener('click', function () {
    TicketClassHandelar('economyClassInput', true);
})
document.getElementById('enonomyClassMinusBtn').addEventListener('click', function () {
    TicketClassHandelar('economyClassInput', false);
})


// Ticket ticket Count & cost handelar
function TicketClassHandelar(Ticket, isIncrease) {
    const TicketClassInput = document.getElementById(Ticket);
    const TicketClassInputNumber = parseInt(TicketClassInput.value);
    let newTicketClassInputNumber = TicketClassInputNumber
    if (isIncrease == true) {
        newTicketClassInputNumber = TicketClassInputNumber + 1;
    }
    if (isIncrease == false && newTicketClassInputNumber > 0) {
        newTicketClassInputNumber = TicketClassInputNumber - 1;
    }
    TicketClassInput.value = newTicketClassInputNumber;
    totalSubCostAmouont();
}

function totalSubCostAmouont() {
    const firstClassTicket = document.getElementById("firstClassInput");
    const firstClassTicketNumber = parseInt(firstClassTicket.value);
    const economyClassTicket = document.getElementById("economyClassInput");
    const economyClassTicketNumber = parseInt(economyClassTicket.value);

    const subTotal = firstClassTicketNumber * 150 + economyClassTicketNumber * 100;
    const tax = Math.round(subTotal / 10);
    const total = subTotal + tax;
    document.getElementById("subTotal").innerText = subTotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("TotalCost").innerText = total;
}
