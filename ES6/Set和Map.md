# Set和Map

### Set
Set集合中没有重复的值  

- 初始化set：const s= new Set0(传入一个数组 | 具有iterable接口的数据结构 | 空)
- 长度: s.size
- 增：s.add(something) //返回添加后的set
- 删：s.delete(someting) //返回布尔 ,s.clear() //清空，无返回值
- 查：s.has(something) //返回布尔 
- 遍历：s.keys(),s.values(),s.entries(),s.forEach((item,index,set)=>{}) //类似函数
  使用：for(let item of s.keys())
- 去除数组重复成员: [...new Set(array)],Array.from(new Set(array))
- 注意事项: set中NaN是等于自身的，5和‘5’是不等的（即===关系）

### WeakSet

WeakSet集合也是没有重复的成员，同时成员必须是对象；  
另一方面成员对象都是弱引用，对于没有被其他引用的weakset成员，垃圾回收机制不会管是否对象还在weakset中，照样回收掉。故weakset适合临时存放对象（如DOM节点），只要成员在外部的引用为0，自然会被回收。  
再一方面，weakSet是不可遍历的，因为里面的成员对象可能随时会不见
const s=new WeakSet([[1,2],[3,4]])

- 增：s.add({})
- 删: s.delete({})
- 查：s.has({})