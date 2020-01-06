//任何复合物上调用对应的方法，可能会引起下面的孩子调用对应的方法，实现某一效果。
class Container {
    constructor(id){
        this.children = [];
        this.element = document.createElement('div');
        this.element.id = id;
        this.element.style.border = '1px solid black';
        this.element.style.margin = '10px';
        this.element.classList.add('container');
    }
    //复合物的变化会影响其孩子
    add(child){
        this.children.push(child);
        this.element.appendChild(child.getElement());
    }
    hide(){
        this.children.forEach(node => node.hide());
        this.element.style.display = "none";
    }
    show(){
        this.children.forEach(node => node.show());
        this.element.style.display = "";
    }
    getElement(){
        return this.element;
    }
}

class Text{
    constructor(text){
        this.element = document.createElement('p');
        this.element.innerText = text;
    }
    //叶子节点没有添加功能，但是保留这个接口.
    add(){}
    hide(){
        this.element.style.display = "none";
    }
    show(){
        this.element.style.display = "";
    }
    getElement(){
        return this.element;
    }
}

let header = new Container('header');
header.add(new Text('标题'));
header.add(new Text('logo'));

let main = new Container('main');
main.add(new Text('this is one'));
main.add(new Text('this is two'));

let page = new Container('page');
page.add(header);
page.add(main);
page.show();
document.body.appendChild(page.getElement());
