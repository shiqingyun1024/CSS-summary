# CSS-summary
CSS(包含CSS3)相关的总结
## 基础知识
### 选择器
```
CSS的选择器其实大类的话可以分为三类，即id选择器、class选择器、标签选择器。它们之间可以有多种组合。

css选择器介绍：

1、类别选择器

类选择器根据类名来选择，前面以“.”来标志。

示例：

.demoDiv{
color:#FF0000;
}
2、标签选择器

一个完整的HTML页面是有很多不同的标签组成，而标签选择器，则是决定哪些标签采用相应的CSS样式。

在style.css文件中对p标签样式的声明如下：

p{
font-size:12px;
background:#900;
color:090;
}
3、ID选择器

ID 选择器可以为标有特定 ID 的 HTML 元素指定特定的样式。 根据元素ID来选择元素，具有唯一性，这意味着同一id在同一文档页面中只能出现一次。

前面以”#”号来标志，在样式里面可以这样定义：

#demoDiv{
color:#FF0000;
}
4、后代选择器

后代选择器也称为包含选择器，用来选择特定元素或元素组的后代，将对父元素的选择放在前面，对子元素的选择放在后面，中间加一个空格分开。

<style>
.father.child{
color:#0000CC;
}
</style>
<p class="father">
黑色
<label class="child">蓝色
<b>也是蓝色</b>
</label>
</p>
5、子选择器

请注意这个选择器与后代选择器的区别，子选择器（child selector）仅是指它的直接后代，或者你可以理解为作用于子元素的第一个后代。而后代选择器是作用于所有子后代元素。后代选择器通过空格来进行选择，而子选择器是通过“>”进行选择。

我们看下面的代码：

Example Source Code

CSS：

#links a {color:red;}
#links > a {color:blue;}
HTML：

<p id="links">
<a href="#">HTML中文网</a>>
<span><a href="#">CSS布局实例</a></span>
<span><a href="#">CSS教程</a></span>
</p>
6、伪类选择器

有时候还会需要用文档以外的其他条件来应用元素的样式，比如鼠标悬停等。这时候我们就需要用到伪类了。以下是链接应用的伪类定义。
爱恨原则”(LoVe/HAte),即四种伪类的首字母:LVHA
a:link，定义正常链接的样式；
a:visited，定义已访问过链接的样式；
a:hover，定义鼠标悬浮在链接上时的样式；
a:active，定义鼠标点击链接时的样式。


a:link{
color:#999999;
}
a:visited{
color:#FFFF00;
}
a:hover{
color:#006600;
}
/* IE不支持，用Firefox浏览可以看到效果 */
input:focus{
background:# E0F1F5;
}
7、通用选择器

通用选择器用*来表示。例如：

*{
font-size: 12px;
}
表示所有的元素的字体大小都是12px；同时通用选择器还可以和后代选择器组合。

8、群组选择器

当几个元素样式属性一样时，可以共同调用一个声明，元素之间用逗号分隔。如：

p, td, li {
line-height:20px;
color:#c00;
}
#main p, #sider span {
color:#000;
line-height:26px;
}
.#main p span {
color:#f60;
}
.text1 h1,#sider h3,.art_title h2 {
font-weight:100;
}
使用群组选择器，将会大大的简化CSS代码，将具有多个相同属性的元素，合并群组进行选择，定义同样的CSS属性，这大大的提高了编码效率，同时也减少了CSS文件的体积。

9、相邻同胞选择器

我们除了上面的子选择器与后代选择器，我们可能还希望找到兄弟两个当中的一个，如一个标题h1元素后面紧跟了两个段落p元素，我们想定位第一个段落p元素，对它应用样式。我们就可以使用相邻同胞选择器。

10、属性选择器

您可以用判断html标签的某个属性是否存在的方法来定义css。

属性选择器，是根据元素的属性来匹配的，其属性可以是标准属性也可以是自定义属性

11、伪元素选择器

所有伪元素选择器都必须放在出现该伪元素的选择器的最后面，也就是说伪元素选择器不能跟任何派生选择器。
```

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
### 功能专区
#### 1、使用transform中的translate实现垂直居中（垂直居中方法很多，我经常直接用flex布局实现）
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>transform中的translate实现垂直居中</title>
    <style>
        .transParent{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        /* translate是相对父级元素运动，百分比是相对于元素自身的宽高 */
        .transChild{
           position: absolute;
           top: 50%;
           left: 50%;
           width: 100px;
           height: 100px;
           background-color: #2195de;
           transform: translate(-50%,-50%);
        }
    </style>
</head>
<body>
    <div class="transParent">
        <div class="transChild"></div>
    </div>
</body>
</html>
```
#### 2、所有定位的总结（静态定位（也就是没有开启定位）、相对定位、绝对定位、固定定位、粘性定位）
```
定位（position）
   - 定位是一种更加高级的布局手段
   - 通过定位可以将元素摆放到页面的任意位置
   - 使用position属性来设置定位
   可选值
        static 默认值，元素是静止的，没有开启定位
        relative 开启元素的相对定位
        absolute 开启元素的绝对定位
        fixed 开启元素的固定定位
        sticky 开启元素的粘性定位

    - 相对定位
        - 当元素的position属性设置为relative时则开启了元素的相对定位
        - 相对定位的特点
          1、元素开启相对定位后，如果不设置偏移量，元素不会发生任何的变化 
          偏移量（offset） 
          top：定位元素和定位位置上边的距离。
          bottom
          left
          right  
```

