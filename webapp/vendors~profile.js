(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{18:function(t,r,e){var n,o,i=function(){var t=function(t,n){var l=t,h=r[n],v=null,d=0,w=null,p=[],y={},B=function(t,r){v=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(d=4*l+17),k(0,0),k(d-7,0),k(0,d-7),A(),C(),M(t,r),l>=7&&b(t),null==w&&(w=m(l,h,p)),x(w,r)},k=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||d<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||d<=r+n||(v[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},C=function(){for(var t=8;t<d-8;t+=1)null==v[t][6]&&(v[t][6]=t%2==0);for(var r=8;r<d-8;r+=1)null==v[6][r]&&(v[6][r]=r%2==0)},A=function(){for(var t=e.getPatternPosition(l),r=0;r<t.length;r+=1)for(var n=0;n<t.length;n+=1){var o=t[r],i=t[n];if(null==v[o][i])for(var a=-2;a<=2;a+=1)for(var u=-2;u<=2;u+=1)v[o+a][i+u]=-2==a||2==a||-2==u||2==u||0==a&&0==u}},b=function(t){for(var r=e.getBCHTypeNumber(l),n=0;n<18;n+=1){var o=!t&&1==(r>>n&1);v[Math.floor(n/3)][n%3+d-8-3]=o}for(n=0;n<18;n+=1)o=!t&&1==(r>>n&1),v[n%3+d-8-3][Math.floor(n/3)]=o},M=function(t,r){for(var n=h<<3|r,o=e.getBCHTypeInfo(n),i=0;i<15;i+=1){var a=!t&&1==(o>>i&1);i<6?v[i][8]=a:i<8?v[i+1][8]=a:v[d-15+i][8]=a}for(i=0;i<15;i+=1)a=!t&&1==(o>>i&1),i<8?v[8][d-i-1]=a:i<9?v[8][15-i-1+1]=a:v[8][15-i-1]=a;v[d-8][8]=!t},x=function(t,r){for(var n=-1,o=d-1,i=7,a=0,u=e.getMaskFunction(r),f=d-1;f>0;f-=2)for(6==f&&(f-=1);;){for(var c=0;c<2;c+=1)if(null==v[o][f-c]){var g=!1;a<t.length&&(g=1==(t[a]>>>i&1)),u(o,f-c)&&(g=!g),v[o][f-c]=g,-1==(i-=1)&&(a+=1,i=7)}if((o+=n)<0||d<=o){o-=n,n=-n;break}}},m=function(t,r,n){for(var u=i.getRSBlocks(t,r),f=a(),c=0;c<n.length;c+=1){var g=n[c];f.put(g.getMode(),4),f.put(g.getLength(),e.getLengthInBits(g.getMode(),t)),g.write(f)}var l=0;for(c=0;c<u.length;c+=1)l+=u[c].dataCount;if(f.getLengthInBits()>8*l)throw"code length overflow. ("+f.getLengthInBits()+">"+8*l+")";for(f.getLengthInBits()+4<=8*l&&f.put(0,4);f.getLengthInBits()%8!=0;)f.putBit(!1);for(;!(f.getLengthInBits()>=8*l||(f.put(236,8),f.getLengthInBits()>=8*l));)f.put(17,8);return function(t,r){for(var n=0,i=0,a=0,u=new Array(r.length),f=new Array(r.length),c=0;c<r.length;c+=1){var g=r[c].dataCount,l=r[c].totalCount-g;i=Math.max(i,g),a=Math.max(a,l),u[c]=new Array(g);for(var h=0;h<u[c].length;h+=1)u[c][h]=255&t.getBuffer()[h+n];n+=g;var s=e.getErrorCorrectPolynomial(l),v=o(u[c],s.getLength()-1).mod(s);for(f[c]=new Array(s.getLength()-1),h=0;h<f[c].length;h+=1){var d=h+v.getLength()-f[c].length;f[c][h]=d>=0?v.getAt(d):0}}var w=0;for(h=0;h<r.length;h+=1)w+=r[h].totalCount;var p=new Array(w),y=0;for(h=0;h<i;h+=1)for(c=0;c<r.length;c+=1)h<u[c].length&&(p[y]=u[c][h],y+=1);for(h=0;h<a;h+=1)for(c=0;c<r.length;c+=1)h<f[c].length&&(p[y]=f[c][h],y+=1);return p}(f,u)};y.addData=function(t,r){var e=null;switch(r=r||"Byte"){case"Numeric":e=u(t);break;case"Alphanumeric":e=f(t);break;case"Byte":e=c(t);break;case"Kanji":e=g(t);break;default:throw"mode:"+r}p.push(e),w=null},y.isDark=function(t,r){if(t<0||d<=t||r<0||d<=r)throw t+","+r;return v[t][r]},y.getModuleCount=function(){return d},y.make=function(){if(l<1){for(var t=1;t<40;t++){for(var r=i.getRSBlocks(t,h),n=a(),o=0;o<p.length;o++){var u=p[o];n.put(u.getMode(),4),n.put(u.getLength(),e.getLengthInBits(u.getMode(),t)),u.write(n)}var f=0;for(o=0;o<r.length;o++)f+=r[o].dataCount;if(n.getLengthInBits()<=8*f)break}l=t}B(!1,function(){for(var t=0,r=0,n=0;n<8;n+=1){B(!0,n);var o=e.getLostPoint(y);(0==n||t>o)&&(t=o,r=n)}return r}())},y.createTableTag=function(t,r){t=t||2;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+(r=void 0===r?4*t:r)+"px;",e+='">',e+="<tbody>";for(var n=0;n<y.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<y.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=y.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return(e+="</tbody>")+"</table>"},y.createSvgTag=function(t,r,e,n){var o={};"object"==typeof arguments[0]&&(t=(o=arguments[0]).cellSize,r=o.margin,e=o.alt,n=o.title),t=t||2,r=void 0===r?4*t:r,(e="string"==typeof e?{text:e}:e||{}).text=e.text||null,e.id=e.text?e.id||"qrcode-description":null,(n="string"==typeof n?{text:n}:n||{}).text=n.text||null,n.id=n.text?n.id||"qrcode-title":null;var i,a,u,f,c=y.getModuleCount()*t+2*r,g="";for(f="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",g+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',g+=o.scalable?"":' width="'+c+'px" height="'+c+'px"',g+=' viewBox="0 0 '+c+" "+c+'" ',g+=' preserveAspectRatio="xMinYMin meet"',g+=n.text||e.text?' role="img" aria-labelledby="'+L([n.id,e.id].join(" ").trim())+'"':"",g+=">",g+=n.text?'<title id="'+L(n.id)+'">'+L(n.text)+"</title>":"",g+=e.text?'<description id="'+L(e.id)+'">'+L(e.text)+"</description>":"",g+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',g+='<path d="',a=0;a<y.getModuleCount();a+=1)for(u=a*t+r,i=0;i<y.getModuleCount();i+=1)y.isDark(a,i)&&(g+="M"+(i*t+r)+","+u+f);return(g+='" stroke="transparent" fill="black"/>')+"</svg>"},y.createDataURL=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=y.getModuleCount()*t+2*r,n=r,o=e-r;return s(e,e,(function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),a=Math.floor((e-n)/t);return y.isDark(a,i)?0:1}return 1}))},y.createImgTag=function(t,r,e){t=t||2,r=void 0===r?4*t:r;var n=y.getModuleCount()*t+2*r,o="";return o+="<img",o+=' src="',o+=y.createDataURL(t,r),o+='"',o+=' width="',o+=n,o+='"',o+=' height="',o+=n,o+='"',e&&(o+=' alt="',o+=L(e),o+='"'),o+"/>"};var L=function(t){for(var r="",e=0;e<t.length;e+=1){var n=t.charAt(e);switch(n){case"<":r+="&lt;";break;case">":r+="&gt;";break;case"&":r+="&amp;";break;case'"':r+="&quot;";break;default:r+=n}}return r};return y.createASCII=function(t,r){if((t=t||1)<2)return function(t){t=void 0===t?2:t;var r,e,n,o,i,a=1*y.getModuleCount()+2*t,u=t,f=a-t,c={"██":"█","█ ":"▀"," █":"▄","  ":" "},g={"██":"▀","█ ":"▀"," █":" ","  ":" "},l="";for(r=0;r<a;r+=2){for(n=Math.floor((r-u)/1),o=Math.floor((r+1-u)/1),e=0;e<a;e+=1)i="█",u<=e&&e<f&&u<=r&&r<f&&y.isDark(n,Math.floor((e-u)/1))&&(i=" "),u<=e&&e<f&&u<=r+1&&r+1<f&&y.isDark(o,Math.floor((e-u)/1))?i+=" ":i+="█",l+=t<1&&r+1>=f?g[i]:c[i];l+="\n"}return a%2&&t>0?l.substring(0,l.length-a-1)+Array(a+1).join("▀"):l.substring(0,l.length-1)}(r);t-=1,r=void 0===r?2*t:r;var e,n,o,i,a=y.getModuleCount()*t+2*r,u=r,f=a-r,c=Array(t+1).join("██"),g=Array(t+1).join("  "),l="",h="";for(e=0;e<a;e+=1){for(o=Math.floor((e-u)/t),h="",n=0;n<a;n+=1)i=1,u<=n&&n<f&&u<=e&&e<f&&y.isDark(o,Math.floor((n-u)/t))&&(i=0),h+=i?c:g;for(o=0;o<t;o+=1)l+=h+"\n"}return l.substring(0,l.length-1)},y.renderTo2dContext=function(t,r){r=r||2;for(var e=y.getModuleCount(),n=0;n<e;n++)for(var o=0;o<e;o++)t.fillStyle=y.isDark(n,o)?"black":"white",t.fillRect(n*r,o*r,r,r)},y};t.stringToBytes=(t.stringToBytesFuncs={default:function(t){for(var r=[],e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r}}).default,t.createStringToBytes=function(t,r){var e=function(){for(var e=h(t),n=function(){var t=e.read();if(-1==t)throw"eof";return t},o=0,i={};;){var a=e.read();if(-1==a)break;var u=n(),f=n()<<8|n();i[String.fromCharCode(a<<8|u)]=f,o+=1}if(o!=r)throw o+" != "+r;return i}(),n="?".charCodeAt(0);return function(t){for(var r=[],o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var a=e[t.charAt(o)];"number"==typeof a?(255&a)==a?r.push(a):(r.push(a>>>8),r.push(255&a)):r.push(n)}}return r}};var r={L:1,M:0,Q:3,H:2},e=function(){var t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],r={},e=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r};return r.getBCHTypeInfo=function(t){for(var r=t<<10;e(r)-e(1335)>=0;)r^=1335<<e(r)-e(1335);return 21522^(t<<10|r)},r.getBCHTypeNumber=function(t){for(var r=t<<12;e(r)-e(7973)>=0;)r^=7973<<e(r)-e(7973);return t<<12|r},r.getPatternPosition=function(r){return t[r-1]},r.getMaskFunction=function(t){switch(t){case 0:return function(t,r){return(t+r)%2==0};case 1:return function(t,r){return t%2==0};case 2:return function(t,r){return r%3==0};case 3:return function(t,r){return(t+r)%3==0};case 4:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case 5:return function(t,r){return t*r%2+t*r%3==0};case 6:return function(t,r){return(t*r%2+t*r%3)%2==0};case 7:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw"bad maskPattern:"+t}},r.getErrorCorrectPolynomial=function(t){for(var r=o([1],0),e=0;e<t;e+=1)r=r.multiply(o([1,n.gexp(e)],0));return r},r.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case 1:return 10;case 2:return 9;case 4:case 8:return 8;default:throw"mode:"+t}else if(r<27)switch(t){case 1:return 12;case 2:return 11;case 4:return 16;case 8:return 10;default:throw"mode:"+t}else{if(!(r<41))throw"type:"+r;switch(t){case 1:return 14;case 2:return 13;case 4:return 16;case 8:return 12;default:throw"mode:"+t}}},r.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,a=t.isDark(n,o),u=-1;u<=1;u+=1)if(!(n+u<0||r<=n+u))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==u&&0==f||a==t.isDark(n+u,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(n=0;n<r-1;n+=1)for(o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(n=0;n<r;n+=1)for(o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(o=0;o<r;o+=1)for(n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);var g=0;for(o=0;o<r;o+=1)for(n=0;n<r;n+=1)t.isDark(n,o)&&(g+=1);return e+Math.abs(100*g/r/r-50)/5*10},r}(),n=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(e=0;e<255;e+=1)r[t[e]]=e;return{glog:function(t){if(t<1)throw"glog("+t+")";return r[t]},gexp:function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]}}}();function o(t,r){if(void 0===t.length)throw t.length+"/"+r;var e=function(){for(var e=0;e<t.length&&0==t[e];)e+=1;for(var n=new Array(t.length-e+r),o=0;o<t.length-e;o+=1)n[o]=t[o+e];return n}(),i={getAt:function(t){return e[t]},getLength:function(){return e.length},multiply:function(t){for(var r=new Array(i.getLength()+t.getLength()-1),e=0;e<i.getLength();e+=1)for(var a=0;a<t.getLength();a+=1)r[e+a]^=n.gexp(n.glog(i.getAt(e))+n.glog(t.getAt(a)));return o(r,0)},mod:function(t){if(i.getLength()-t.getLength()<0)return i;for(var r=n.glog(i.getAt(0))-n.glog(t.getAt(0)),e=new Array(i.getLength()),a=0;a<i.getLength();a+=1)e[a]=i.getAt(a);for(a=0;a<t.getLength();a+=1)e[a]^=n.gexp(n.glog(t.getAt(a))+r);return o(e,0).mod(t)}};return i}var i=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},n={getRSBlocks:function(n,o){var i=function(e,n){switch(n){case r.L:return t[4*(e-1)+0];case r.M:return t[4*(e-1)+1];case r.Q:return t[4*(e-1)+2];case r.H:return t[4*(e-1)+3];default:return}}(n,o);if(void 0===i)throw"bad rs block @ typeNumber:"+n+"/errorCorrectionLevel:"+o;for(var a=i.length/3,u=[],f=0;f<a;f+=1)for(var c=i[3*f+0],g=i[3*f+1],l=i[3*f+2],h=0;h<c;h+=1)u.push(e(g,l));return u}};return n}(),a=function(){var t=[],r=0,e={getBuffer:function(){return t},getAt:function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},put:function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},getLengthInBits:function(){return r},putBit:function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1}};return e},u=function(t){var r=t,e={getMode:function(){return 1},getLength:function(t){return r.length},write:function(t){for(var e=r,o=0;o+2<e.length;)t.put(n(e.substring(o,o+3)),10),o+=3;o<e.length&&(e.length-o==1?t.put(n(e.substring(o,o+1)),4):e.length-o==2&&t.put(n(e.substring(o,o+2)),7))}},n=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+o(t.charAt(e));return r},o=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return e},f=function(t){var r=t,e={getMode:function(){return 2},getLength:function(t){return r.length},write:function(t){for(var e=r,o=0;o+1<e.length;)t.put(45*n(e.charAt(o))+n(e.charAt(o+1)),11),o+=2;o<e.length&&t.put(n(e.charAt(o)),6)}},n=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return e},c=function(r){var e=t.stringToBytes(r);return{getMode:function(){return 4},getLength:function(t){return e.length},write:function(t){for(var r=0;r<e.length;r+=1)t.put(e[r],8)}}},g=function(r){var e=t.stringToBytesFuncs.SJIS;if(!e)throw"sjis not supported.";!function(t,r){var n=e("友");if(2!=n.length||38726!=(n[0]<<8|n[1]))throw"sjis not supported."}();var n=e(r);return{getMode:function(){return 8},getLength:function(t){return~~(n.length/2)},write:function(t){for(var r=n,e=0;e+1<r.length;){var o=(255&r[e])<<8|255&r[e+1];if(33088<=o&&o<=40956)o-=33088;else{if(!(57408<=o&&o<=60351))throw"illegal char at "+(e+1)+"/"+o;o-=49472}o=192*(o>>>8&255)+(255&o),t.put(o,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)}}},l=function(){var t=[],r={writeByte:function(r){t.push(255&r)},writeShort:function(t){r.writeByte(t),r.writeByte(t>>>8)},writeBytes:function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},writeString:function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},toByteArray:function(){return t},toString:function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+"]"}};return r},h=function(t){var r=t,e=0,n=0,o=0,i={read:function(){for(;o<8;){if(e>=r.length){if(0==o)return-1;throw"unexpected end of file./"+o}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|a(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i}},a=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw"c:"+t};return i},s=function(t,r,e){for(var n=function(t,r){var e=t,n=r,o=new Array(t*r),i={setPixel:function(t,r,n){o[r*e+t]=n},write:function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(n),t.writeByte(0);var r=a(2);t.writeByte(2);for(var o=0;r.length-o>255;)t.writeByte(255),t.writeBytes(r,o,255),o+=255;t.writeByte(r.length-o),t.writeBytes(r,o,r.length-o),t.writeByte(0),t.writeString(";")}},a=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,i=u(),a=0;a<r;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var f=l(),c=function(t){var r=t,e=0,n=0;return{write:function(t,o){if(t>>>o!=0)throw"length over";for(;e+o>=8;)r.writeByte(255&(t<<e|n)),o-=8-e,t>>>=8-e,n=0,e=0;n|=t<<e,e+=o},flush:function(){e>0&&r.writeByte(n)}}}(f);c.write(r,n);var g=0,h=String.fromCharCode(o[g]);for(g+=1;g<o.length;){var s=String.fromCharCode(o[g]);g+=1,i.contains(h+s)?h+=s:(c.write(i.indexOf(h),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(h+s)),h=s)}return c.write(i.indexOf(h),n),c.write(e,n),c.flush(),f.toByteArray()},u=function(){var t={},r=0,e={add:function(n){if(e.contains(n))throw"dup key:"+n;t[n]=r,r+=1},size:function(){return r},indexOf:function(r){return t[r]},contains:function(r){return void 0!==t[r]}};return e};return i}(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var a=l();n.write(a);for(var u=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(a(63&t))},a=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw"n:"+t};return o.writeByte=function(n){for(t=t<<8|255&n,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,a=0;a<o;a+=1)n+="="},o.toString=function(){return n},o}(),f=a.toByteArray(),c=0;c<f.length;c+=1)u.writeByte(f[c]);return u.flush(),"data:image/gif;base64,"+u};return t}();i.stringToBytesFuncs["UTF-8"]=function(t){return function(t){for(var r=[],e=0;e<t.length;e++){var n=t.charCodeAt(e);n<128?r.push(n):n<2048?r.push(192|n>>6,128|63&n):n<55296||n>=57344?r.push(224|n>>12,128|n>>6&63,128|63&n):(e++,n=65536+((1023&n)<<10|1023&t.charCodeAt(e)),r.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n))}return r}(t)},void 0===(o="function"==typeof(n=function(){return i})?n.apply(r,[]):n)||(t.exports=o)}}]);