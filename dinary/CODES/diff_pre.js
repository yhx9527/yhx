//比较公共前缀
function diff_commonPrefix(text1, text2) {  
  // Quick check for common null cases.  
  //text1或text2不存在或者第一个字符就不一样直接退出
  if (!text1 || !text2 || text1.charCodeAt(0) !== text2.charCodeAt(0)) {  
    return 0;  
  }  
  // Binary search. 
  //基本 
  var pointermin = 0;  
  var pointermax = Math.min(text1.length, text2.length);  
  var pointermid = pointermax;  
  var pointerstart = 0;  
  while (pointermin < pointermid) {  
    if (text1.substring(pointerstart, pointermid) ==  
        text2.substring(pointerstart, pointermid)) {  
      pointermin = pointermid;  
      pointerstart = pointermin;  
    } else {  
      pointermax = pointermid;  
    }  
    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);  
  }  
  return pointermid;  
}  