//匿名函数
(function(){
    var a = 1;
    var b = 2;
    console.log(a + b);
})();

//带参数的匿名函数
(function(a,b){
    console.log(a + b)
})(1,2);

//闭包，访问函数内部的局部变量
var ba;
(function(){
    var a = 1;
    var b = 2;
    ba = function(){
        consol.elog(a+b)
    }
})();
ba();