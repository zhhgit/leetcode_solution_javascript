/**
 * Created by zhanghao1 on 2018/4/27.
 */

var ListNode = require("./ListNode");

function ListBuilder(nums) {
    this.head = null;
    this.tail = null;
    this._init = function () {
        for(var i = 0;i<nums.length;i++){
            if(this.tail === null){
                this.tail = new ListNode(nums[i]);
                this.head = this.tail;
            }
            else{
                this.tail.next = new ListNode(nums[i]);
                this.tail = this.tail.next;
            }
        }
    };
    this.getHead = function () {
        return this.head;
    };
    this._init();
}

module.exports = ListBuilder;