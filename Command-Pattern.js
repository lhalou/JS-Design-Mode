//创建Command对象，使用单列模式创建
const Command = (function(){
    let cmds = [];
    let recever;
    return {
        bind: function(){
            recever = rec;
        },
        exec: function(cmd){
            cmds.push(cmd);
            recever[cmd.type] && recever[cmd.type](cmd.payload);
        },
        //undo：撤销命令
        undo: function(){
            let cmd = cmds.pop();
            if(!cmd) return;
            recever[cmd.type] && recever[cmd.type](cmd.payload);
        }
    }
})();

//应用：创建一个对象，封装action和参数
let UserOperation = {
    find: function(){
        console.log('查找')
    },
    add: function(data){
        console.log('添加：' + data)
    },
    delete: function(data){
        console.log('删除' + data)
    }
};

//调用
//操作UserOperation，命令式发给UserOperation；
Command.bind(UserOperation);
//实际调用的是UserOperation的add方法
Command.exec({type:'add',payload:'你好'});
//实际调用的是UserOperation的find方法
Command.exec({type: 'find'});
//实际调用的是UserOperation的delete方法
Command.exec({type:'delete'});
//撤回
Command.undo();