describe("number", function () {

    beforeEach(function () {
        localStorage.number = "[]"
    })


    afterEach(function () {
        localStorage.clear();
    })

    it("make 4 numbers", function () {
        var Number = random_a_number()
        expect(Number.length).toBe(4);
    });
})