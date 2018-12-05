//该方法每次递归都开了两个空间，空间复杂度不好，同时取基数使用splice，时间复杂度不好
function quicksort(arr) {
    if(arr.length <= 1){return arr}
    let baseIndex = Math.floor(arr.length/2)
    let base = arr.splice(baseIndex,1)[0]
    let left=[]
    let right=[]
    for(let temp of arr){
        if(temp > base){
            right.push(temp)
        }else{
            left.push(temp)
        }
    }
    return quicksort(left).concat(base, quicksort(right))
}

//
function quick(array, left, right){
    let index;
    if(array.length>1){
        index=partition(array,left,right)
        if(left<index-1){
            quick(array,left,index-1)
        }
        if(index < right){
            quick(array,index,right)
        }
    }
    return array
}
function quickSort(array){
    return quick(array, 0, array.length-1)
}
function partition(array, left, right){
    const pivot = Math.floor((right+left)/2)
    let i=left;
    let j=right;
    while(i<=j){
        while(array[i] < array[pivot]){
            i++
        }
        while(array[j] > array[pivot]){
            j--
        }
        if(i<=j){
            swap(array,i,j)
            i++;
            j--;
        }
    }
    return i;
}
function swap(array,i,j){
    [array[i],array[j]] = [array[j],array[i]]
}