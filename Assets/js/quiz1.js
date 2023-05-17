
var loggedinUserkey="loggedinUser"

let user = getText(loggedinUserkey)
if(user==null ||user == ""){
    window.location = "./login.html"
}

function Initialize(nextpage){
    var num = 20
    var secondsText = document.getElementById("seconds")
    secondsText.innerHTML = num
    Timer(20,secondsText,function(){
        window.location = "./"+nextpage+".html"
    }) 
}

function NextQuiz(correctopt,nextpage){
    var correctoptel = document.getElementById(correctopt)
    if(correctoptel.checked == true){
        let points = 5
        setPoints("points",points)
    }
    else{
        setPoints("points",0)
    }
    window.location = "./"+nextpage+".html"
}


function Timer(time,timerText,result){
    var interval;

interval = setInterval(function(){
    time--   
    if(time<10)
    timerText.innerHTML = "0"+time
    else
    timerText.innerHTML = time
    if(time==0){
        clearInterval(interval)
        result()
    }
},1000)
}

function setPoints(key, points) {
    if (key != "" && key != undefined && key != null &&  points != undefined && points >= 0) {
        let oldpoints = localStorage.getItem(key)
        var narr = []
        if (oldpoints == null) {
            narr.push(points)
        }
        else {
            oldpoints = JSON.parse(oldpoints)
        
            for (let i in oldpoints) {

                narr.push(oldpoints[i])
            }

            narr.push(points)
        }
        
        localStorage.setItem(key, JSON.stringify(narr))
        return true
    }
    else {
        return false
    }
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