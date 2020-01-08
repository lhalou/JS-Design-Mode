//AOP：面向切面编程

//代码调用口
const AOP = {};
AOP.before = function(fn,before){
    return function(){
        before.apply(this,arguments);
        fn.apply(this,arguments);
    }
};
AOP.after = function(fn,after){
    return function(){
        fn.apply(this,arguments);
        after.apply(this,arguments);
    }
};

//点击按钮时提交数据
function submit(){
    consol.log('提交数据')
}

//在原有功能基础上做点装饰，点击按钮，提交数据前做个校验。
function submit(){
    console.log(this);
    console.log('提交数据');
}

function check(){
    console.log(this);
    console.log('校验数据');
}

//调用

submit  = AOP.before(submit,check);
document.querySelector('btn').onclick = submit;

