1.map存储出现过的数字的位置。

2.特别要小心!!map[want]这样的操作，因为map[want]值为0的时会出错。应该用map[want] !== undefined