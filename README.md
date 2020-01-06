## 设计模式的目的

设计模式是为了更好的代码重用性，可读性，可靠性，可维护性。

## 主要内容

- [对象](https://github.com/lhalou/JS-Design-Mode/blob/master/%E5%AF%B9%E8%B1%A1.js)
- [封装](https://github.com/lhalou/JS-Design-Mode/blob/master/%E5%B0%81%E8%A3%85.js)
- [单列模式Singleton Pattern](https://github.com/lhalou/JS-Design-Mode/tree/master/%E5%8D%95%E5%88%97%E6%A8%A1%E5%BC%8F)
- [工厂模式Factory Pattern](https://github.com/lhalou/JS-Design-Mode/tree/master/Factory-Pattern)
- [桥接模式Bridge Pattern](https://github.com/lhalou/JS-Design-Mode/tree/master/Bridge-Pattern)
- [组合模式Composite Pattern](https://github.com/lhalou/JS-Design-Mode/blob/master/Composite-Pattern.js)

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


