//用单列模式，把一坨代码整合到一个对象里，作为它的属性和方法，只保留一个全局变量，通过预留的入口启动。
var app = {
    btn: document.querySelector('#btn'),
    init: function(){
        this.bind();
    },
    bind: function(){
        var _this = this;
        this.btn.onclick = function(){
            _this.render();
        }
    },
    render(){
        console.log('render')
    }
};
app.init(); //入口

//使用闭包，来隐藏部分不需要暴露的变量，只露出init()方法（使用return返回），这种特殊的单列模式叫模块模式(module pattern)
var app = (function(){
    var btn = document.querySelector('#btn');
    function bind(){
        btn.onclick = function(){
            render()
        }
    }
    function render(){
        consoloe.log('render')
    }
    return {
        init: function(){
            bind();
        }
    }
})();
app.init(); //入口

//改进，不立即创建实例，等需要的时候在创建
var SingInstance = (function(){
    var instance;
    function createInstance(){
        //code here
    }
    return {
        getInstance: function(){
            if(!instance){
                //如果不存在，则使用函数创建
                return createInstance();
            }
            //如果存在，则直接返回
            return instance;
        }
    }
})();
var instance1 = SingInstance.getInstance();
var instance2 = SingInstance.getInstance();
console.log(instance1 === instance2); //true


// 完整代码
var Singleton = (function(){
    var instance;
    function createInstance() {
        var btn = document.querySelector('#btn');
        function bind() {
            btn.onclick = function() {
                render()
            }
        }
        function render() {
            console.log('render')
        }
        return {
            init: function() {
                bind()
            }
        }
    }
    return {
        getInstance: function() {
            if(!instance) {
                return createInstance()
            }
            return instance
        }
    }
})();

var app = Singleton.getInstance();
app.init();