// 这个方法采取ES6的语法
export default class Waterfall{
    constructor(opt){
        // 挂载的元素
        this.el =  document.getElementsByClassName(opt.el)[0];
        // colmun 多少列
        this.colmun = opt.colmun;
        // gap 每列之间的间隔
        this.gap = opt.gap;
        // 每列的宽度
        this.colmunWidth = (this.el.offsetWidth - (this.colmun - 1)*this.gap) / this.colmun;
        // 不断的更新保存每一列的总高度值(最主要的是保存每一列的高度值，这一列每加一个图片，都会更新这一列的总高度值)
        this.heightArr = []
        this.children = this.el.getElementsByTagName('div');
        this.init()
    }
    init(){
        this.render();
    }
    render(){
        var item = null;
        for(let i = 0,length = this.children.length; i < length; i++){
            item = this.children[i]
            console.log(item);
            item.style.width = this.colmunWidth + 'px'
            if(i < this.colmun){
                item.style.left = i*(this.colmunWidth+this.gap) + 'px'
                item.style.top = 0;
                this.heightArr.push(item.offsetHeight)
            }else{
                let index = this.minIndex(this.heightArr)
                item.style.left = index*(this.colmunWidth+this.gap) + 'px'
                item.style.top = this.heightArr[index] + this.gap + 'px';
                this.heightArr[index] += item.offsetHeight + this.gap;
            }
        }
    }

    minIndex(heightArr){
        return heightArr.indexOf(Math.min.apply(null,heightArr))
     }

}