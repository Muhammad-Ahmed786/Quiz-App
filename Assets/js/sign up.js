

var registerForm = document.forms.register

var userkey = "users"

function RegisterUser() {
    if (Validation()) {
        let arr = [registerForm["username"].value,
        registerForm["email"].value,
        registerForm["password"].value]
        console.log(arr)
        if (setArray(userkey, arr)) {
            ClearInput()
            alert("user register succesfully")
        }
        else {
            alert("user registration failed")
        }
    }
    else {
        alert("something wrong")
    }
}
function ClearInput() {
    registerForm['username'].value=""
    registerForm['email'].value=""
    registerForm['password'].value=""
    registerForm['confirm-password'].value=""
    registerForm['terms'].checked =false

}
function Validation() {
    if (!NotNullOrEmpty(registerForm['username'].value)) {
        registerForm['username'].setCustomValidity("Username Required")
    }
    else {
        registerForm['username'].setCustomValidity("")
    }
    if (!NotNullOrEmpty(registerForm['email'].value)) {
        registerForm['email'].setCustomValidity("Email is Invalid")
    } else {
        registerForm['email'].setCustomValidity("")
    }
    if (!NotNullOrEmpty(registerForm['password'].value)) {
        registerForm['password'].setCustomValidity("Password Required")
    } else {
        registerForm['password'].setCustomValidity("")
    }
    if (!NotNullOrEmpty(registerForm['confirm-password'].value)) {
        registerForm['confirm-password'].setCustomValidity("Confirm-Password Required")
    }
    else {
        registerForm['confirm-password'].setCustomValidity("")
    }
    if (registerForm['terms'].checked != true) {
        registerForm['terms'].setCustomValidity("Must checked the Terms to Register")
    } else {
        registerForm['terms'].setCustomValidity("")
    }
    if (registerForm["password"].value != registerForm["confirm-password"].value) {
        registerForm["confirm-password"].setCustomValidity("Password not matched")
    }
    else {
        registerForm['confirm-password'].setCustomValidity("")
    }
    return registerForm.reportValidity()
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