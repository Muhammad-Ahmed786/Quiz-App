var welcomeText = document.getElementById("logedinName")

var loggedinUserkey="loggedinUser"

let user = getText(loggedinUserkey)
if(user==null ||user == ""){
    window.location = "./login.html"
}
else{
    welcomeText.innerHTML = "Welcome "+user
}
function StartQuiz(){
    localStorage.removeItem("points")
    window.location = "./quiz_page/quiz1.html" 
}
function Logout(){
    localStorage.removeItem(loggedinUserkey)
    window.location = "./login.html"
}

function setText(key, data) {
    if (key != "" && key != undefined && key != null && data != "" && data != null && data != undefined) {
        localStorage.setItem(key, data)
        return true
    }
    else {
        return false
    }
}
function getText(key) {
    if (key != "" && key != undefined && key != null) {
        let data = localStorage.getItem(key)
        return data
    }
    else {
        return null
    }
}