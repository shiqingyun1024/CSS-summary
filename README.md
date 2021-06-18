# CSS-summary
CSS(包含CSS3)相关的总结

### 瀑布流布局的实现方式
```
1、css3的实现方式
/* columns和column-gap都是css3的属性 这两个属性是瀑布流布局真正实现的原因*/
columns: 5; // 总共几列
column-gap: 10px; // 每列之间的间隙

2、js的实现方式
父级元素用相对定位，子级元素（放置图片的元素）用绝对定位。
colmun：多少列，gap：每列之间的间隔
算出每列的宽度
this.colmunWidth = (this.el.offsetWidth - (this.colmun - 1)*this.gap) / this.colmun;

先按照顺序放置第一行，然后计算第一行中高度最低的那个元素，然后把第二行第一个元素放置在这个最低的元素下面，以此类推。
```
