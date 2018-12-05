var threeSum = function(nums) {
    var threes=[],i,next,three=[],preIndex;
    if(nums.length <3) return [];
    nums.sort(function(a1,a2){
        return a1-a2;
    })
    getSum(3,0,0)
    function getSum(k,minus,next){  //k为几元组,minus剩下的和应为多少,next为下一个数从哪里开始找
        var j = next;
        if(k===1){
            var lastNum = nums.slice(next).indexOf(minus);
            if(lastNum > -1){
                preIndex = lastNum;
                three.push(minus);
                threes.push([...three]);
                three.pop();
            }
            return;
        }
        for(;k>1;k--){
            if(j<nums.length-1){
                if(j>next && nums[j-1]===nums[j]){
                    j++;
                }else{
                   three.push(nums[j]);
                    getSum(k-1,minus-nums[j],j+1);
                    three.pop();
                    j++; 
                }
                k++;
            }
            
        }   
    }
    return threes;
};