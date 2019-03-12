//1.剩余参数用法
// ...theArgs与arguments最大的区别是：arguments不是数组实例，在上面不可以直接使用数组方法；而theArgs直接可以使用数组方法
function multiply(multiplier,...theArgs){
    return theArgs.map(function(ele){
        return multiplier*ele
    })
}

multiply(2,1,2,3) // 2=>multiplier, theArgs=>[1,2,3]
var result=multiply(2,1,2,3) // result=>[2,4,6]

//2.展开语法
//2.1 等同于slice,可以用来浅拷贝

var arr = [1,2,1,7]
var copyArr=[...arr]
copyArr.push(4) //[1,2,1,7,4] 对arr没有影响

//2.2 相当于apply用法：把数组传入函数参数中
var args= [1,2,3]
function f(a,b,c){
}
f(...args) // 等同于f.apply(null,args)

//2.3 concat用法
var arr1=[1,2]
var arr2=[3,4]
var arr3=[...arr1,...arr2] //等同于arr1.concat(arr2)

//2.4略等同于unshift
var arr1=[1,2]
var arr2=[3,4]
var arr3=[...arr2,...arr1] //Array.prototype.unshift.apply(arr1,arr2) 结果一致，但是这种方式改变了原来arr1

//2.5 浅拷贝和合并字面量对象
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// 克隆后的对象: { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// 合并后的对象: { foo: "baz", x: 42, y: 13 }


