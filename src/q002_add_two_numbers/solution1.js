/**
 * Created by zhanghao1 on 2018/4/27.
 */

var ListNode = require("../common/ListNode");
var ListBuilder = require("../common/ListBuilder");
var PrintUtil = require("../common/PrintUtil");

var addTwoNumbers = function(l1, l2) {
    if(l1 === null){
        return l2;
    }
    if(l2 === null){
        return l1;
    }
    var len1 = getLen(l1);
    var len2 = getLen(l2);
    var newL1,newL2;
    if(len1 >= len2){
        newL1 = l1;
        newL2 = extendList(l2,len1 - len2);
    }
    else {
        newL1 = extendList(l1,len2 - len1);
        newL2 = l2;
    }
    return addSameLen(l1,l2);
};

var extendList = function (head,len) {
    var curr = head;
    while (curr.next !== null){
        curr = curr.next;
    }
    for(var i = 0;i<len;i++){
        curr.next = new ListNode(0);
        curr = curr.next;
    }
    return head;
};

var getLen = function (head) {
    var len = 0;
    var curr = head;
    while (curr !== null){
        len++;
        curr = curr.next;
    }
    return len;
};

var addSameLen = function (l1,l2) {
    var increase = 0;
    var fakeHead = new ListNode(0);
    var curr = fakeHead;
    while (l1 !== null && l2 !== null){
        var sum = l1.val + l2.val + increase;
        var num;
        if(sum >= 10){
            num = sum % 10;
            increase = 1;
        }
        else{
            num = sum;
            increase = 0;
        }
        curr.next = new ListNode(num);
        curr = curr.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    if(increase === 1){
        curr.next = new ListNode(1);
    }
    return fakeHead.next;
};

(function () {
    var nums1 = [1,2];
    var nums2 = [3,4,5];
    var listBuilder1 = new ListBuilder(nums1);
    var listBuilder2 = new ListBuilder(nums2);
    PrintUtil.printList(addTwoNumbers(listBuilder1.getHead(),listBuilder2.getHead()));
})();