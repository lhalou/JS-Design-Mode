//每次创建一个people，都会new 一个phone对象，存在大量的重复对象
class Phone {
    constructor(band){
        this.band = band;
    }
    call() {
        cosnole.log('I use' + this.bind + 'to call');
    }
}

class People{
    constructor(name,band){
        this.name = name;
        this.phone = new Phone(band);
    }
    call() {
        console.log('I am' + this.name);
        //调用phone的call
        this.phone.call();
    }
}

//调用
let p1 = new People('A','XiaoMi');
let p2 = new People('B','XiaoMi');
let p3 = new People('C','Apple');
let p4 = new People('D','XiaoMi');
p1.call(); //实际调用的是Phone的call
p2.call();
p3.call();
p4.call();

//代码改进：
class Phone {
    constructor(band){
        this.band = band;
    }
    call() {
        cosnole.log('I use' + this.bind + 'to call');
    }
}

const PhoneRenter = (function(){
    let phones = {};
    return {
        getPhone: function(band){
            //先进性判断，无则创建，有则返回
            if(!phones[band]){
                phones[band] = new Phone(band)
            }
            return phones[band]
        }
    }
})();


class People{
    constructor(name,band){
        this.name = name;
        //主要区别
        this.phone = PhoneRenter.getPhone(band)
    }
    call() {
        console.log('I am' + this.name);
        //调用phone的call
        this.phone.call();
    }
}
