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
### 2、所有定位的总结（静态定位、相对定位、绝对定位、固定定位）
```
```