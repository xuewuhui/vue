import wx from 'weixin-js-sdk';
import utils from './utils.js';
var domain = utils.getParam('domain_prefix'),
    api = 'http://gikoo.mlp5plus.gikoo.cn/api/v1/wechat/',
    openid = null,
    wl = window.location;
function getBackUrl() {
  var search = wl.search;
  if (search === '') {
    search = '?_wc_checked=1'
  } else {
    search += '&_wc_checked=1'
  }

  var url = wl.origin + wl.pathname + search + wl.hash
  return encodeURIComponent(url)
}

function getOpenId() {
  var channel = utils.get_broswer_info();
  if (channel == 3) {
    openid = openid || utils.getParam('open_id');
    // 没有openid，调用微信接口
    if (!openid && wl.search.indexOf('_wc_checked=1') <= 0) {
      var url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx31a24c5111cc84e2&redirect_uri=REDIRECT_URI&response_type=code&scope=snsapi_base&state=123#wechat_redirect'
      var backurl = encodeURIComponent(api + 'get-wechat-open-id/?back_url=' + getBackUrl())
      url = url.replace('REDIRECT_URI', backurl)
      window.location.href = url
      return null
    }
    return openid
  } else {
    return null;
  }
}

// 注册微信
window.getWechatSignature = function(res) {
  res = res || []
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: 'wx31a24c5111cc84e2', // 必填，公众号的唯一标识
    timestamp: res[2], // 必填，生成签名的时间戳
    nonceStr: res[1], // 必填，生成签名的随机串
    signature: res[0], // 必填，签名，见附录1
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'showOptionMenu', 'showAllNonBaseMenuItem'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  })
}

function callJsonpApi(url) {
  var script = document.createElement('script')
  script.src = url
  document.head.appendChild(script)
}


function wechatShare(shareurl, title, desc, cover, callback) {
  var data = {
    title: title, // 分享标题
    desc: desc, // 分享描述
    link: shareurl, // 分享链接
    imgUrl: cover, // 分享图标
    success: function() {
      // 用户确认分享后执行的回调函数
      if (callback) {
        callback();
      }
    },
    cancel: function() {
      // 用户取消分享后执行的回调函数
    }
  }
  wx.ready(function() {
    wx.onMenuShareTimeline(data);
    wx.onMenuShareAppMessage(data);
    wx.showOptionMenu();
    wx.showAllNonBaseMenuItem();
  })
  callJsonpApi(api + 'get-jsapi-signature/?callback=getWechatSignature&url=' + encodeURIComponent(location.href))
}

function hideOptionMenu() {
  wx.ready(function() {
    wx.hideOptionMenu()
  })
  callJsonpApi(api + 'get-jsapi-signature/?callback=getWechatSignature&url=' + encodeURIComponent(location.href))
}
// 发送给朋友: "menuItem:share:appMessage"
// 分享到朋友圈: "menuItem:share:timeline"
// 分享到QQ: "menuItem:share:qq"
// 分享到Weibo: "menuItem:share:weiboApp"
// 收藏: "menuItem:favorite"
// 分享到FB: "menuItem:share:facebook"
// 分享到 QQ 空间/menuItem:share:QZone
function hideMenuItems() {
  wx.ready(function() {
    wx.hideMenuItems({
      menuList: ["menuItem:share:appMessage", "menuItem:share:timeline", "menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:share:facebook", "menuItem:share:QZone"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
    });
  })

}
export default {
  getOpenId: getOpenId,
  wechatShare: wechatShare,
  hideOptionMenu: hideOptionMenu,
  hideMenuItems: hideMenuItems
}
