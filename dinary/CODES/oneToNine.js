function oneToNine(){
    var arr=[];
    var nums=[1,2,3,4,5,6,7,8,9];
    dfs(0);
    function dfs(start){
        if(start===nums.length-1){
            var sum = nums[0]+nums[1]/nums[2]+
                (nums[3]*100+nums[4]*10+nums[5])/(nums[6]*100+nums[7]*10+nums[8]);
            if(sum===10){
                arr.push(`${nums[0]}+${nums[1]}/${nums[2]}+${nums[3]}${nums[4]}${nums[5]}/${nums[6]}${nums[7]}${nums[8]}`)
                return;
            }
            return;
        }
        for(var i=start;i<nums.length;i++){
            [nums[start],nums[i]] = [nums[i],nums[start]] 
            dfs(start+1);
            [nums[start],nums[i]] = [nums[i],nums[start]]
        }
    }
    return arr;
}
