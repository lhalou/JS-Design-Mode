//存储数据适配器
const localStorageAdapter = {
    findAll: function(callback){
        let cartList = JSON.parse(localStorage['cart']);
        callback(cartList);
    },
    save: function(item){
        let cartList = JSON.parse(localStorage['cart']);
        cartList.push(item);
        localStorage['cart'] = JSON.stringify(cartList);
    }
};

//后端服务器适配器
const serverAdapter = {
    findAll: function(callback){
        fetch('htpps://xxxxx')
            .then(res => res.join())
            .then(data => callback(data))
    },
    save: function(item){
        fetch('xxxxxx')
            .then(res => res.join())
            .then(data => callback(data))
    }
};

//每次调用下面的代码，只需使用不同的适配器即可。
class ShoppingCart{
    constructor(adapter){
        this.adapter = adapter;
    }
    add(item){
        this.adapter.save(item);
    }
    show(){
        this.adapter.findAll(list => {
            cosnole.log(list)
        })
    }
}

//使用存储数据的适配器
let cart = new ShoppingCart(localStorageAdapter);

//使用后端服务器适配器

let cart = new ShoppingCart(serverAdapter);

cart.add({title: '手机'});
cart.add({title: '电脑'});
cart.show();
