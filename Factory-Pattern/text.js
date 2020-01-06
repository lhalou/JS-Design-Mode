//传递不同的额参数，不同的类型，就能创造出所需的东西---工厂
const Dom = function(){
    create: function(type,url){
      return new this.types[type](url);
    }
    types: {
        text: function(url){
            this.appendTo = function(parent){
                parent.appendChild(document.createTextNode(url));
            }
        },
        img:function(url){
            yhis.appendTo = function(parent){
                let img = document.querySelector('img');
                img.src = url;
                parent.appendChild(img)
            }
        },
        link: function(){
            this.appendTo = function(parent){
                let link = document.querySelector('a');
                link.href = url;
                link.appendChild(document.createTtextNode(url);
                parent.appendChild(link)
            }
        }
   }
};
Dom.create('text','http://www.baidu.com').appendTo(document.body);

//改进,可实现链式调用

const Dom = {
    create:  function(type, url) {
        return new this.types[type]
    },
    types: {
        text: function() {
            this.node = document.createTextNode('')
            this.appendTo = function(parent) {
                parent.appendChild(this.node)
                return this
            }
            this.setText = function(text) {
                this.node.data = text
                return this
            }
        },
        image: function() {
            this.node = document.createElement('img')
            this.appendTo = function(parent) {
                parent.appendChild(this.node)
                return this
            }
            this.setSrc = function(src) {
                this.node.src = src
                return this
            }
            this.setSize = function(width, height) {
                this.node.style.width = width + 'px'
                this.node.style.height = height + 'px'
                return this
            }
        },
        link: function() {
            this.node = document.createElement('a')
            this.appendTo = function(parent) {
                parent.appendChild(this.node)
                return this
            }
            this.setHref = function(href){
                this.node.href = href
                return this
            }
            this.setText = function(text) {
                this.node.appendChild(document.createTextNode(text))
                return this
            }
        }
    }
};

Dom.create('text')
    .setText('https://jirengu.com')
    .appendTo(document.body)
Dom.create('link')
    .setHref('https://jirengu.com')
    .setText('饥人谷')
    .appendTo(document.body)
Dom.create('image')
    .setSrc( 'http://cdn.jirengu.com/book.jirengu.com/img/11.jpg')
    .setSize(30, 30)
    .appendTo(document.body)