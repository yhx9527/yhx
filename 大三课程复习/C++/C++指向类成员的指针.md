# c++指向类成员的指针

### 搬运

### 原文链接 [C++指向类成员(数据、函数)的指针](https://blog.csdn.net/u013521296/article/details/77431105)



指向【类】的成员的指针包含两种：

★指向【类】的数据成员的指针
★指向【类】的成员函数的指针 
注意：指向的是【类的成员】，和类发生关系 
★★★指向非静态公有数据成员的指针，在定义时必须和类相关联，在使用时必须和对象相关联
1、指向类的数据成员的指针
1.1 定义+初始化的格式： 
数据类型 类型:: *指针名 = &类型:: 非静态公有数据成员 

1.2通过数据成员指针访问数据成员的格式：

对象.*数据成员指针
对象指针—>*数据成员指针

```
    class   Stu
        {
        public:
                string name;
                int age;
        } 
        int   Stu ::  *pAge  =&Stu::age;//★定义一个指向类的Stu数据成员age的指针
        string Stu :: *pName=&Stu::name;//★定义有个指向Stu数据成员name的指针
```


例1、代码及运行结果


例1、代码及运行结果

```
#include<iostream>
#include <string>
using namespace std;
class Stu
{
public:
​    string name;
​    int   age;
public:
​    Stu(string str="NULL",int ag=0):name(str),age(ag)//构造器初始化
​    {
​    }
​    void Show()
​    {
​        cout<<name<<"   "<<age<<endl       ;
​    }
};
int main()
{
​       Stu s1;//使用默认参数创建对象
​       Stu s2("LaoWang",66);//传参创建对象




//指向类的非静态成员的指针，在定义时必须和类关联，在使用时必须和对相关联的 
```


2、指向类的成员函数的指针
//定义+初始化的格式： 
数据类型 (类型::*p)(参数列表)=& 类名::非静态函数成员 
void (Stu :: *P)() =&Stu::Show; //定义了一个指向Stu类的成员函数的 
Show()的指针

通过成员函数指针访问成员函数的格式：

(对象.*成员函数指针)（）
(对象指针->*成员函数指针)（）

```
    class   Stu
{
public:
    string name;
    int age;
    void Show()
    {
        cout<<name<<"  "<<age<<endl; 
    }
} 
```

例2、代码及运行结果

例2、代码及运行结果

```
#include<iostream>
#include <string>
using namespace std;
class Stu
{
public:
​    string name;
​    int age;
public:
​    Stu(string str="wang",int num=18):name(str),age(num)
​    {

​```
}
void Show()
{
    cout<<name<<"   "<<age<<endl       ;
}
​```

};

int main()
{
​    Stu s1("Google",1);
​    Stu * p = new Stu("ali",14);//在堆内创建一个对象
​    void (Stu::*pf)() =&Stu::Show;//定义时和类关联
​    (s1.*pf)();//(对象.*成员函数指针)（）
​    (p->*pf)();//(对象指针->*成员函数指针)（）
​    return 0;
}
```

运行结果如下图： 

3、练习：函数指针数组

```
#include<iostream>
using namespace std;
class Widget
{
private:
    void a() {cout<<"void a()"<<endl;}
    void b() {cout<<"void b()"<<endl;}
    void c() {cout<<"void c()"<<endl;}
    void d() {cout<<"vodi d()"<<endl;}
    void (Widget::*pa[4])(); //定义了一个函数指针指针数组
public:
    void select(int idx)
    {
        /* *(pa[idx])();*/
        (this->*pa[idx])(); //数组记录的只是偏移量
    }
    Widget() //构造器
    {    //初始化 
        pa[0]=&Widget::a;
        pa[1]=&Widget::b;
        pa[2]=&Widget::c;
        pa[3]=&Widget::d;
    }
};
int main()
{


Widget A;
A.select(0);
A.select(1);
A.select(2);
A.select(3);
return 0;

}
```

运行结果如下； 

---------------------
