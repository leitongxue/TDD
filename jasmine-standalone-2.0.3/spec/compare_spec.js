describe("compare", function () {
    var input
    var number
    beforeEach(function () {

    })


    it("compare numbers to 4A0B", function () {
        input = "1234"
        number = "1234"
        expect(Compare_checkout(input, number)).toEqual("4A0B")
    })
    it("compare numbers to 0A4B", function () {
        input = "1234"
        number = "4321"
        expect(Compare_checkout(input, number)).toEqual("0A4B")
    })
    it("compare numbers to 2A2B", function () {
        input = "1234"
        number = "1243"
        expect(Compare_checkout(input, number)).toEqual("2A2B")
    })
    it("compare numbers to 0A0B", function () {
        input = "1234"
        number = "7890"
        expect(Compare_checkout(input, number)).toEqual("0A0B")
    })
    it("compare numbers to 2A0B", function () {
        input = "1234"
        number = "1278"
        expect(Compare_checkout(input, number)).toEqual("2A0B")
    })
    it("compare numbers to 0A2B", function () {
        input = "1234"
        number = "2189"
        expect(Compare_checkout(input, number)).toEqual("0A2B")
    })
})