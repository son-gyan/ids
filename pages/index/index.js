// pages/index/index.js
Page({
    data: {
        hiddenName:true,
        sctNum1:1,
        sctNum2: 1,
        sctNum3: 1,
        sctNum4: 1,
        scrollindex: 0,  //当前页面的索引值
        totalnum: 5,  //总共页面数
        starty: 0,  //开始的位置x
        endy: 0, //结束的位置y
        critical: 100, //触发翻页的临界值
        margintop: 0,  //滑动下拉距离
        imgUrl1: '/images/answer/1.png',
        imgUrl2: '/images/answer/1.png',
        imgUrl3: '/images/answer/1.png',
        imgUrl4: '/images/answer/1.png',
    },
    onLoad: function () {
    },
    selectChange1:function(e){
        if (this.data.sctNum1 % 2 != 0 ){
            this.setData({
                imgUrl1:'/images/answer/2.png'
            })
        }else{
            this.setData({
                imgUrl1: '/images/answer/1.png'
            })
        }
        this.data.sctNum1++;
    },
    selectChange2: function (e) {
        if (this.data.sctNum2 % 2 != 0) {
            this.setData({
                imgUrl2: '/images/answer/2.png'
            })
        } else {
            this.setData({
                imgUrl2: '/images/answer/1.png'
            })
        }
        this.data.sctNum2++;
    },
    selectChange3: function (e) {
        if (this.data.sctNum3 % 2 != 0) {
            this.setData({
                imgUrl3: '/images/answer/2.png'
            })
        } else {
            this.setData({
                imgUrl3: '/images/answer/1.png'
            })
        }
        this.data.sctNum3++;
    },
    selectChange4: function (e) {
        if (this.data.sctNum4 % 2 != 0) {
            this.setData({
                imgUrl4: '/images/answer/2.png'
            })
        } else {
            this.setData({
                imgUrl4: '/images/answer/1.png'
            })
        }
        this.data.sctNum4++;
    },
    btnSumit:function(){
        if (this.data.sctNum1 % 2 == 0 && this.data.sctNum2 % 2 == 0 && this.data.sctNum3 % 2 != 0 && this.data.sctNum4 % 2 != 0){
            this.setData({
                hiddenName: false
            })
        }
    },
    scrollTouchstart: function (e) {
        let py = e.touches[0].pageY;
        this.setData({
            starty: py
        })
    },
    scrollTouchmove: function (e) {
        let py = e.touches[0].pageY;
        let d = this.data;
        this.setData({
            endy: py,
        })
        if (py - d.starty < 100 && py - d.starty > -100) {
            this.setData({
                margintop: py - d.starty
            })
        }
    },
    scrollTouchend: function (e) {
        let d = this.data;
        if (d.endy - d.starty > 100 && d.scrollindex > 0) {
            this.setData({
                scrollindex: d.scrollindex - 1
            })
        } else if (d.endy - d.starty < -100 && d.scrollindex < this.data.totalnum - 1) {
            this.setData({
                scrollindex: d.scrollindex + 1
            })
        }
        this.setData({
            starty: 0,
            endy: 0,
            margintop: 0
        })
    },
})
