1.类的概念：var ListNode = function(){this.a = 1;this.b = function(){};this._init = function(){}; this._init(); };

2.模块的导出：module.exports = ListNode;

3.模块的导入：var ListNode = require("../common/ListNode");

4.类的静态方法：PrintUtil.printList = function(){};

5.类的实例：var listNode1 = new ListNode(0);

6.主函数用自执行函数实现