function start() {
    localStorage.action = "true"

}
function count_down(input,numbers,compare,count) {

    console.log(11)
    if (count < 6) {
        if (compare == "4A0B") {
            localStorage.action = "false"
            localStorage.countz = 0
            localStorage.input_number = ""
            localStorage.number = ""
            return "congratulations!"
        }
        else {
            return compare
        }
    }
    else {
        localStorage.action = "false"
        localStorage.countz = 0
        localStorage.input_number = ""
        localStorage.number = ""
        return "sorry,you lost!"
    }

}
