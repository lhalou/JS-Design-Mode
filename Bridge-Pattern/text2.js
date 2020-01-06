//页面上有Toast和Message两种形态的弹窗，弹窗都有出现和隐藏等行为，这些行为可以使用不同风格的动画。
function Toast(node,animation){
    this.node = node;
    this.animation = animation;
}
Toast.prototype.show = function(){
  this.animation.show(this.node)
};
Toast.prototype.hide = function(){
    this.animation.hide(this.node)
};

function Message(node,animation){
    this.node = node;
    this.animation = animation;
}
Message.prototype.show = function(){
    this.animation.show();
};
Message.prototype.hide = function(){
    this.animation.hide()
};

const Animations = {
    bounce: {
        show: function(node){
            console.log('弹跳着出现')
        },
        hide: function(node){
            cosnole.log('弹跳着隐藏')
        }
    },
    slide: {
        show: function(node){
            console.log('滑动着出现')
        },
        hide:function(node){
            console.log('滑动着隐藏')
        }
    }
};
let toast = new Toast('元素1',Animations.bounce);
toast.show();//实际调用的事Animations.bounce.show();
let message = new Message('元素2',Animations.slide);
message.hide(); //实际调用Animations.slide.hide()