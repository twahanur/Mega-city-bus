document.getElementById("bookingConfirmation").addEventListener('click', function () {
    repless('firstClassInput', 'firstClassSeats');
    repless('economyClassInput', 'economyClassSeats');
    repless('departureDate', 'confirmTravelDate');
    repless('returnDate', 'confirmReturnDate');

    const fclassTotalSeats = document.getElementById('firstClassSeats').innerText;
    const eclassTotalSeats = document.getElementById('economyClassSeats').innerText;
    const seatsamount = parseInt(fclassTotalSeats) + parseInt(eclassTotalSeats);
    document.getElementById('totalSeats').innerText = seatsamount;
    const totalCost = document.getElementById("TotalCost").innerText;
    const totalCostAmount = parseInt(totalCost);
    document.getElementById("totalCostforSeats").innerText = '$' + totalCostAmount;
    const now = new Date();
    document.getElementById("date").innerText = now;

})

// common repless Function
function repless(id, repless) {
    const input = document.getElementById(id).value;
    document.getElementById(repless).innerText = input;
}