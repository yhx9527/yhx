const CLList = require('./circularLinkedList')

var persons = new CLList()
var start = 0
while(start < 4){
    ++start
    persons.insert(start, start-1)
}
persons.display()

function kill(persons, m) {
    let temp
    let i = 0;
    do{
        temp = persons.show()
        if(persons.advance(m)){
            console.log(persons.show().el)
            persons.advance(1)
        }
        if(persons.show().el !== 'head'){
            persons.remove(persons.show().el) 
        }
    }while(temp.next.el !== persons.show().el)
    persons.display()
}
kill(persons, 3)
