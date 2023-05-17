
var loginForm = document.forms.loginform
var userkey = "users"
var loggedinUserkey="loggedinUser"
function Login() {
    let email = loginForm["email"].value
    let pass = loginForm["password"].value
    if (Validation()) {
        let usersarr = getArray(userkey)
        if (usersarr.length > 0) {
            let Loginuser = usersarr.filter(function (arr,i) {

                return (arr[1]==email && arr[2]==pass)
            })
            
            if(Loginuser.length>0){
                let lu = Loginuser[0]
               if(setText("loggedinUser",lu[0])){
                 window.location = "./index.html"
               }
               else{
                alert("something went wrong")
               } 
            }
            else{
                alert("Email or Password is Incorrect")
            }
        }
        else {
            alert("Email or Password is Incorrect")
        }
    }
}

function Validation() {
    if (!NotNullOrEmpty(loginForm['email'].value)) {
        loginForm['email'].setCustomValidity("Email is Invalid")
    } else {
        loginForm['email'].setCustomValidity("")
    }
    if (!NotNullOrEmpty(loginForm['password'].value)) {
        loginForm['password'].setCustomValidity("Password Required")
    } else {
        loginForm['password'].setCustomValidity("")
    }
    return loginForm.reportValidity()
}

function NotNullOrEmpty(value) {

    if (value == "" || value == null || value == undefined) {
        return false
    }
    else {
        return true
    }
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
function setArray(key, newarray) {
    if (key != "" && key != undefined && key != null && newarray.length > 0) {
        let oldarray = localStorage.getItem(key)
        var narr = []
        if (oldarray == null) {
            narr.push(newarray)
        }
        else {
            oldarray = JSON.parse(oldarray)
            console.log(oldarray)
            for (let i in oldarray) {

                narr.push(oldarray[i])
            }

            narr.push(newarray)
        }
        console.log(narr)
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