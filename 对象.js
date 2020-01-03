//原始代码
function startAnimation(){
    console.log('start');
}
function stopAnimation(){
    console.log('stop');
}

//面向对象代码
var Anim = function(){}; //创建一个对象并初始化为一个函数
Anim.prototype.start = function(){
    console.log('start');
};
Anim.prototype.stop = function(){
    console.log('stop')
};
var animation = new Anim();//创建对象实例
animation.start(); //调用原型上的start方法
animation.stop(); //调用原型上的stop方法

//面向对象代码的链式调用
var Anim = function(){};
Anim.prototype = {
  start: function(){
      console.log('start');
  },
  stop: function(){
      console.log('stop');
  }
};

//所有函数都是Function的实例，代码改进
Function.prototype.method = function(name,fn){
    this.prototype[name] = fn; //name属性的值是一个函数
};
var Anim = function(){};//初始化一个函数实例
Anim.method('start',function(){
    console.log('start');
});
Anim.method('stop',function(){
    console.log('stop')
});

//链式调用
Function.prototype.method = function(name,fn){
    this.prototype[name] = fn;
    return this; //实现链式调用
};
var Anim = function(){};
Anim.method('start',function(){
    console.log('start')
}).method('stop',function(){
    console.log('stop')
});

