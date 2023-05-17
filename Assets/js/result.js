var scoreText = document.getElementById("score")
var nameText = document.getElementById("logedinName")

var loggedinUserkey="loggedinUser"

let user = getText(loggedinUserkey)
if(user==null ||user == ""){
    window.location = "../login.html"
}
else{

    nameText.innerHTML = ""+user
}
ShowScore()

function ShowScore(){
    var points = getArray("points")
    if(points.length>0){
    let sum = points.reduce(function(a,b){
            return a+b
        },0)
        scoreText.innerHTML = sum
    }
    else{
        scoreText.innerHTML = "00"
    }
}

function Logout(){
    localStorage.removeItem(loggedinUserkey)
    window.location = "../login.html"
}

function getArray(key) {
    if (key != "" && key != undefined && key != null) {
        let data = localStorage.getItem(key)
        if (data == null) {
            return []
        }
        data = JSON.parse(data)
        return data
    }
    else {
        return []
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