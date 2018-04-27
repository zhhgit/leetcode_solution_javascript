/**
 * Created by zhanghao1 on 2018/4/27.
 */

var twoSum = function(nums, target) {
    var map = {};
    var ret = [0,0];
    for(var i = 0;i<nums.length;i++){
        var num = nums[i];
        var want = target - num;
        if(map[want] !== undefined){
            ret[0] = map[want];
            ret[1] = i;
            return ret;
        }
        else{
            map[num] = i;
        }
    }
    return ret;
};

(function(){
    var nums = [2, 7, 11, 15];
    var target = 9;
    console.log(twoSum(nums,target));
})();