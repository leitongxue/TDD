function start() {
    localStorage.action = "true"

}
function count_down(input,numbers,compare,count) {

    console.log(11)
    if (count < 6) {
        if (compare == "4A0B") {
            return "congratulations!"
        }
        else {
            return compare
        }
    }
    else {
        return "sorry,you lost!"
    }

}
