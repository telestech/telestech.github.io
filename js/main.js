export function sendEmail() {
    message = document.getElementById("message").value
    var link = "mailto:hindoria846@gmail.com"
    + "?cc=gaminglegendsultimate@gmail.com"
    + "&subject=" + encodeURIComponent("This is my subject")
    + "&body=" + encodeURIComponent(message)
    ;

    console.log(message)
    window.location.href = link;
}