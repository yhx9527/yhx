#define N 100
#define SWAP(x,y,t)t=x;x=y;y=t
f(int i, int n,char *a,long *k){
    int j,temp;
    if(i==n){puts(a);(*k)++;}
    else
        for(j=i;j<=n;j++)
            {SWAP(a[i],a[j],temp);f(i+1,n,a,k);SWAP(a[i],a[j],temp);}
}
main()
{
    int n;char a[N];long k=0;printf("a[]=?");gets(a);n=strlen(a);
    if(n){f(0,n-1,a,&k);printf("perm(\"%s\")=%1d\n",a,k);}
}