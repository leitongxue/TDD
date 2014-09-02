describe("input", function () {

    beforeEach(function () {
        localStorage.number = "[]"
        localStorage.input_number=1234

    })


    afterEach(function () {
        localStorage.clear();
    })
    it("input 4 numbers", function () {
        var input_numbers = get_input_number()
        expect(input_numbers.length).toBe(4)
    })
    it("input 4 numbers not same",function(){

    })
})