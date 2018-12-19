### 找出两个字符串的最大公共子序列LCS

table二维表的`table[i][j]`表示s1字符串的前i个字母和s2字符串的前j个字母的最大公共子序列，

用一个二维数组来存储状态

```
function findLCS(s1,i,s2,j){
    let table=new Array(i+1);
    for(let idx=0;idx<i+1;idx++){
        let temp;
        if(idx===0){
            temp=new Array(j+1).fill(0)
        }else{
            temp=new Array(j+1);
            temp[0]=0;
        }
        table[idx] = temp;
    }
    console.log(table);
    for(let row=0;row<i;row++)
        for(let col=0;col<j;col++){
            if(s1.charAt(row)===s2.charAt(col)){
                table[row+1][col+1]=table[row][col]+1;
            }else{
                table[row+1][col+1]=Math.max(table[row][col+1],table[row+1][col])
            }
        }
    console.log(printLCS(table, s1, i,j))
    return table[i][j];
}
//打印出来，从后往前找
function printLCS(table, s1, m, n){
    let k = table[m][n];
    let lcs="";
    while(k){
        if(table[m][n]===table[m-1][n]){
            m--;
        }else if(table[m][n]===table[m][n-1]){
            n--;
        }else{
            lcs=s1[--m]+lcs;
            n--;
            k--;
        }
    }
    return lcs;
}
```

