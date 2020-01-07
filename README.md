## 设计模式的目的

设计模式是为了更好的代码重用性，可读性，可靠性，可维护性。

## 主要内容

- [对象](https://github.com/lhalou/JS-Design-Mode/blob/master/%E5%AF%B9%E8%B1%A1.js)
- [封装](https://github.com/lhalou/JS-Design-Mode/blob/master/%E5%B0%81%E8%A3%85.js)
- [单列模式Singleton Pattern](https://github.com/lhalou/JS-Design-Mode/tree/master/%E5%8D%95%E5%88%97%E6%A8%A1%E5%BC%8F)
- [工厂模式Factory Pattern](https://github.com/lhalou/JS-Design-Mode/tree/master/Factory-Pattern)
- [桥接模式Bridge Pattern](https://github.com/lhalou/JS-Design-Mode/tree/master/Bridge-Pattern)
- [组合模式Composite Pattern](https://github.com/lhalou/JS-Design-Mode/blob/master/Composite-Pattern.js)
- [外观模式Facade Pattern](https://github.com/lhalou/JS-Design-Mode/tree/master/Factory-Pattern)
- [适配器模式Adapter Pattern](https://github.com/lhalou/JS-Design-Mode/blob/master/Adapter-Pattern.js)
- [命令模式Command Pattern](https://github.com/lhalou/JS-Design-Mode/blob/master/Command-Pattern.js)
- [职责链模式Chain of Responsibility Pattern](https://github.com/lhalou/JS-Design-Mode/blob/master/%E8%81%8C%E8%B4%A3%E9%93%BE%E6%A8%A1%E5%BC%8F.js)

## 原理：

- 封装：隐藏对象的属性和实现细节，仅对外公开接口，控制在程序中属性的读取和修改的访问级别。
- 单列模式（Singleton Pattern）：保证一个类仅有一个实例，并提供一个访问它的全局访问点，一般登录、购物车等都是一个单例。
- 工厂模式（Factory Pattern）：工厂模式是一种创建模式，用来解决创建对象的问题，根据参数的类型，通过调用工厂方法来创建不同类型的对象。
  适用场景：
  1. 对象的构建十分复杂；
  2. 根据不同的条件创建不同的对象；
  3. 处理大量具有相同属性的对象；
- 桥接模式（Bridge Pattern）：
把事物对象和其具体行为，具体特征分离开来，使他们可以各自独立的变化.
- 组合模式（Composite Pattern）
  1. 层层嵌套的树状结构，整体由复合物和叶子两类元素组成。
  2. 复合物和叶子有相同的接口，不同的实现。
- 外观模式（Facade Pattern）：为一组复杂的子系统提供一个更高级的统一接口，通过这个借口使得对子系统接口的访问更容易。
- 适配器模式（Adapter Pattern）:适配器模式，即定义一个包装类，用于包装不兼容接口的对象
  使用场景：
  1. 使用nodejs做一个ORM框架，给用户暴露一套统一的数据库操作接口，在底层根据数据类型适配不同数据库。
  2. 做一个日志模板，给用户暴露一套统一的记录日志接口，底层根据数据类型适配是文件存储日志还是数据库存储日志。
  3. 前端开发过程中需要用到获取数据和保存数据，在开发阶段，可以把数据存储和查询用localStorage来做，接口就绪后可以发送请求从服务器存取数据，使用适配器模式，为使用者提供统一接口。
- 命令模式（Command Pattern）：是一种设计模式，它尝试以对象来代表实际行动，命令对象可以把行动及其参数封装起来，于是这些行动可以被
    1. 重复多次
    2. 取消（如果对象有实现的话）
    3. 取消后在重做。
    主要用于撤销及回退。
- 职责链模式（Chain of Responsibility Pattern）:责任链模式在面向对象程序设计里是一种软件设计模式，它包含了一些命令对象和一系列的处理对象，每一个处理对象决定它能处理哪些命令对象，它也知道如何将它不能处理的命令对象传递到链中的下一个处理对象，该模式还描述了往该处理链末尾添加新的处理对象的方法。



