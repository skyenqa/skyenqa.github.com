"use strict";var $$=document,random=parseInt(1e8*Math.random()),IP={get:function(e,t){return fetch(e,{method:"GET"}).then(function(e){return"text"===t?Promise.all([e.ok,e.status,e.text(),e.headers]):Promise.all([e.ok,e.status,e.json(),e.headers])}).then(function(e){var t=e[0],n=e[1],i=e[2],r=e[3];if(t)return{ok:t,status:n,data:i,headers:r};throw new Error(JSON.stringify(json.error))}).catch(function(e){throw e})},parseIPIpapi:function(e,t){IP.get("###").then(function(e){$$.getElementById(t).innerHTML=e.data.country+" "+e.data.regionName+" "+e.data.city+" "+e.data.isp})},parseIPIpip:function(e,a){IP.get("###").then(function(e){var t="",n=e.data,i=Array.isArray(n),r=0;for(n=i?n:n[Symbol.iterator]();;){var o;if(i){if(r>=n.length)break;o=n[r++]}else{if((r=n.next()).done)break;o=r.value}t+=""!==o?o+" ":""}$$.getElementById(a).innerHTML=t})},parseCZ88Ip:function(e,t){IP.get("###").then(function(e){$$.getElementById(t).innerHTML=e.data.geo||e.data.msg})},getIpipnetIP:function(){IP.get("https://myip.ipip.net/?z="+random,"text").then(function(e){var t=e.data.replace("当前 IP：","").split(" 来自于：");$$.getElementById("ip-ipipnet").innerHTML="<p>"+t[0]+'</p><p class="sk-text-small">'+t[1]+"</p>"})},getTaobaoIP:function(e){$$.getElementById("ip-taobao").innerHTML=e.ip,IP.parseIPIpip(e.ip,"ip-taobao-ipip")},getIpifyIP:function(){IP.get("/cdn-cgi/trace","text").then(function(e){var t={},n=e.data.split("\n"),i=Array.isArray(n),r=0;for(n=i?n:n[Symbol.iterator]();;){var o;if(i){if(r>=n.length)break;o=n[r++]}else{if((r=n.next()).done)break;o=r.value}var a=o.split("=");t[a[0]]=a[1]}return $$.getElementById("ip-ipify").innerHTML=t.ip,t.ip}).then(function(e){IP.parseCZ88Ip(e,"ip-ipify-ipip")})},getSohuIP:function(){"###"==typeof returnCitySN&&window.alert(" 111"),$$.getElementById("ip-sohu").innerHTML=returnCitySN.cip,IP.parseCZ88Ip(returnCitySN.cip,"ip-sohu-geo")},getIpsbIP:function(){IP.get("https://api.ip.sb/geoip","json").then(function(e){var t=e.data,n=function(e){return Boolean(e)?e+" ":" "};$$.getElementById("ip-ipsb").innerHTML=t.ip,$$.getElementById("ip-ipsb-geo").innerHTML=""+n(t.country)+n(t.region)+n(t.city)+n(t.organization)})}},HTTP={checker:function(e,t){var n=new Image,i=setTimeout(function(){n.onerror=n.onload=null,$$.getElementById(t).innerHTML='<span class="sk-text-error">连接超时</span>',n.src=null},6e3);n.onerror=function(){clearTimeout(i),$$.getElementById(t).innerHTML='<span class="sk-text-error">无法访问</span>'},n.onload=function(){clearTimeout(i),$$.getElementById(t).innerHTML='<span class="sk-text-success">连接正常</span>'},n.src="https://"+e+"/favicon.ico?"+ +new Date},runcheck:function(){HTTP.checker("##","http-baidu"),HTTP.checker("###/style","http-163"),HTTP.checker("###","http-github"),HTTP.checker("###","http-youtube")}};HTTP.runcheck(),IP.getIpipnetIP(),IP.getIpifyIP(),IP.getIpsbIP(),IP.getSohuIP();