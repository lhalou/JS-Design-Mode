
//原始代码，因为JS对象没有私有属性，所以，以下代码所有的属性和变量任何地方都可以操作及修改。
var Book = function(){};
Book.prototype.setTitle = function(title){
    if(!this.checkTitle(title)) return;
    this.title = title;
};
Book.prototype.checkTitle = function(title){
    return title.length > 2 && title.length < 20;
};
Book.prototype.display = function(){
    console.log('Book title is' + this.title);
};
var myBook = new Book();
myBook.setTitle('设计模式');
myBook.display();
myBook.checkTitle('a'); //不希望这个方法被外部调用，只希望被内部调用
myBook.title = 'HTTP深入浅出'; //不希望直接修改这个属性


//为了满足上面的两个要求，有以下改进代码：
/*形式上的疯涨，虽然没有改变本质，所有数=属性还是可以被访问，但就像
一种约定，程序员间的的约定，看到下划线就不在操作。
 */
var Book = function(){};
Book.prototype.setTitle = function(){
    if(!this._checkTitlt(title)) return;
    this.title = title;
};
Book.prototype._checkTitle = function(){
    return title.length > 2 && title.length < 20;
};
Book.prototype.display = function(){
    console.log('Book title is' + this.title);
};

//让需要隐藏的数据变为局部变量。原理；只有函数的局部变量在外部无法访问。
var Book = function(){
    var title;
    function checkTitle(title){
        return title.length > 2 && title.length < 20;
    }
    this.setTitle = function(newTitle){
        if(!checkTitle(newTitle)) return;
        title = newTitle;
    };
    this.display = function(){
        console.log('Book title is' + this.title);
    }
};
Book.prototype.other = function(){};
var myBook = new Book();
myBook.setTitle('设计模式');
myBook.display();
/*
* 以上代码，通过操作setTitle和display来操作title和checkTitle，无法直接操作title和checkTitle，实现了只
* 暴露部分属性的性能，暴露的属性，使用this.来定义。并且在原型上还增加了other方法，也是全局属性，都可以访问。但是存在一个缺点，就是每次创建
* 一个Book实例的时候，都会初始化一个title和一个checkTitle，造成性能损失。
* */


//静态方法和属性，通过return function()返回暴露的属性和方法。定义的对象为一个立即执行函数，不在使用this.来暴露属性了。
var Book = (function(){
    //私有的静态变量，只有一份
    var numOfBooks = 0;
    //私有的静态方法，只有一份
    function checkTitle(title){
        return title.length > 2 && title.length < 20;
    }
    return function(){
        var title;
        numOfBooks ++;
        if(numOfBooks > 10) throw new Error('error');
        this.setTitle = function(newTitle){
            if(!checkTitle(newTitle)) return;
            title = newTitle;
        };
        this.display = function(){
            console.log('Book title is' + title)
        }
    }
})();
//公开的静态方法
Book.convertoTitlecase = function(){};
//公开的实例方法
Book.prototype = {
    other: function(){}
};






