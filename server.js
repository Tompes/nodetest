var express = require('express');
var app = express();
u = function s(j, r) {
    var a = [];
    var p = [];
    var o = "";
    var v = j.length;
    for (var q = 0; q < 256; q++) {
        a[q] = j.substr((q % v), 1).charCodeAt(0);
        p[q] = q
    }
    for (var u = q = 0; q < 256; q++) {
        u = (u + p[q] + a[q]) % 256;
        var t = p[q];
        p[q] = p[u];
        p[u] = t
    }
    for (var i = u = q = 0; q < r.length; q++) {
        i = (i + 1) % 256;
        u = (u + p[i]) % 256;
        var t = p[i];
        p[i] = p[u];
        p[u] = t;
        k = p[((p[i] + p[u]) % 256)];
        o += String.fromCharCode(r.charCodeAt(q) ^ k)
    }
    return o
};
var b=function (t) {
    var r, e, a, n, i, o, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    for (a = t.length, e = 0, r = ""; a > e;) {
        if (n = 255 & t.charCodeAt(e++), e == a) {
            r += s.charAt(n >> 2), r += s.charAt((3 & n) << 4), r += "==";
            break
        }
        if (i = t.charCodeAt(e++), e == a) {
            r += s.charAt(n >> 2), r += s.charAt((3 & n) << 4 | (240 & i) >> 4), r += s.charAt((15 & i) << 2), r += "=";
            break
        }
        o = t.charCodeAt(e++), r += s.charAt(n >> 2), r += s.charAt((3 & n) << 4 | (240 & i) >> 4), r += s.charAt((15 & i) << 2 | (192 & o) >> 6), r += s.charAt(63 & o)
    }
    return r
}
app.get('/', function (req, res) {
    //   var u =  eval(req.query.s3)
     var haveS1 , haveS2
     typeof req.query.s1 == "undefined" ? haveS1=true:haveS1=false
     typeof req.query.s2 == "undefined" ? haveS1=true:haveS1=false
     var sendback = b(u(req.query.s1.trim(),req.query.s2.trim())) +"<br>"+process.env.PORT

    console.log(u(req.query.s1.trim(),req.query.s2.trim()))
  res.send(sendback);
  
});

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});