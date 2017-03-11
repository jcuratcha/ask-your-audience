"use strict";
var Poll = (function () {
    function Poll(id, question, options, votes, owner) {
        this.id = id;
        this.question = question;
        this.options = options;
        this.votes = votes;
        this.owner = owner;
    }
    return Poll;
}());
exports.Poll = Poll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQ0MsY0FDUSxFQUFVLEVBQ1YsUUFBZ0IsRUFDaEIsT0FBaUIsRUFDakIsS0FBZSxFQUNmLEtBQWE7UUFKYixPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQ1YsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFVO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQVU7UUFDZixVQUFLLEdBQUwsS0FBSyxDQUFRO0lBQUcsQ0FBQztJQUMxQixXQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFQWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQb2xsIHtcclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBpZDogbnVtYmVyLCBcclxuXHRcdHB1YmxpYyBxdWVzdGlvbjogc3RyaW5nLCBcclxuXHRcdHB1YmxpYyBvcHRpb25zOiBzdHJpbmdbXSwgXHJcblx0XHRwdWJsaWMgdm90ZXM6IG51bWJlcltdLCBcclxuXHRcdHB1YmxpYyBvd25lcjogc3RyaW5nKSB7fVxyXG59Il19