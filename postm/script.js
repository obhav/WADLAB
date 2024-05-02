$(document).ready(function () {
    $("#registrationForm").submit(function (event) {
        event.preventDefault();
        const name = $("#name").val();
        const username = $("#username").val();
        const age = $("#age").val();
        const email = $("#email").val();
        const password = $("#password").val();
        const phone = $("#phone").val();
        const city = $("#city").val();
        const country = $("#country").val();

        if (name && username && age && email && password && phone && city && country) {
            let postObject = {
                name: { first: name, last: "" },
                login: { username: username },
                dob: { age: age },
                email: email,
                phone: phone,
                location: { city: city, country: country }
            };

            let storedUser = JSON.parse(localStorage.getItem("users")) || [];
            storedUser.unshift(postObject);
            localStorage.setItem("users", JSON.stringify(storedUser));
            window.location.href = 'data_list.html';
        } else {
            alert("Please fill in all the required fields.");
        }
    });
});


function clearlocalstorage() {
    localStorage.clear();
    alert("Localstorage cleared")
}