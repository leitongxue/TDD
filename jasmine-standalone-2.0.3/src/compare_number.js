function Compare_checkout(input, number) {
    var count_A = 0
    for (var i = 0; i < 4; i++) {
        if (input[i] == number[i]) {
            count_A += 1
        }
    }
    var count_total = _.intersection(input, number).length;
    var count_B = count_total - count_A;
    result = count_A + "A" + count_B + "B"
    return result

}
