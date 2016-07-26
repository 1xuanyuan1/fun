(function(){
  // 这是主要文件  只需要修改 _vid即可
  window.BuildVideoInfo = {
    encodeid:"XMTU4MzI3Mzc1Ng==",
    _type:"m3u8",
    _url:"http://play.youku.com/play/get.json?vid=395818439&ct=12&callback=BuildVideoInfo.response",
    _vid:"395818439",
  };
  BuildVideoInfo.response = function(a) {
      this.init(a);
      //var b = a.data, c = b.stream;
      //this.playlistError || (this.playlistOK=!0, this.reportPlayListUep(), YK.v = a, a && b && (!c || "default" === c[0].drm_type && "http" === c[0].transfer_mode) ? this.init(a) : this.error(1, a, b, c))
  };
  BuildVideoInfo.m3u8src = function(a) {
      return YK.password = this._password, YK.m3u8src_v2(this.encodeid, a)
  };
  BuildVideoInfo.init = function(a) {
        console.log(a);
        this._v = a;
        var b = a.data, c = b.stream;
        if (this.encodeid = b.video.encodeid, !b.security ||!b.security.encrypt_string ||!b.security.ip)
            return YKP.sendErrorReport(2004), void YKP.showError(null, "数据解析错误");
        if (!c&&!b.error)
            return void YKP.showError(null, "该视频暂不能播放");
        var d = [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26], e = rc4(translate(YK.mk.a3 + "o0b" + YKP.userCache.a1, d).toString(), decode64(b.security.encrypt_string)), f = e.split("_");
        YKP.userCache.sid = e.split("_")[0];
        YKP.userCache.token = e.split("_")[1];
        YK.v = a;
        var url = YK.m3u8src_v2(BuildVideoInfo.encodeid,"mp4");
        $("#media").attr("src",url)
        // var string = '<video id="media" src="'+url+'" width="0px" height="0px" preload controls ></video>';
        // $(".page-content").append(string);
        console.log(url);
        //$("#media").attr("src",url);
    };
  var YK = {}, YKU = {}, YKP = {
          playerType: "",
          userCache: {
              a1: "4",
              a2: "1"
          },
          playerState: {
              PLAYER_STATE_INIT: "PLAYER_STATE_INIT",
              PLAYER_STATE_READY: "PLAYER_STATE_READY",
              PLAYER_STATE_AD: "PLAYER_STATE_AD",
              PLAYER_STATE_PLAYING: "PLAYER_STATE_PLAYING",
              PLAYER_STATE_END: "PLAYER_STATE_END",
              PLAYER_STATE_ERROR: "PLAYER_STATE_ERROR"
          },
          playerCurrentState: "PLAYER_STATE_INIT"
      };
  YK.m3u8src = function(a, b) {
        var c = "http://v.youku.com/player/getM3U8/vid/" + a + "/type/" + b + "/ts/" + parseInt((new Date).getTime() / 1e3);
        return  (c += "/useKeyFrame/0"), c += "/v.m3u8"
    };
  YK.m3u8src_v2 = function(a, b) {
      var c = {
          vid: a,
          type: b,
          ts: parseInt((new Date).getTime() / 1e3),
          keyframe: YKP.isIPHONE ? 0: 1
      };
      YK.password && (c.password = YK.password), YK.password && YK.initConfig.client_id && YK.config.partner_config && 1 == YK.config.partner_config.status && 1 == YK.config.partner_config.passless && (c.client_id = YK.initConfig.client_id);
      var d = [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26], e = encodeURIComponent(encode64(rc4(translate(YK.mk.a4 + "poz" + YKP.userCache.a2, d).toString(), YKP.userCache.sid + "_" + a + "_" + YKP.userCache.token)));
      c.ep = e, c.sid = YKP.userCache.sid, c.token = YKP.userCache.token, c.ctype = "12", c.ev = "1", c.oip = YK.v.data.security.ip;
      var f = "http://pl.youku.com/playlist/m3u8?" + urlParameter(c);
      return f;
  };
  YK.mk = {}, YK.mk.a3 = "b4et", void(YK.mk.a4 = "boa4")
  function decode64(a) {
      if (!a)
          return "";
      a = a.toString();
      var b, c, d, e, f, g, h, i = new Array( - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, - 1, 62, - 1, - 1, - 1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, - 1, - 1, - 1, - 1, - 1, - 1, - 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, - 1, - 1, - 1, - 1, - 1, - 1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, - 1, - 1, - 1, - 1, - 1);
      for (g = a.length, f = 0, h = ""; g > f;) {
          do
              b = i[255 & a.charCodeAt(f++)];
          while (g > f&&-1 == b);
          if ( - 1 == b)
              break;
          do
              c = i[255 & a.charCodeAt(f++)];
          while (g > f&&-1 == c);
          if ( - 1 == c)
              break;
          h += String.fromCharCode(b<<2 | (48 & c)>>4);
          do {
              if (d = 255 & a.charCodeAt(f++), 61 == d)
                  return h;
              d = i[d]
          }
          while (g > f&&-1 == d);
          if ( - 1 == d)
              break;
          h += String.fromCharCode((15 & c)<<4 | (60 & d)>>2);
          do {
              if (e = 255 & a.charCodeAt(f++), 61 == e)
                  return h;
              e = i[e]
          }
          while (g > f&&-1 == e);
          if ( - 1 == e)
              break;
          h += String.fromCharCode((3 & d)<<6 | e)
      }
      return h
  }
  function rc4(a, b) {
          for (var c, d = [], e = 0, f = "", g = 0; 256 > g; g++)
              d[g] = g;
          for (g = 0; 256 > g; g++)
              e = (e + d[g] + a.charCodeAt(g%a.length))%256, c = d[g], d[g] = d[e], d[e] = c;
          g = 0, e = 0;
          for (var h = 0; h < b.length; h++)
              g = (g + 1)%256, e = (e + d[g])%256, c = d[g], d[g] = d[e], d[e] = c, f += String.fromCharCode(b.charCodeAt(h)^d[(d[g] + d[e])%256]);
          return f
      }
  function translate(a, b) {
      for (var c = [], d = 0; d < a.length; d++) {
          var e = 0;
          e = a[d] >= "a" && a[d] <= "z" ? a[d].charCodeAt(0) - "a".charCodeAt(0) : a[d] - "0" + 26;
          for (var f = 0; 36 > f; f++)
              if (b[f] == e) {
                  e = f;
                  break
              }
          e > 25 ? c[d] = e - 26 : c[d] = String.fromCharCode(e + 97)
      }
      return c.join("")
  }
  // var d = [19, 1, 4, 7, 30, 14, 28, 8, 24, 17, 6, 35, 34, 16, 9, 10, 13, 22, 32, 29, 31, 21, 18, 3, 2, 23, 25, 27, 11, 20, 5, 15, 12, 0, 33, 26], e = rc4(translate(YK.mk.a3 + "o0b" + YKP.userCache.a1, d).toString(), decode64(b.security.encrypt_string)), f = e.split("_");
  // YKP.userCache.sid = e.split("_")[0];
  // YKP.userCache.token = e.split("_")[1];
  $.ajax(
    {
        type:'get',
        url : BuildVideoInfo._url,
        dataType : 'jsonp',
        jsonp:"jsoncallback",
        success  : function(data) {
            alert(data);
        },
        error : function(e) {
            //alert("fail");
        }
    }
  );

  var encode64 = function(a) {
        if (!a)
            return "";
        a = a.toString();
        var b, c, d, e, f, g, h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (d = a.length, c = 0, b = ""; d > c;) {
            if (e = 255 & a.charCodeAt(c++), c == d) {
                b += h.charAt(e>>2), b += h.charAt((3 & e)<<4), b += "==";
                break
            }
            if (f = a.charCodeAt(c++), c == d) {
                b += h.charAt(e>>2), b += h.charAt((3 & e)<<4 | (240 & f)>>4), b += h.charAt((15 & f)<<2), b += "=";
                break
            }
            g = a.charCodeAt(c++), b += h.charAt(e>>2), b += h.charAt((3 & e)<<4 | (240 & f)>>4), b += h.charAt((15 & f)<<2 | (192 & g)>>6), b += h.charAt(63 & g)
        }
        return b
    }
    var urlParameter = function(a) {
        var b = [];
        for (var c in a)
            b.push(c + "=" + a[c]);
        return b.join("&")
    }
})(window)
