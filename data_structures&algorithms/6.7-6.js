// 循环链表解决约瑟夫环问题

/*传说在公元 1 世纪的犹太战争中，犹太历史学家弗拉维奥·约瑟夫斯和他的
 40 个同胞被罗马士兵包围。犹太士兵决定宁可自杀也不做俘虏，于是商量出了一个
 自杀方案。他们围成一个圈，从一个人开始，数到第三个人时将第三个人杀死，
 然后再数，直到杀光所有人。约瑟夫和另外一个人决定不参加这个疯狂的游戏，
 他们快速地计算出了两个位置，站在那里得以幸存。写一段程序将 n 个人围成一圈，
 并且第 m 个人会被杀掉，计算一圈人中哪两个人最后会存活。
 使用循环链表解决该问题。*/


const CLList = require('./circularLinkedList')

var persons = new CLList()
var start = 0
while(start < 30){
    ++start
    persons.insert(start, start-1)
}
persons.display()

function kill(persons, m) {
    let temp
    while(1){
        temp = persons.show()
        if(persons.advance(m)){  //找出每次数的第m个人，如果已经数了一圈了看，返回true，跳过head头指针    
            persons.advance(1)     
        }
        if(temp.next.el === persons.show().el){  //如果所剩的人少于了m个人，则跳出循环，杀戮结束
            break;
        } else {
             if(persons.show().el !== 'head'){    //在避免不删除头结点的情况下，杀掉第m个人，及当前链表所在的节点
                persons.remove(persons.show().el) 
            }
        }   
    }
    persons.display()    //打印出剩下的人
}
kill(persons, 9)