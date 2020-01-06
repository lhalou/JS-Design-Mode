/*男生-钢琴；女生-吉他；
1. 钢琴能演奏，吉他能演奏
2. 男生能让乐器演奏，女生能让乐器演奏
3. 钢琴师乐器，吉他是乐器
*/
//核心：创建对象的时候，传递的参数是另外一个对象，当调用这个对象的某些方法的时候，让另外的那个对象执行自己的方法。
function Boy(instrument){
    //传入的参数是另外一个对象
    this.sayHi = function(){
        console.log('hi this is boy')
    };
    //当调用playInstrument时，另一个对象调用自身的额play方法
    this.playInstrument = function(){
        instrument.play();
    }
}

function Girl(instrument){
    this.sayHi = function(){
        console.log('hi this is girl')
    };
    this.playInstrument = function(){
        instrument.play();
    }
}

function Piano(){
    this.play = function(){
        console.log('piano 演奏')
    }
}

function Guitar(){
    this.play = function(){
        console.log('guitar 演奏')
    }
}

var piano = new Piano();
var boy = new Boy(piano);
boy.playInstrument(); //演奏成功