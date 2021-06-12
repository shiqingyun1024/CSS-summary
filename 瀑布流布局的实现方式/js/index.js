;(function(){
    var Waterfall = function(opt){
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
    Waterfall.prototype.init = function(){
        this.render();
    }
    Waterfall.prototype.render = function(){
        var item = null;
        for(let i = 0,length = this.children.length; i < length; i++){
            item.style.width = this.colmunWidth + 'px'
            if(i < this.colmun){
                item.style.left = i*(this.colmunWidth+this.gap) + 'px'
                item.style.top = 0;
                this.heightArr.push(item.offsetHeight)
            }else{
                let index = minIndex(this.heightArr)
                item.style.left = index*(this.colmunWidth+this.gap) + 'px'
                item.style.top = this.heightArr[index] + this.gap + 'px';
                this.heightArr[index] += item.offsetHeight + this.gap;
            }
        }
    }
    // 找出heightArr高度值最小的那个，然后把图片放在高度最小的图片下方
    function minIndex(heightArr){
       return heightArr.indexOf(Math.min.apply(null,heightArr))
    }
    window.Waterfall = Waterfall;
})();