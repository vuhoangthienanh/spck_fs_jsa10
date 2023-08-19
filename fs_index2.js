console.log(localStorage.getItem("userpass"))

document.querySelector("#demo").onclick = function () { login() };
function login() {
    var user = Array(document.getElementById("name2").value);
    var pass = Array(document.getElementById("pass2").value);
    var dtb = localStorage.getItem("userpass").split(",");
    var index = dtb.indexOf(String(user));
    console.log(index);
    if (dtb[index + 1] == pass) {
        localStorage.setItem("currentuser", user)
        location.href = "main.html";
        // Đến trang chính
    } else {
        alert("Wrong username or password");
    }
}