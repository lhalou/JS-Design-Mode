/*
Subject是构造函数，new Subject() 创建一个主题对象，
该对象内部维护订阅当前主题的观察者数组。主题对象上有一些方法，如添加观察者(addObserver)、
删除观察者(removeObserver)、通知观察者更新(notify)。
当notify 时实际上调用全部观察者 observer 自身的 update 方法。
Observer 是构造函数，new Observer() 创建一个观察者对象，该对象有一个 update 方法。*/


function Subject() {
    this.observers = []
}
Subject.prototype.addObserver = function(observer) {
    this.observers.push(observer)
};
Subject.prototype.removeObserver = function(observer) {
    var index = this.observers.indexOf(observer)
    if(index > -1){
        this.observers.splice(index, 1)
    }
};
Subject.prototype.notify = function() {
    this.observers.forEach(function(observer){
        observer.update()
    })
};

function Observer(name) {
    this.name = name
    this.update = function(){
        console.log(name + ' update...')
    }
}

// 创建主题
var subject = new Subject();

//创建观察者1
var observer1 = new Observer('hunger');
//主题添加观察者1
subject.addObserver(observer1);
//创建观察者2
var observer2 = new Observer('valley');
//主题添加观察者2
subject.addObserver(observer2);

//主题通知所有的观察者更新
subject.notify();

//换成 ES6的写法

class Subject {
    constructor() {
        this.observers = []
    }
    addObserver(observer) {
        this.observers.push(observer)
    }
    removeObserver(observer) {
        var index = this.observers.indexOf(observer)
        if(index > -1){
            this.observers.splice(index, 1)
        }
    }
    notify() {
        this.observers.forEach(observer=> {
            observer.update()
        })
    }
}


class Observer{
    constructor() {
        this.update = function() {}
    }
}


let subject = new Subject();
let observer1 = new Observer();
observer1.update = function() {
    console.log('observer1 update')
};
subject.addObserver(observer1);

let observer2 = new Observer('valley');
observer2.update = function() {
    console.log('observer2 update')
};
subject.addObserver(observer2);

subject.notify();
//上面的代码中，主题被观察者订阅的写法是 subject.addObserver(observer)， 不是很直观，给观察者增加订阅方法

class Observer{
    constructor() {
        this.update = function() {}
    }
    subscribeTo(subject) {
        subject.addObserver(this)
    }
}


let subject = new Subject();
let observer = new Observer();
observer.update = function() {
    console.log('observer update')
};
observer.subscribeTo(subject);//观察者订阅主题

subject.notify();
//简化版
const EventManager = (function(){
    let eventList = {}
    function on(event, handler) {
        if(!eventList[event]) {
            eventList[event] = [handler]
        }else {
            eventList[event].push(handler)
        }
    }
    function fire(event, data) {
        if(eventList[event]) {
            eventList[event].forEach(handler => handler(data))
        }
    }
    function off(event, handler) {
        if(eventList[event]) {
            if(!handler) {
                delete eventList[event]
            }else {
                let index = eventList[event].indexOf(handler)
                eventList[event].splice(index, 1)
            }
        }
    }
    return {
        on: on,
        fire: fire,
        off: off
    }
})();



EventManager.on('sayHello', function(data) {
    console.log('hello ' + data)
});

EventManager.fire('sayHello', 'jirengu');



function handler(data) {
    console.log(data)
}

EventManager.on('sayHi', handler);

EventManager.fire('sayHi', 'xiedaimala.com');
EventManager.off('sayHi', handler);
EventManager.fire('sayHi', 'xiedaimala.com');