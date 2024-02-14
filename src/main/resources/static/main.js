let ticketsArray = [];
let ticketsHTML = document.getElementById("tickets");

function updateArray() {
    let concat = "";
    concat += "<table>";
    concat += "<tr>" + "<td>Movie</td><td>Amount</td><td>FirstName</td><td>LastName</td><td>Phone</td><td>E-mail</td>" + "<tr>";

    for (let i = 0; i < ticketsArray.length; i++) {
        concat += "<tr>";
        let values = Object.values(ticketsArray[i]);
        for (let j = 0; j < values.length; j++) {
            concat += "<td>" + values[j] + "</td>";
        }
        concat += "</tr>";
    }
    concat += "</table>";
    ticketsHTML.innerHTML = concat;
    console.log(concat);
}

function buyTicket() {
    if (validateInput()) {
        let movie = document.getElementById("movie").value;
        let amount = document.getElementById("amount").value;
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;

        let ticketDetails = {
            movie: movie,
            amount: amount,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
        };

        ticketsArray.push(ticketDetails);
        updateArray();
        delEntries();
    }
}

function delTickets() {
    ticketsArray = [];
    updateArray();
}

function validateInput() {
    let counter = 0;

    let movie = document.getElementById("movie").value;
    let movieError = document.getElementById("movieError");
    if (movie == "Select a movie...") {
        movieError.innerHTML = "You must select a movie.";
        counter++;
    } else {
        movieError.innerHTML = "";
    }

    let amount = document.getElementById("amount").value;
    let amountError = document.getElementById("amountError");
    if (amount === "" || isNaN(amount)) {
        amountError.innerHTML = "You must enter a valid number.";
        counter++;
    } else {
        amountError.innerHTML = "";
    }

    let firstName = document.getElementById("firstName").value;
    let firstNameError = document.getElementById("firstNameError");
    if (firstName === "") {
        firstNameError.innerHTML = "You must enter a first name.";
        counter++;
    } else {
        firstNameError.innerHTML = "";
    }

    let lastName = document.getElementById("lastName").value;
    let lastNameError = document.getElementById("lastNameError");
    if (lastName === "") {
        lastNameError.innerHTML = "You must enter a last name.";
        counter++;
    } else {
        lastNameError.innerHTML = "";
    }

    let phone = document.getElementById("phone").value;
    let phoneError = document.getElementById("phoneError");
    console.log(phone);
    if (phone === "" || isNaN(phone) || phone.toString().length < 8) {
        phoneError.innerHTML = "You must enter a valid phone number (8+ digits).";
        counter++;
    } else {
        phoneError.innerHTML = "";
    }

    let email = document.getElementById("email").value;
    let emailError = document.getElementById("emailError");
    const regex = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
    if (email === "" || !regex.test(email)) {
        emailError.innerHTML = "You must enter a valid email.";
        counter++;
    } else {
        emailError.innerHTML = "";
    }

    if (counter > 0) {
        return false;
    } else {
        return true;
    }
}

function delEntries() {
    let movie = document.getElementById("movie");
    let amount = document.getElementById("amount");
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");

    movie.value = "";
    amount.value = "";
    firstName.value = "";
    lastName.value = "";
    phone.value = "";
    email.value = "";
}

updateArray();
