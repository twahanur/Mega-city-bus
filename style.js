document.getElementById('bookingButton').addEventListener('click', function () {
    const button = document.getElementById("bookingButton");
    button.style.display = "none";
    const bookNow = document.getElementById('bookNow');
    bookNow.style.display = "block";
    document.getElementById("bookingConfirmation").addEventListener('click', function () {
        const confirmationForm = document.getElementById("confirmationForm");
        confirmationForm.style.display = "block";
        const bookNow = document.getElementById('bookNow');
        bookNow.style.display = "none";
    }
    )
})