//装饰代码
const logWrapper = targetClass => {
    //把之前的render暂存起来
    let originRender = targetClass.prototype.render;
    //重新修改render
    targetClass.prototype.render = function(){
        console.log('before render');
        //执行render
        originRender.apply();
        console.log('render after');
    };
    //返回新的render
    return targetClass;
};

//原有render功能

class App {
    constructor() {
        this.titile = 'nihao';
    }
    render(){
        console.log('zaijian' + title);
    }
}

//调用

App = logWrapper(App);
new App().render();

//使用decorator修饰符修改class,其他不变（原生JS不支持

@logWrapper
class App {
    constructor() {
        this.titile = 'nihao';
    }
    render(){
        console.log('zaijian' + title);
    }
}

//使用decorator修饰符修改原型属性

class App {
    constructor() {
        this.titile = 'nihao';
    }
    @logWrapper
    render(){
        console.log('zaijian' + title);
    }
}

new App().render();