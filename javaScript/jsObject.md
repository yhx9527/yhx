# Object方法汇总 

对象的访问器属性还能怎么弄，长见识了   

    var obj = {
      foo: 1,
      get bar() {
    return 2;
      },
      set bar(val){
    	this.foo = val;
      }
    }; 

### Object.create(原型对象，可选的实例的属性描述) #
-----

用于给一个实例对象新建一个原型   
这就是一种原型式继承
​    
​	
​	// 创建一个原型为null的空对象
​	o = Object.create(null);
​	
	o = {};
	// 以字面量方式创建的空对象就相当于:
	o = Object.create(Object.prototype);
	
	o = Object.create(Object.prototype, {
  	// foo会成为所创建对象的数据属性
  	foo: { 
​    	writable:true,
​    	configurable:true,
​    	value: "hello" 
  	},
  	// bar会成为所创建对象的访问器属性
  	bar: {
​    	configurable: false,
​    	get: function() { return 10 },
​    	set: function(value) {
​    	  console.log("Setting `o.bar` to", value);
​    	}
  	}
​	});

	// 创建一个以另一个空对象为原型,且拥有一个属性p的对象
	o = Object.create({}, { p: { value: 42 } })
	
	// 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
	o.p = 24
	o.p
	//42
	
	const person = {
	  isHuman: false,
	  printIntroduction: function () {
	console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
	  }
	};
	
	const me = Object.create(person);
	
	me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
	me.isHuman = true; // inherited properties can be overwritten
	
	me.printIntroduction();
	// expected output: "My name is Matthew. Am I human? true"

###Object.assign(目标对象，一到多个源对象)
------

用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。  
注意：   
继承属性(他的原型链的属性)和不可枚举属性是不能拷贝的   
如果目标对象中的属性具有相同的键，则属性将被源中的属性覆盖。后来的源的属性将类似地覆盖早先的属性。  
Object.assign 不会跳过那些值为 null 或 undefined 的源对象。  
Object.assign()拷贝的是属性值。假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值。  
可以拷贝 symbol 类型的属性  
异常会打断后续拷贝任务，比如目标对象和源对象的某个属性同名，但这个属性不可写，就会出现异常

    const object1 = {
      a: 1,
      b: 2,
      c: 3
    };
    
    const object2 = Object.assign({c: 4, d: 5}, object1);
    
    console.log(object2.c, object2.d);
    // expected output: 3 5
    
    let obj1 = { a: 0 , b: { c: 0}};
  	let obj2 = Object.assign({}, obj1);
​	//对于值类型而言是属于对象自己的
​	obj1.a = 1;
  	console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 0}}
  	console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}
​	//对于引用类型拷贝的只是引用而已，对象之间共享
​	obj2.b.c = 3;
  	console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
  	console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 3}}
​	//深拷贝
​	let obj3 = JSON.parse(JSON.stringify(obj1));

    var o1 = { a: 1 };
    var o2 = { [Symbol('foo')]: 2 };
    var obj = Object.assign({}, o1, o2);
    console.log(obj); // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
    Object.getOwnPropertySymbols(obj); // [Symbol(foo)]


​	
​    var v1 = "abc";
​    var v2 = true;
​    var v3 = 10;
​    var v4 = Symbol("foo")
​    
    var obj = Object.assign({}, v1, null, v2, undefined, v3, v4); 
    // 原始类型会被包装，null 和 undefined 会被忽略。
    // 注意，只有字符串的包装对象才可能有自身可枚举属性。
    console.log(obj); // { "0": "a", "1": "b", "2": "c" }

###Object.freeze(要被冻结的对象)
------

  Object.isFrozen(obj); 检查对象是否被冻结   
冻结指的是不能向这个对象添加新的属性，不能修改其已有属性的值，不能删除已有属性，以及不能修改该对象已有属性的可枚举性、可配置性、可写性。该方法返回传递的对象，而不是创建一个被冻结的副本。

注意：  
数据属性的值不可更改，访问器属性（有getter和setter）也同样（但由于是函数调用，给人的错觉是还是可以修改这个属性）。如果一个属性的值是个对象，则这个对象中的属性是可以修改的，除非它也是个冻结对象。数组作为一种对象，被冻结，其元素不能被修改。没有数组元素可以被添加或移除。

###Object.seal(要被密封的对象)
-----
  Object.isSealed(obj) 检查对象是否被密封  
  密封一个对象会让这个对象变的不能添加新属性，且所有已有属性会变的不可配置。属性不可配置的效果就是属性变的不可删除，以及一个数据属性不能被重新定义成为访问器属性，或者反之。  
  但属性的值仍然可以修改。  
  该方法返回被密封对象的引用。

###Object.preventExtensions(要被设为不可扩展的对象)
-------  
  Object.isExtensible(obj)  //判断对象是否可扩展  
让一个对象变的不可扩展，也就是永远不能再添加新的属性，一旦使其不可扩展，就无法再对象进行扩展。  
但可以删除已有属性或更改属性的值

注意：  
Object.preventExtensions()仅阻止添加自身的属性。但属性仍然可以添加到对象原型。

    // 一个不可扩展对象的原型是不可更改的,__proto__是个非标准魔法属性,可以更改一个对象的原型.
    var fixed = Object.preventExtensions({});
    fixed.__proto__ = { oh: "hai" }; // 抛出TypeError异常

### Object.defineProperty(要增加/修改属性的对象，属性名，描述符对象)
-------

直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。  
该方法允许精确添加或修改对象的属性。通过赋值操作添加的普通属性是可枚举的，能够在属性枚举期间呈现出来（for...in 或 Object.keys 方法）， 这些属性的值可以被改变，也可以被删除。这个方法允许修改默认的额外选项（或配置）。默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改的。

描述符:数据描述符和存取描述符，只能是其中的一个  

|| configurable | enumerable | value | writable | get | set
|---|--- | --- |---|---| ---|---|
|含义|可配置性，为true时则方可删除属性和修改描述符对象 | 可枚举性决定了是否可以在 for...in 循环和 Object.keys() 中被枚举| 属性对应的值，可为数值，对象，函数等，默认是undefined | 可写性，为true时，value才能被赋值运算符改变 | 读取属性时调用该函数，默认为undefined | 属性改变时调用该方法，默认为undefined
|注意事项|设为false后writable特性还可以被修改。|||当writable属性设置为false后就不能再重新被修改了|||
|数据描述符|有|有|有|有|||
|存取描述符|有|有|||有|有|


注意：  
如果对象中不存在指定的属性，Object.defineProperty()就创建这个属性。当描述符中省略某些字段时，这些字段将使用它们的默认值。拥有布尔值的字段的默认值都是false。value，get和set字段的默认值为undefined。一个没有get/set/value/writable定义的属性被称为“通用的”，并被“键入”为一个数据描述符.

    let obj={};
    Object.defineProperty(obj,'age',{});
    Object.getOwnPropertyDescriptor(obj,'age')
    //{value: undefined, writable: false, enumerable: false, configurable: false}
即age不可写，不可配置，不可枚举


    var o = {};
    
    o.a = 1;
    // 等同于 :
    Object.defineProperty(o, "a", {
      value : 1,
      writable : true,
      configurable : true,
      enumerable : true
    });


​    
​    // 另一方面，
​    Object.defineProperty(o, "a", { value : 1 });
​    // 等同于 :
​    Object.defineProperty(o, "a", {
​      value : 1,
​      writable : false,
​      configurable : false,
​      enumerable : false
​    });

### Object.defineProperties(要增加/修改属性的对象，属性描述符对象)
-----

用于直接在一个对象上定义新的属性或修改现有属性，并返回该对象。

    var obj = {};
    Object.defineProperties(obj, {
      'property1': {
    	value: true,
    	writable: true
      },
      'property2': {
    	value: 'Hello',
    	writable: false
      }
      // etc. etc.
    });

参考链接：  
1.[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)



