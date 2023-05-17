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