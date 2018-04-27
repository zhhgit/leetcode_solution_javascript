/**
 * Created by zhanghao1 on 2018/4/27.
 */

function PrintUtil() {

}

PrintUtil.printList = function (head) {
    var curr = head;
    while (curr !== null){
        console.log(curr.val);
        curr = curr.next;
    }
};

module.exports = PrintUtil;
