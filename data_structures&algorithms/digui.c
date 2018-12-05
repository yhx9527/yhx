#define N 101
f(int m,int n,int *a,int *k){
    int i,j;
    for(i=m;i>=n;i--){
        a[n] = i;
        if(n>1)f(i-1,n-1,a,k);
        else{for(j=a[0];j>0;j--)printf("%4d",a[j]);(*k)++;printf("\n");}
    }
}
main(){
    int m,n,k=0,a[N];
    printf("m,n=?");scanf("%d,%d",&m,&n);
    if(n&&m>=n){a[0]=n;f(m,n,a,&k);}else if(!n)k=1;
    printf("comb(%d,%d)=%d\n", m,n,k);
}