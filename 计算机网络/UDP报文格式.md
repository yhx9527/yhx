# UDP数据段

UDP数据段格式比较简单，如下：

[![wKiom1mqrwOzPrgPAACKAwaeR5U508.jpg](https://s1.51cto.com/wyfs02/M02/05/BA/wKiom1mqrwOzPrgPAACKAwaeR5U508.jpg)](https://s1.51cto.com/wyfs02/M02/05/BA/wKiom1mqrwOzPrgPAACKAwaeR5U508.jpg)

UDP数据报由首部和数据两部分组成，其中首部只有8B（字节）。

1、源端口号（Source Port）

长度为16位，指明发送数据的进程。

2、目的端口号（Destination Port）

长度为16位，指明目的主机接收数据的进程。

3、长度

长度为16位，该字段值为报头和数据两部分的总字节数。

4、检验和（Checksum）

长度为16位，UDP检验和作用于UDP报头和UDP数据的所有位。由发送端计算和存储，由接收端校验。

5、数据



### 参考链接

[IP包、TCP报文、UDP数据段格式的汇总](http://blog.51cto.com/mmanong/1962353)