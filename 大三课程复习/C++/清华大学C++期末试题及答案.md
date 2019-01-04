**清华大学计算机系C++期末考试题及答案**

### 搬运

### 原文链接 [**清华大学计算机系C++期末考试题及答案**](https://blog.csdn.net/hyg0811/article/details/9386203)



**一、 填空题（25小题，共50分） （以下每小题1分，共10分）**
　1． 在C++中，函数的参数有两种传递方式，它们是值传递和 地址或指针或引用传递 。
　2． 当一个成员函数被调用时，该成员函数的 this指针 指向调用它的对象。
　3． 在基类和派生类中，派生类可以定义其基类中不具备的数据和操作。对两个有相同名字的数据成员进行访问时，如果没有 作用域分隔符限定时 ，对此数据成员的访问将出现歧义。
　4． 拷贝构造函数使用 引用 作为参数初始化创建中的对象。
　5． 在公有继承的情况下，基类数据成员在派生类中的访问权限 保持不变 。
　6． 描述命题"A小于B或小于C"的表达式为 A<B||A<C　。
　7． 用new申请某一个类的动态对象数组时，在该类中必须能够匹配到 没有形参的或缺省参数 构造函数，否则应用程序会产生一个编译错误。
　8． 静态数据成员在类外进行初始化，且静态数据成员的一个拷贝被类的所有对象 共享 。
　9． 为了避免可能出现的歧义，C++对if…else语句配对规则规定为：else总是与 与最近的if 配对。
　10． 设"int a=3,b=4,c=5;"，表达式"（a+b）>c&&b==c"的值是 0 。
**（以下每小题2分，共20分）**
　11． 面向对象的程序设计有四大特征，它们是抽象、封装、 继承 、 多态 。
　12． 在Visual C++中，定义重载函数时，应至少使重载函数的参数个数或参数类型 不同 ；在基类和派生类中，成员函数的覆盖是指派生类成员函数与在基类被覆盖的成员函数名、参数个数、参数类型和返回值类型均相同 。
　13． 构造函数与析构函数除功能不同外，在定义形式上，它们的区别还包括构造函数名与类名相同，而析构函数名是在类名前加一个~、 析构函数没有参数 、 析构函数可以定义为虚函数 。
　14． 动态联编要满足两个条件，它们是 被调用的成员函数是虚函数 、 用指针或引用调用虚函数 。
　15． 在C++类中，有一种不能定义对象的类，这样的类只能被继承，称之为 抽象类 ，定义该类至少具有一个 纯虚函数 。
　16． 在C++类中，const关键字可以修饰对象和成员函数，const对象不能 被修改 ，const成员函数不能 修改类数据成员 。
　17． 举出C++中两种用户自定义的数据类型： 类 、 枚举 。
　18． C++中没有字符串类型，字符串是通过 字符数组 来表示的，每一个字符串都有一个结尾字符 /0 。
　19． C++中没有输入输出语句，输入输出是通过 输入输出库 实现的， 写出一条打印整型变量n的输出语句：cout<<n; 
　20． 举出C++中两种代码复用的方式： 继承 、 复用 。

**（以下每小题4分，共20分）**
　21． 下面程序的运行结果是　3　。
　#include <stdio.h>
　void main()
　{
　　char a='a',b='j';
　　float x;
　　x=(b-a)/('F'-'A');
　　printf("%d/n",(int)(3.14*x));
　}

　22． 下面程序的运行结果是2 5 8 11 14。
　#include "iostream.h" 
　void main( ) 
　{
　　int i=1;

　　while (i<=15){
　　　i++;
　　　if (i%3!=2) continue; 
　　　else cout <<"i="<<i<<endl;
　　}
　}

　23． 下面程序的运行结果是________。
　#include "iostream.h" 
　class test
　{ 
　private:
　　int num; 
　　float fl; 
　public:
　　test( ); 
　　int getint( ){return num;} 
　　float getfloat( ){return fl;} 
　　~test( ); 
　};

　test::test( ) 
　{
　　cout << "Initalizing default" << endl; 
　　num=0;fl=0.0; 
　}

　test::~test( )
　{
　　cout << "Desdtructor is active" << endl;
　}

　void main( ) 
　{
　　test array[2]; 
　　cout << array[1].getint( )<< " " << array[1].getfloat( ) <<endl; 
　}

　Initalizing default
　Initalizing default
　0 0
　Desdtructor is active
　Desdtructor is active

　24． 下面程序的运行结果是________。
　#include <iostream.h>
　class A
　{
　public:
　　A(){cout<<"A::A() called./n";}
　　virtual ~A(){cout<<"A::~A() called./n";}
　};

　class B:public A
　{
　public:
　　B(int i){
　　cout<<"B::B() called./n";
　　buf=new char[i];}
　　virtual ~B()
　　{
　　　delete []buf;
　　　cout<<"B::~B() called./n";
　　}
　private:
　　char *buf;
　};

　void fun(A *a)
　{
　　delete a;
　}

　void main()
　{
　　A *a=new B(15);
　　fun(a);
　}
　A::A() called.
　B::B() called.
　B::~B() called.
　A::~A() called.

　25． 下面程序的运行结果是________。
　#include <stdio.h>
　int a[ ]={1,3,5,7,9};
　int *p[ ]={a,a+1,a+2,a+3,a+4};
　void main( )
　{
　　printf("%d/t%d/t%d/n",a[4],*(a+2),*p[1]);
　　printf("%d/t%d/t%d/n",**(p+1)+a[2],*(p+4)-*(p+0),*(a+3)%a[4]);
　}
　9 5 3
　8 4 7 
 
二、 问答题（每小题5分，共20分）

　1． 若程序员没有定义拷贝构造函数，则编译器自动生成一个缺省的拷贝构造函数，它可能会产生什么问题？
解答要点：当对象含有指针数据成员，并用它初始化同类型的另一个对象时，缺省的拷贝构造函数只能将该对象的数据成员复制给另一个对象，而不能将该对象中指针所指向的内存单元也复制过去。这样，就可能出现同一内存单元释放两次，导致程序运行出错。

　2． 简述成员函数、全局函数和友元函数的差别。
　　解答要点：以下几点必须说清楚：
　　成员函数是在类内部定义的，作用域在类的内部，成员函数可以访问类的数据成员（公有、保护和私有数据成员），可以调用该类的其它成员函数（公有、保护和私有成员函数），可以调用全局函数。如果友元函数是另一个类的公有成员函数，则该类的成员函数也只能通过那个类的对象调用，不能调用那个类的保护和私有成员函数。非本类成员函数（其它类成员函数或全局函数）可以通过该类的对象访问该类的公有数据成员和调用该类的的公有成员函数。
　　不是在类中定义的成员函数都是全局函数。
　　如果某一个函数（全局函数或类的成员函数）定义为另一个类的友元函数，需要在那个类中用friend关键字声明，友元函数并不是类的成员，它的定义自然是在那个类的外面。

　3． 简述结构化的程序设计、面向对象的程序设计的基本思想。
　　解答要点：结构化的程序设计将数据和对数据的操作分离，程序是由一个个的函数组成的，面向对象的程序设计将数据和操作封装在一起，程序是由一个个对象组成的，对象之间通过接口进行通信，它能够较好地支持程序代码的复用。

　4． 结构struct和类class有什么异同？
　　解答要点：struct和class都可以定义类，但是缺省访问权限说明时，struct的成员是公有的，而class的成员是私有的。在C++中，struct可被class代替。

三、找出下面程序（或程序段）中的语法错误，并予以纠正（每小题4分，共8分）

（1）程序功能是倒序输出各给定的字符串。
　#include <stdio.h> 
　void main()
　{
　　char str[5][ ]={"First","Second","Third","Forth","Fifth"};
　　char *cp[ ]={str[4],str[3],str[2],str[1],str[0]};
　　int i;

　　while(i<=5)
　　{
　　　printf("%c ",*(cp+i));
　　　i++;
　　}
　}
　① "char str[5][ ]={"First","Second","Third","Forth","Fifth"};"应为
　　"char str[5][10 ]={"First","Second","Third","Forth","Fifth"};"
　② "while(i<=5)"应为"while(i<5)"
　③ "printf("%c ",*(cp+i));"应为"printf("%s",*(cp+i));"
　④ "int i;"应为"int i=0;"

（2）程序功能是将各个平方根值放入数组中。
　#include <stdio.h>
　void main()
　{
　　int max,a,i;
　　scanf("%d%d",max,a);
　　double x[max];

　　for (i=0;i<max;i++)
　　　x[i]=sqrt(a*i);
　}
　① 增加"#include <math.h>"
　② "scanf("%d%d",max,a);"应为"scanf("%d%d",&max,&a);"
　③ "double x[max];"改为：
　"double *x=new double[max];"
　　…
　"delete []x;"

四、（8分）下列shape类是一个表示形状的抽象类，area( )为求图形面积的函数，total( )则是一个通用的用以求不同形状的图形面积总和的函数。请从shape类派生三角形类(triangle)、矩形类（rectangle），并给出具体的求面积函数
　class shape{ 
　　 public: 
　　 virtual float area( )=0;
　　 }; 
　　 
　float total(shape *s[ ],int n) 
　　 { 
　　 float sum=0.0; 
　　 for(int i=0;i<n;i++) 
　　 sum+=s[i]->area( ); 
　　 return sum; 
　　}
　class Triangle:public Shape
　{
　public:
　　Triangle(double h,double w){H=h;W=w;}
　　double Area() const{return H*W*0.5;}
　private:
　　double H,W;
　};

　class Rectangle:public Shape
　{
　public:
　　Rectangle(double h,double w){H=h;W=w;}
　　double Area()const{return H*W;}
　private:
　　double H,W;
　}; 
 


五、（6分）完成顺序查找函数f_seq( )。其过程是：从表头开始，根据给定的模式，逐项与表中元素比较。如果找到所需元素，则查找成功，并打印出它在表中的顺序号。如果查找整个表仍未找到所需对象，则查找失败
　#include <stdio.h>
　void f_seq(char *list[],char *object,int len)
　//list 指针数组，指向字符串
　//object 模式串
　//len 表的长度
　{
　　char **p;
　　int strcmp(char *s,char *t); 
　　p=list;
　　while (_____①______) //p<list+len
　　　if (strcmp(*p,object)==0)
　　　　break;
　　　else ______②_______; //p++
　　　if (p<list+len)
　　　　printf( "Success! **% d/n",p-list);
　　　else printf("Unsuccess!/n");
　}
　int strcmp(char *s,char *t)
　{
　　for (;*s==*t; s++,t++)
　　　if (*s=='/0')
　　　　return(0);
　　　　return(_____③______); //s-t或*s-*t或1
　}

六、（8分）完成使链表逆置函数reverse，若有链表：

链表结点的结构如下：

　struct node

　{

　　int num;

　　struct node *next;

　}

　struct node* reverse(struct node *head)

　//head 链表头结点

　{

　　struct node *p,*temp1,*temp2; 

　　if(head==NULL____①____) return head; //

||head->next==NULL

　　p=head->next;head->next=NULL;

　　while(____②____) //

p!=NULL或p

　　{

　　　temp1=head;

　　　____③____; //

head=p;

　　　temp2=p;

　　　p=p->next;

　　　____④____; //

temp2->next=temp1;或head->next=temp1;

　　　}//Match while statenment

　　　return head; //返回逆置后的链表的头结点

　}