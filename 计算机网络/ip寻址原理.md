# IP寻址原理

主机A和主机B先根据IP地址和子网掩码相与获取网段信息

##### 两者在同一网段（IP地址和子网掩码相与）

​	在主机A在自己的ARP缓存中查找是否有主机B 的mac地址，如果能找到就直接做数据链路层封装并且通过网卡将封装好的以太网帧发送有物理线路上去：如果arp缓存中没有主机B的的mac地址，主机A将启动arp协议通过在本地网络上的arp广播来查询主机B的mac地址，获得主机B的mac地址厚写入arp缓存表，进行数据链路层的封装，发送数据。

##### 两者在不同网段

​	于是主机A将知道应该将次数据包发送给自己的缺省网关，即路由器的本地接口。主机A在自己的ARP缓存中查找是否有缺省网关的MAC地址，如果能够找到就直接做数据链路层封装并通过网卡 将封装好的以太网数据帧发送到物理线路上去，如果arp缓存表中没有缺省网关的Mac地址，主机A将启动arp协议通过在本地网络上的arp广播来查询缺省网关的mac地址，获得缺省网关的mac地址后写入arp缓存表，进行数据链路层的封装，发送数据。数据帧到达路由器的接受接口后首先解封装，变成ip数据包，对ip 包进行处理，根据目的Ip地址查找路由表，决定转发接口后做适应转发接口数据链路层协议帧的封装，并且发送到下一跳路由器，次过程继续直至到达目的的网络与目的主机。

### 参考链接

1.[1.0 ip寻址的原理及arp协议、rarp协议的原理](https://github.com/zhangwei22/zhangwei.blogs/wiki/1.0-ip%E5%AF%BB%E5%9D%80%E7%9A%84%E5%8E%9F%E7%90%86%E5%8F%8Aarp%E5%8D%8F%E8%AE%AE%E3%80%81rarp%E5%8D%8F%E8%AE%AE%E7%9A%84%E5%8E%9F%E7%90%86)

