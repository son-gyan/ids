// pages/index/index.js
//const bgMusic = wx.getBackgroundAudioManager();
const bgMusic = wx.createInnerAudioContext();
Page({
    data: {
        musicHide:true,
        musicUrl:"/images/yinpin1.png",
        audioUrl: "/images/media/1.mp3",
        hiddenName: true,
        answerBag:'0',
        answerImg1: "/images/answer/end.png",
        answerImg2:"/images/answer/error.png",
        sctNum1: 1,
        sctNum2: 1,
        sctNum3: 1,
        sctNum4: 1,
        scrollindex: 0, //当前页面的索引值
        totalnum: 4, //总共页面数
        starty: 0, //开始的位置x
        endy: 0, //结束的位置y
        critical: 100, //触发翻页的临界值
        margintop: 0, //滑动下拉距离
        imgUrl1: '/images/answer/1.png',
        imgUrl2: '/images/answer/1.png',
        imgUrl3: '/images/answer/1.png',
        imgUrl4: '/images/answer/1.png',
        flg: true
    },
    onReady: function () {
        // this.audioCtx = wx.createAudioContext('audio');
        // this.audioCtx.play()
        bgMusic.title = "网络检查";
        bgMusic.src = "/images/media/1.mp3";
        bgMusic.play();
    },
    onLoad: function() {
        var numMusic = 0;
        setInterval(()=>{
            numMusic++;
            if (numMusic%3==1){
                this.setData({
                    musicUrl: "/images/yinpin1.png",
                })
            } else if (numMusic % 3 == 2){
                this.setData({
                    musicUrl: "/images/yinpin2.png",
                })
            } else if (numMusic % 3 == 0) {
                this.setData({
                    musicUrl: "/images/yinpin3.png",
                })
            }
            
        },200)
    },
    selectChange1: function(e) {
        console.log("123");
        if (this.data.sctNum1 % 2 != 0) {
            this.setData({
                imgUrl1: '/images/answer/2.png'
            })
        } else {
            this.setData({
                imgUrl1: '/images/answer/1.png'
            })
        }
        this.data.sctNum1++;
    },
    selectChange2: function(e) {
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
    selectChange3: function(e) {
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
    selectChange4: function(e) {
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
    btnSumit: function() { 
        var that = this;      
        if (this.data.sctNum1 % 2 == 0 && this.data.sctNum2 % 2 == 0 && this.data.sctNum3 % 2 != 0 && this.data.sctNum4 % 2 != 0) {
            console.log(123);
            this.setData({
                answerBag: '1',
                hiddenName: false
            })
        }else{
            console.log(223);
            that.setData({
                answerBag: '2',
                hiddenName: false
            })
            console.log(that.data.answerBag);
        }
        this.setData({
            flg: true
        })
    },
    backIndex:function(){
        this.onLoad();
        this.setData({
            scrollindex:0,
            flg: true,
            hiddenName: true,
            imgUrl1: '/images/answer/1.png',
            imgUrl2: '/images/answer/1.png',
            imgUrl3: '/images/answer/1.png',
            imgUrl4: '/images/answer/1.png',
            musicHide: true
        })
        bgMusic.src = "/images/media/1.mp3";
        bgMusic.play();
    },
    scrollTouchstart: function(e) {        
        //debugger
        let py = e.touches[0].pageY;
        console.log("scrollTouchstart:"+this.data.flg);
        this.setData({
            starty: py
        })
    },
    scrollTouchmove: function(e) {
        //debugger
        let py = e.touches[0].pageY;
        let d = this.data;
        this.setData({
            endy: py,
        })
        console.log("scrollTouchmove:" + this.data.flg);
        if (py - d.starty < 100 && py - d.starty > -100) {
            this.setData({
                margintop: py - d.starty
            })
        }
    },
    scrollTouchend: function(e) {
        //debugger
        let d = this.data;
        console.log("scrollTouchend:" + this.data.flg);
        if (this.data.flg&&d.endy - d.starty > 100 && d.scrollindex > 0) {
            console.log("d.scrollindex:" + d.scrollindex);
            this.setData({
                scrollindex: d.scrollindex - 1
            })
        } else if (this.data.flg &&d.endy - d.starty < -100 && d.scrollindex < this.data.totalnum - 1) {
            console.log("d.scrollindex:" + d.scrollindex);
            this.setData({
                scrollindex: d.scrollindex + 1
            })
        }
        this.setData({
            starty: 0,
            endy: 0,
            margintop: 0
        })
        console.log("scrollTouchend:" + this.data.scrollindex);
        if (this.data.scrollindex == 0) {
            this.setData({
                musicHide:true
            })
            // this.audioCtx.play()
            bgMusic.src = "/images/media/1.mp3";
            bgMusic.play();
        } else if (this.data.scrollindex == 1) {
            this.setData({
                musicHide: true
            })
            // this.audioCtx.play()
            bgMusic.src = "/images/media/2.mp3";
            bgMusic.play();
        } else if (this.data.scrollindex == 2) {
            this.setData({
                musicHide: true
            })
            // this.audioCtx.play()
            bgMusic.src = "/images/media/3.mp3";
            bgMusic.play();
        } else if (this.data.scrollindex == 3) {
            this.setData({
                musicHide: false,
                flg:false                
            })
            bgMusic.stop();
            console.log(this.data.answerBag);
        } else if (this.data.scrollindex == 4) {
            this.setData({
                musicHide: true
            })
            // this.audioCtx.play()
            bgMusic.src = "/images/media/5.mp3";
            bgMusic.play();
        }
    },
})