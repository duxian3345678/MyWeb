//逐行解析jQuery代码
(function(){
    var a = 10
    function abc(){
        alert(a)
    }
    window.abc = abc
})();//匿名函数自执行(匿名函数自执行里面的所有东西都是一个局部的。防止和其他的代码冲突。)

abc()