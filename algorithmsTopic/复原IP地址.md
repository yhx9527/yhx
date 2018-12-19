# 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
思路：
先考虑IP地址的特点:   

1. IP地址有四段，每段在[0,255]的区间内，自然是要一段一段的确定，当确定好三段，第四段自然就确定了。  
2. 然后我们考虑，当第四段得出之后，如果不合适怎么办，肯定是要回到第三段调整，然后在接着第四段。同理，第三段不合适，肯定要回到第二段调整，一直到回到第一段。这个过程就是一个回溯的过程。  
3. 接着看怎么调整，调整肯定要写在调用递归函数之后了，调整的过程就是增加右边界。  
4. 最后补充一下进入的时候，左右边界要都要移到新的一块区域。  

```
var restoreIpAddresses = function(s) {
​	var IPs=[];
​	var IP= [];
​	getIP(0,0,1);
​	function getIP(k,start,end){
​		var tempEnd = end;
​		var tempStart = start;
​		if(k===3){
​			var str=s.substring(start)
​			if(str){
​				if(parseInt(str) > 255 || (str.startsWith('0') && str.length > 1)) return;
​				IP.push(str);
​				IPs.push(IP.join('.'));
​				IP.pop();
​			}
​		}
	for(var i=k;i<3;i++){
		var str=s.substring(tempStart,tempEnd)
		if(str){
			if((tempEnd-tempStart)<=3 && parseInt(str) < 256 && (!str.startsWith('0') || str.length==1)){
				IP.push(str);
				getIP(k+1, tempStart+str.length,tempStart+str.length+1);
				IP.pop()
				i=k-1;
				tempEnd += 1; 
		}	
		}

	}
}
return IPs;
};
```

