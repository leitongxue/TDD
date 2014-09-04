describe("number", function () {

    beforeEach(function () {
        localStorage.number = "[]"
        localStorage.folg = "false"
    })

    afterEach(function () {
        localStorage.clear();
    })

    it("make 4 numbers", function () {
        var Number = random_a_number()
        expect(Number.length).toBe(4);
    });
    it("4 numbers not same", function () {
        var same = not_same()
        expect(same).toBe("true")
    })
})