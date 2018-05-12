//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
      imageList:[
        'https://zh.res.btows.com/upload/mobile.jpg','https://zh.res.btows.com/upload/03.jpg','https://zh.res.btows.com/upload/mobile.jpg'
        ]
  },
  //事件处理函数
  previewImage: function(e) {
    console.log('sdsdkjs');
      var current = e.target.dataset.src;
      wx.previewImage({
        current:current,
        urls: this.data.imageList,
        success: function(res){
          console.log("下载文件成功")
        },
        fail: function() {
         console.log("下载文件失败")
        }
      })
  }
});
