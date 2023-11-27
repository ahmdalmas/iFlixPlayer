function showPass() {
    togglePasswordVisibility("pass1");
    togglePasswordVisibility("pass2");
    togglePasswordVisibility("pass3");

    $(this).find("i").toggleClass("bi-eye bi-eye-slash");
}

function togglePasswordVisibility(passwordFieldId) {
    var field = document.getElementById(passwordFieldId);
    if (field.type === "password") {
        field.type = "text";
    } else {
        field.type = "password";
    }
}


$(document).ready(function() {
    $(".icon-container").on('click', function(){
        var icon = $(this).find("i");

        // Toggle between initial-icon and changed-icon
        // icon.toggleClass("bi-eye bi-eye-slash");

        // You can add additional logic to change the icon based on the current class
        // For example, if you have multiple states, you can use if-else conditions.
        if (icon.hasClass("bi-eye")) {
            icon.removeClass("bi-eye").addClass("bi-eye-slash");
        } else {
            icon.removeClass("bi-eye-slash").addClass("bi-eye");
        }
    });
});