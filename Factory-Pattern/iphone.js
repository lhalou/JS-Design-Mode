//手机店售卖手机
function phoneShop(){}
phoneShop.prototype = {
    sellPhone: function(type){
        var phone;
        switch(type){
            case '苹果':
                phone = new iPhone();
                break;
            case '华为':
                phone = new Huawei();
                break;
            default:
                phone = new Xiaomi();
        }
        phone.film();//手机贴膜
        return phone;
    }
};
function iPhone(){
    this.say = function(){
        console.log('this is iPhone');
    };
    this.film = function(){
        console.log('iPhone 贴膜完成')
    }
}

function Huawei(){
    this.say = function(){
        console.log('this is Huawei');
    };
    this.film = function(){
        console.log('Huawei 贴膜完成')
    }
}

function Xiaomi(){
    this.say = function(){
        console.log('this is Xiaomi');
    };
    this.film = function(){
        console.log('Xiaomi 贴膜完成')
    }
}

var phone = new phoneShop();
var xiaomi = phone.sellPhone('小米');
xiaomi.say();

//代码改进，手机是在工厂进货，手机店值负责卖手机。贴膜可以由手机店来做，但生产手机不应该由手机店生产。可以让厂家生产
var phoneFactory = {
    createPhone: function(){
        var phone;
        switch(type){
            case '苹果':
                phone = new iPhone();
                break;
            case '华为':
                phone = new Huawei();
                break;
            default:
                phone = new Xiaomi();
        }
        return phone;
    }
};

function PhoneShop(){}
PhoneShop.prototype = {
    sellPhone: function(){
        var phone = phoneFactory.createPhone(type);
        phone.film();
        return phone;
    }
};
