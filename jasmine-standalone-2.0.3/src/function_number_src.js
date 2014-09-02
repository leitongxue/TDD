function random_a_number() {
    var numbers = [];
    while(numbers.length<4){
        var number = parseInt(Math.random() * 10).toString();
        if(!_.contains(numbers,number)){
            numbers.push(number)
        }
    }
    return numbers[0] + numbers[1]  + numbers[2] + numbers[3];
}

