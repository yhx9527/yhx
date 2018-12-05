var result=[]
function digui(arr, pos){
    if (pos === arr.length-1) {
        result.push(arr.join(''))
    }else{
        for(var i=pos;i<arr.length;i++){
            swap(arr[i], arr[pos])
            digui(arr,pos+1)
        }
    }
}
function swap(a, b){
    var temp=a;
    a=b;
    b=temp;
}