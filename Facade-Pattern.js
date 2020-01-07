//绑定时间的兼容写法
//通过addEvent这个统一的接口实现对下面三个接口的访问。
function addEvent(el,type,fn){
    if(window.addEventListener){
        el.addEventListener(type,fn,false)
    }else if (window.attachEvent) {
        el.attachEvent('on' + ev, fn)
    }else {
        el['on'+type] = fn
    }
}

//实例2
//原始代码
class Carousel{
    constructor(){
        console.log('初始化轮播')
    }
    start(){
        console.log('轮播开始了')
    }
}

class Tab{
    constructor(){
        console.log('初始化Tab')
    }
    start(){
        console.log('Tab开始了')
    }
}

//调用接口的时候，需要分别初始化一个实例，在分别调用start
let carousel = new Carousel();
let tab = new Tab();
carousel.start();
tab.start();

//优化代码，有一个固定的接口，调用统一接口，即可调用里面的各种方法
class App {
    constructor(){
        this.carousel = new Carousel();
        this.tab = new Tab();
    }
    start(){
        this.carousel.strat();
        this.tab.start()
    }
}
let app = new App();
app.start();