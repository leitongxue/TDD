function random_a_number() {
    var numbers = [];
    while (numbers.length < 4) {
        var number = parseInt(Math.random() * 10).toString();
        if (!_.contains(numbers, number)) {
            numbers.push(number)
        }
    }
    return numbers[0] + numbers[1] + numbers[2] + numbers[3];
}
function not_same() {
    var number = random_a_number()
    for (var i = 0; i < 4; i++) {
        var end = _.filter(number[i], function (act) {
            return act == number[0], number[1], number[2], number[3]
        })
        if (end.length == 1) {
            localStorage.folg = "true"
        }
    }
    return localStorage.folg
}
