describe("count", function () {
    var compare
    var count

    beforeEach(function () {
        localStorage.action = "false"

    })

    afterEach(function () {
        localStorage.clear();
    })

    it("the game is action", function () {
        start()
        expect(localStorage.action).toBe("true")
    })
    it("if user use 6times but not 4A0B,fail", function () {
        compare="2A0B"
        count=6
        expect(count_down(compare,count)).toBe("sorry,you lost!")
    })
    it("if user use 1-5times,and have 4A0B",function(){
        compare="4A0B"
        count=3
        expect(count_down(compare,count)).toBe("congratulations!")
    })
    it("if user use 1-5times but not 4A0B",function(){
        compare="1A2B"
        count=4
        expect(count_down(compare,count)).toBe("1A2B")
    })
})