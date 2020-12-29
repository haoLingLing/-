Object
  对象字面量 构造函数 理解对象
- 属性的类型
  使用内部特性来描述属性的特征，这些特性是由为Javscript 实现引擎的规范定义的。
  - 数据属性
    [[Configurable]] 是否可以通过delete删除并重新定义，在严格模式如果定义成false，再次修改的时候，会报错
    [[Enumerable]] 表示是否可以通过for-in 循环返回
    [[Writable]] 表示属性的值是否可以被修改
    [[Value]] 属性实际的值
    修改默认属性 Object.defineProperty(obj,name,{}) 三个参数 要给其添加属性的对象、属性的名称、一个描述符对象 
  - 访问器属性
     getter
     setter
     [[Get]] 获取函数，在读取时调用
     [[Set]] 设置函数，在写入属性时调用
  - 定义多个属性
     object.defineProperties(obj,{})
  - 读取属性的特性
     object.getOwnPropertyDescriptor() 可以取得指定属性的属性描述符
     ES8 2017 object.getOwnPropertyDescriptors() 获取对象上的多个属性 
  - 合并对象
     混入 mixin 把源对象所有的本地属性一起复制到目标对象上，目标对象通过混入源对象得到了增强
     Object.assign() 实际上对每个源对象执行的是浅复制，如果多个源对象都有相同的属性，则使用最后一个复制的值，此外，从源对象访问器属性取得到的值，比如函数，会作为一个静态值赋值给目标对象，但是不能在拷贝目标对象的setter和getter函数，只可以使用自己的
  - 对象标识及相等判定
     Object.is()
      ```js
         Object.is(true,1); // false ===
         Object.is({},{}); // false ===
         Object.is("2",2); // false  ===
         Object.is(+0,0); // true
         Object.is(-0,0); // false -0 === 0 ture
         Object.is(NaN,NaN) // true  isNaN(NaN) true
      ```
  - 增强对象语法
      - 属性值简写  代码压缩程序会在不用作用域间保留属性名，以防止找不到引用使用的是闭包
      - 可计算属性 如果抛出错误，之前的完成的计算是不可以回滚的
      - 简写方法名 与计算属性是可以相互兼容的
      ```js
         const nameKey ="name";
         let person ={
            [nameKey]:'Matt',
         }
         let Person ={
            [methodKey](name){
               console.log(`this name is ${name}`)
            }
         }
      ```
  - 对象解构 
         -  嵌套解构
         -  部分解构
  - 参数上下文匹配


Object
  对象字面量 构造函数 理解对象
- 属性的类型
  使用内部特性来描述属性的特征，这些特性是由为Javscript 实现引擎的规范定义的。
  - 数据属性
    [[Configurable]] 是否可以通过delete删除并重新定义，在严格模式如果定义成false，再次修改的时候，会报错
    [[Enumerable]] 表示是否可以通过for-in 循环返回
    [[Writable]] 表示属性的值是否可以被修改
    [[Value]] 属性实际的值
    修改默认属性 Object.defineProperty(obj,name,{}) 三个参数 要给其添加属性的对象、属性的名称、一个描述符对象 
  - 访问器属性
     getter
     setter
     [[Get]] 获取函数，在读取时调用
     [[Set]] 设置函数，在写入属性时调用
  - 定义多个属性
     object.defineProperties(obj,{})
  - 读取属性的特性
     object.getOwnPropertyDescriptor() 可以取得指定属性的属性描述符
     ES8 2017 object.getOwnPropertyDescriptors() 获取对象上的多个属性 
  - 合并对象
     混入 mixin 把源对象所有的本地属性一起复制到目标对象上，目标对象通过混入源对象得到了增强
     Object.assign() 实际上对每个源对象执行的是浅复制，如果多个源对象都有相同的属性，则使用最后一个复制的值，此外，从源对象访问器属性取得到的值，比如函数，会作为一个静态值赋值给目标对象，但是不能在拷贝目标对象的setter和getter函数，只可以使用自己的
  - 对象标识及相等判定
     Object.is()
      ```js
         Object.is(true,1); // false ===
         Object.is({},{}); // false ===
         Object.is("2",2); // false  ===
         Object.is(+0,0); // true
         Object.is(-0,0); // false -0 === 0 ture
         Object.is(NaN,NaN) // true  isNaN(NaN) true
      ```
  - 增强对象语法
      - 属性值简写  代码压缩程序会在不用作用域间保留属性名，以防止找不到引用使用的是闭包
      - 可计算属性 如果抛出错误，之前的完成的计算是不可以回滚的
      - 简写方法名 与计算属性是可以相互兼容的
      ```js
         const nameKey ="name";
         let person ={
            [nameKey]:'Matt',
         }
         let Person ={
            [methodKey](name){
               console.log(`this name is ${name}`)
            }
         }
      ```
  - 对象解构 
         -  嵌套解构
         -  部分解构
  - 参数上下文匹配

创建对象
   类的继承 基于原型的继承模式
   需要明白的知识点 
  在JS中，万物皆对象，方法是对象，方法的原型是对象，因此具有对象的共有特点，即对象具有属性_proto_[[prototype]] ,称之为隐式原型，一个对象的隐式原型指向该构造对象的构造函数的原型，保证了实例能够访问构造函数原型中定义的属性和方法

  Function
   除了和对象一样有_proto_ 属性之外，还有自己的特有属性-原型属性 prototype ,这个属性是一个指针，指向一个对象，这个对象的用途就是包含所有的实例共享的属性和方法，这个对象称之为原型对象，原型对象也有一个属性，constructor ，这个属性包含了一个指针，指向原构造函数

 - 工厂模式 抽象创建特定对象的过程
      优点：解决创建多个类似对象的问题， 缺点：没有解决对象标识问题，即新创建的对象是什么类型
   ```js
      function createPerson(name,age,job){
         let o = new Object();
         o.name = name;
         o.age = age;
         o.job = job;
         o.sayName = function(){
            console.log(this.name);
         }
         return o;
      }
      let person1 = let person1 = createPerson("Nicholas", 29, "Software Engineer");
      let person2 = createPerson("Greg", 27, "Doctor");

   ```   
 - 构造模式
   和工厂模式的区别：1 没有显示的创建对象 2 属性和方法直接赋值给this 3 没有return 
   缺点： 定义的方法会在每个实例上都会创建一遍，在javascript中函数是对象，因为每次定义函数时，都会初始化一个对象，如sayName 方法会被创建两次
   `console.log(person1.sayName == person2.sayName); // false `,但是因为其作用是一只的，因此，this对象可以把函数与对象的绑定推迟到运行时
   ```js
      function Person(name,age,job){
         this.name = name;
         this.age = age;
         this.job = job;
         this.sayName = function(){
            console.log(this.name)
         }
      }
      let person1 = let person1 = Person("Nicholas", 29, "Software Engineer");
      let person2 = Person("Greg", 27, "Doctor");
      person1.sayName(); // Nicholas 10 person2.sayName(); // Greg
      person2.sayName(); // Greg
   ```
   new 操作符，使用构造函数会执行如下
   - 在内存中创建一个新对象
   - 这个新对象内部的`[[Prototype]]` 特性被赋值为构造函数的prototype 属性
   - 构造函数内部的this 被赋值给这个新对象 即this指向新对象
   - 执行构造函数内部的代码
   - 如果构造函数返回非空对象，则返回该对象，否则，返回刚创建的对象

   构造函数也是函数
   与普通函数的区别：调用方式不同，任何函数只要使用new 操作符调用就是构造函数 在 1、没有通过new创建函数 2、没有apply、call 修改作用域，this指向的是window
 - 原型模式
   每一个函数都会创建一个prototype属性，这个属性是一个[对象]，包含由特定引用类型的实例共享属性和方法，这个[对象] 就是通过构造函数创建的对象的原型
   优点： 原型上定义的属性和方法都可以被对象实例共享 
   缺点： 弱化了向构造函数传递初始化参数的能力，会导致所有的实例默认都取得相同的属性值，最主要的问题是源自于它的共享特性，也就是包含引用值的使用，在某一个实例中进行了修改，其原型上的引用类型也是被修改的，不同的实例应该有属于自己的属性副本，也就是实际开发中不单独使用原型模式的原因
   ```js
   function Person(){}
   Person.prototype.name ="Nicholas";
   Person.prototype.age = 29;
   Person.prototype.job = "software Engineer";
   Person.prototype.sayName =  function(){
      console.log(this.name)
   } 

   let person1 = new Person();
   person1.sayName(); // "Nicholas"
   let person2 = new Person();
   person2.sayName(); // "Nicholas"
    
   console.log(person1.sayName == person2.sayName); // true
   ```
   - 理解原型
    ✨✨✨✨ 只要创建一个函数，会按照特定的规则为这个函数创建一个prototype属性 指向原型对象
    ✨✨✨✨ 默认情况下，所有的原型对象自动获得一个名为constructor 的属性，指向构造函数 如` Person.prototype.constructor` 指向`Person`
    在自定义构造函数时，原型对象默认只会获得constructor 属性，其他方法继承于Object，每次调用构造函数创建一个新实例，这个实例内部`[[Prototype]]` 被指向构造函数的原型对象 `person1.prototype == Person.protype` 可以通过 _proto_ 属性，访问对象的原型
      ```js
      console.log(Preson.prototype._proto_ === Object.prototype )  // true  new Object
      console.log(Preson.prototype._proto_.contructor == Object)  // true
      console.log(Preson.prototype._proto_._proto_ == null) // true
   
      // isPrototypeOf() 确定两个对象之间的关系
      console.log(Person.prototype.isPrototypeOf(person1)); // true 
      console.log(Person.prototype.isPrototypeOf(person2)); // true
      
      // Object.getPrototypeOf() 获取一个对象上的原型
      console.log(Object.getPrototypeOf(person1) == Person.prototype) // true

      // Object.setPrototypeOf() 设置对象的原型

      let biped = {
         numLegs: 2
      };
      let person = Object.create(biped);
      person.name = 'Matt';
      ```
      Object.setPrototypeOf() 可能造成性能下降，可以通过`Object.create()` 创建一个新对象，同时为其指定原型, 一般会将其设置为 `Object.create({})`

   - 原型层级 原型查找
    javasscript 隐式锁 如果实例的对象或者是继承的上面有方法，则会将原型链上的东西锁了起来，即 definedProperty(target,property,{writeable:false}) 不能进行写入，只能进行读取 1..age
    如果给对象实例上增加一个属性，这个属性就会[遮蔽(shadow)] 原型对象上的同名属性，虽然不会修改它，但是会屏蔽它 `hasOwnProperty()`
    是不是自己本身的属性或者是方法，如果是 true,如果不是则返回false

   - 原型和in操作
      判断是不是原型链上的属性 
      ```js
      function hasPrototypeProperty(object,name){
         return !object.hasOwnProperty(name) && (name in object)
      }
      ```
      for-in 循环 可以通过对象访问可以枚举的属性，包括实例属性和原型属性
      获取对象上(实例上)可以枚举的属性是 `Object.keys() Object.values() Object.entries() Object.getOwnPropertyNames() Object.getOwnPropertySymbols()`
      for-in 的枚举属性是不确定的，不同的浏览器，返回到结果是不一样的
 - 对象迭代
   对象新增加的属性 Symbol.interator() 属性 ` Object.values() Object.entries()`
   针对上述有一种原型模式有一种简单的写法
   ```js
    function Person() {}
    Person.prototype = {
      name: "Nicholas",
      age: 29,
      job: "Software Engineer",
      sayName() {
        console.log(this.name);
      }
    };

    // 可以进行中这样的修改
   // 恢复 constructor 属性
    Object.defineProperty(Person.prototype, "constructor", {
      enumerable: false,
      value: Person
    });
   ```
   Person.prototype被设置为等于一个通过对象字面量创建的新对象，最终的结果都是一样的，但是重写之后 constructor 属性就不指向Person了。
   在创建函数的时候，会默认创建它的prototype对象，并且同时将它的constructor 指向的构造函数，虽然instanceOf 可以可靠的返回值，但是constriucor 不能识别类型了
   一旦重新写的构造函数的原型，在写之前实例原型还是指向原来的构造函数的原型，保存的只是一个指针
   - 原声对象上的原型 提供了方便，所有继承原生对象的，都可以共享其属性以及方法，但是不推荐修改原生原型链上的方法，避免引起混乱
   




   

   



      


继承
 - 原型链
   基本思想： 通过原型继承多个引用类型的属性和方法， 构造函数都有一个原型对象，原型的constructor 指向构造函数，实例内部指针 [[prototype]] 指向构造函数的原型，如果构造函数的原型指向的是构造函数，这样实例和构造函数之间构成了一个原型链
   实例-> 构造函数 -> Function -> Object
   缺点： 属性共享，但是包含引用类型的时候，其中某一个实例导致发生变化，原型链上的属性和方法都会放生变化
         2: 子类型在实例化时不能给父类型的构造函数传参
   ```js
    function SuperType(){
       this.property = true;
    }
    SuperType.prototype.getSuperValue = function(){
       return  this.property ;
    }
    function SubType(){
       this.subproperty = true;
    }
    SubType.prototype = new SuperType();
    SuperType.prototype.getSuperValue = function(){
       return  this.subproperty ;
    }
    let instance = new SunType();
    console.log(instance.getSuperValue());  // true

    // 判断继承的方式 instanceOf()  isPrototypeOf() 
    instance instanceOf Object
    Object.prototype.isPrototypeOf(instance)

   ```
   
   
 - 盗用构造函数 伪对象 或者称之为经典继承
   目的：解决原型链继承引用值导致的问题 
   方法： 在子类构造函数中调用父类构造函数 使用 call apply
   优点： 在子类构造函数中可以在父类中传递参数
   缺点： 必须在构造函数中定义方法，因此函数不能重用，子类不能访问父类上的方法。因此所有的类型只能使用构造函数的模式,也就是不能访问SuperType.prototype 上的方法，似乎原型链断了似的
   ```js
      function SuperType(name='SuperType'){
         this.colors = ['red','blue','green'];
         this.name = name;
      }

      function SubType(){
         SuperType.call(this,'SubType'); // 相当于新的subtype 对象上运行了SuperType() 函数中的所有初始化代码，每个实例都有自己的属性
      }

       let instance1 = new SubType(); 
       instance1.colors.push("black"); 
       console.log(instance1.colors); // "red,blue,green,black"

       let instance2 = new SubType();
       console.log(instance2.colors); // "red,blue,green"
   ```
 - 组合继承 伪经典继承
   综合了原型链继承和经典继承，
   思路：使用原型链继承属性和方法，通过盗用函数继承实例属性，
   优点：可以继承超类的方法和属性，2: 子类型可以构造函数传递方法和属性，也可以使用instanceOf()  isPortotypeOf() 的方法
   缺点：存在效率问题，父类构造函数始终会被调用两次，本质上子类型最终是要包含超类对象所有实例属性，子类构造函数只要在执行时重写自己的原型就行了
   ```js
    function SuperType(name){
      this.name = name;
      this.colors = ["red", "blue", "green"];
    }  

    SuperType.prototype.sayName = function() {
      console.log(this.name);
    };

    function SubType(name, age){ // 继承属性 
      SuperType.call(this, name);  // 第二次调用 SuperType
      this.age = age;
    }
   // 继承方法 比经典模式增加了，将subtype.prototype = new SuperType() 即增加了SuperType原型链上的方法赋值给subtype.prototype
   SubType.prototype = new SuperType(); // 第一次调用 SuperType
   SubType.prototype.consturctor =  SubType;
   SubType.prototype.sayAge = function() {
      console.log(this.age);
   };

   // 第二次开始调用的地方
   let instance = new SubType("Nicholas",29);

   instance.colors.push("black");
   console.log(instance.colors);
   instance.sayName();
   instance.sayAge();

   let instance2 = new SubType("Greg", 27);
   console.log(instance2.colors);  // "red,blue,green"
   instance2.sayName();            // "Greg";
   instance2.sayAge();             // 27

   

   ```
   
 - 原型式继承 Object.create()
   缺点： 引用类型原型共享
   ```js
     function object(o){
        function F(){}
        F.prototype = o;
        return new F();
     }


   ```
 - 寄生式继承
   思路： 寄生式构造函数和工厂模式
   缺点：不能做到函数复用而低效率
   ```js
      function createAnother(original){
         let clone = Object.create(original);
         clone.sayHi = function(){
            console.log('hi');
         }
         return clone;
      }
   ```
 - 寄生式组合继承
   解决的问题： 组合继承，父类构造函数始终会被调用两次
   没有使用构造函数的方法，直接将superType的原型赋值给 subType
   优点： 只调用了一次
   所具备的功能，1 子类型可以向构造函数传递参数 2 子类型可以继承超类的方法和属性 3 父类的构造函数调用了一次 4 父类的 constructor 指向 构造函数
   ```js
   function inheritPrototype(subType,superType){
      let prototype = Object.create(superType.prototype); // 创建对象
      Object.setPrototype(subType,superType);
      prototype.constructor = subType; // 增强对象 修正constructor的指向
      subType.prototype = prototype; // 赋值对象
   }

   function SuperType(name){
      this.name = name;
      this.colors = ["red", "blue", "green"];
   }  

   SuperType.prototype.sayName = function() {
      console.log(this.name);
   };

   function SubType(name, age){ // 继承属性 
      SuperType.call(this, name);  // 第二次调用 SuperType
      this.age = age;
   }

   inheritPrototype(SubType,SuperType);
   SubType.prototype.sayAge = function() {
      console.log(this.age);
   };


   ```


类
 - 定义类 类声明和类表达式 注意 函数可以声明提升，类不可以声明提升 函数受作用域影响，类受块作用域限制
 - 类的构造函数
   constructor 关键字用于在类定义块内部创建类的构造函数，方法名constructor 会告诉解释器在使用new 操作符创建类的新实例时，应该调用这个函数
   1 实例化
   使用new操作符实例化Person 的操作等于使用new 调用其构造函数，不同之处，在于Javascript 解释器知道使用new和类意味着应该使用constructor 函数进行实例化
   - 在内存中创建一个新对象
   - 这个新对象内部的[[Prototype]] 指针被赋值为构造函数的 prototype 属性
   - 构造函数内部的 this 被赋值给这个新对象(即this 指向新对象)  其实在 constructor 指向自己this 如果强行修改 则会发生变化
   - 执行构造函数内部的代码 给新对象添加属性
   - 如果构造函数返回非空对象，则返回该对象，否则，返回刚创建的新对象

   在constructor 中使用super 才可以调用构造函数本身的属性和方法 也就是使用的是 SuperType.call(this);
   constructor 是inherit 的方法 
   constructor 中的属性和方法都是私有的，不会在原型上共享，除了constructor上的属性和方法，该类的属性和方法都是在原型链上的进行共享的
   即 添加到this的所有内容都会存在与不同的实例上
   在类块中定义的所有的内容都会定义在类的原型上

   super 
    - 只能在派生类构造函数和静态方法中使用
    - 不能单独引用super 关键字，要么调用它的构造函数，要么用它引用静态方法
    - 调用super() 会调用父类构造函数，并将返回的实例赋值给this
    - super() 的行为如同调用构造函数，如果需要给父类构造函数传参，则需要手动添加
    - 如果没有定义类构造函数，在实例化派生类时会调用super() 而且会传入所有传给派生类的参数
    - 有constructor 就必须有super

   ```js
   class Person{
      constructor(name,age){
        this.name = name;
        this.age = age;
        this.sayName = () => console.log(this.name);
      }

       sayAge(){
         console.log(this.age)
       } 
    }


    class Child extends Person{
      constructor(name,age,school){
        super(name,age);
        this.school = school;
        this.sayhi =()=> console.log('hi');
      }

      sayshool(){
        console.log(this.school)
      }
    }

    const chil1 = new Child('小森森',3,'协和'); // 会得到所有父类或者是超类 constructor 中的所有的属性和方法 在constructor中需要使用this来指定这个属性和方法 构造函数的方式创建对象
    console.log(chil1);
    console.log(chil1.sayName());
    console.log(chil1.sayAge());
    console.log(chil1.sayhi());
    console.log(chil1.sayshool());
   ```
   


