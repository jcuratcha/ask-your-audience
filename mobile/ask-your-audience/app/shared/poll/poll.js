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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQ0MsY0FBbUIsRUFBVSxFQUFTLFFBQWdCLEVBQVMsT0FBaUIsRUFBUyxLQUFlLEVBQVMsS0FBYTtRQUEzRyxPQUFFLEdBQUYsRUFBRSxDQUFRO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVU7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFVO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUTtJQUFHLENBQUM7SUFDbkksV0FBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUG9sbCB7XHJcblx0Y29uc3RydWN0b3IocHVibGljIGlkOiBzdHJpbmcsIHB1YmxpYyBxdWVzdGlvbjogc3RyaW5nLCBwdWJsaWMgb3B0aW9uczogc3RyaW5nW10sIHB1YmxpYyB2b3RlczogbnVtYmVyW10sIHB1YmxpYyBvd25lcjogc3RyaW5nKSB7fVxyXG59Il19