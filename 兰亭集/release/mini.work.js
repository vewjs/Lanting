!function(){"use strict";function e(e,t){for(var i,o=t;o--;)for(var n=e;n--;)if(i=O[n+"&"+o])return i}function t(e){var t,i;return e.layerX||0==e.layerX?(t=e.layerX,i=e.layerY):(e.offsetX||0==e.offsetX)&&(t=e.offsetX,i=e.offsetY),{x:t,y:i}}function i(e,t){for(var i in t)e[i]=t[i];return e}var o=document.createElement("canvas"),n=o.getContext("2d");function a(e){window.devicePixelRatio&&(o.style.width=P+"px",o.style.height=b+"px",o.width=A.width,o.height=A.height,n.scale(window.devicePixelRatio,window.devicePixelRatio)),function(e){i(n,{font:"14px Arial"}),t=e,t.forEach(function(e){e.forEach(function(e){n.fillText(e.text,e.x+3,e.y+15)})});var t}(e)}var r=document.createElement("canvas"),l=r.getContext("2d");function c(e,t){window.devicePixelRatio&&(r.style.width=P+"px",r.style.height=b+"px",r.width=A.width,r.height=A.height,l.scale(window.devicePixelRatio,window.devicePixelRatio)),function(e,t){i(l,{strokeStyle:"#d0d3d7",lineCap:"butt"}),function(e,t){var i=-1;l.beginPath();for(;++i<t.length;){var o=t[i];l.moveTo(o.x,o.y),l.lineTo(o.x,o.height+.5),0<i&&(l.fillStyle="#f7f7f7",l.fillRect(o.x,0,o.width,o.height),l.fillStyle="black",l.fillText(o.text,o.x+3,o.y+15))}l.stroke()}(0,t)}(0,t)}var f=document.createElement("canvas"),d=f.getContext("2d"),h=120,s=30;function x(e,t){window.devicePixelRatio&&(f.style.width=P+"px",f.style.height=b+"px",f.width=A.width,f.height=A.height,d.scale(window.devicePixelRatio,window.devicePixelRatio)),function(e,t){i(d,{strokeStyle:"#d0d3d7",lineCap:"butt"}),function(e,t){var i=-1;d.beginPath();for(;++i<e.length;){var o=e[i][0];d.moveTo(o.x,o.y),d.lineTo(o.width+.5,o.y),0<i&&(d.fillStyle="#f7f7f7",d.fillRect(0,o.y,o.width,o.height),d.fillStyle="black",d.fillText(o.text,o.x+3,o.y+15))}d.stroke()}(e)}(e)}var u={data:function(e,t){e=e||50,t=t||50;for(var i=-1,o=.5,n=[];++i<e;){for(var a=-1,r=.5,l=[];++a<t;)l.push(w(i,a,r,o,h,s)),r+=h;n.push(l),o+=s}return n},title:function(){var e=[""].concat(W);return W.forEach(function(t){W.forEach(function(i){e.push(""+t+i)})}),e}};function w(e,t,i,o,n,a){var r,l=u.title();return r=0<e&&0==t?{id:""+e+l[t],x:i,y:o,width:n,height:a,text:e}:0<t&&0==e?{id:""+e+l[t],x:i,y:o,width:n,height:a,text:l[t]}:0==e&&0==t?{id:""+e+l[t],x:i,y:o,width:n,height:a,text:""}:{id:""+e+l[t],x:i,y:o,width:n,height:a,text:""+e+l[t]},O[parseInt(r.x)+"&"+parseInt(r.y)]=r,r}var v=document.createElement("canvas"),g=v.getContext("2d");function y(e,t){window.devicePixelRatio&&(v.style.width=P+"px",v.style.height=b+"px",v.width=A.width,v.height=A.height,g.scale(window.devicePixelRatio,window.devicePixelRatio)),function(e,t){i(g,{strokeStyle:"#d0d3d7",lineCap:"butt"}),function(e,t){var i=-1,o=-1;g.beginPath();for(;++i<e.length;){var n=e[i][0];g.moveTo(n.x,n.y),g.lineTo(P+.5,n.y),0<i&&(g.fillStyle="#f7f7f7",g.fillRect(0,n.y,n.width,n.height))}for(;++o<t.length;){var n=t[o];g.moveTo(n.x,.5),g.lineTo(n.x,b+.5),0<o&&(g.fillStyle="#f7f7f7",g.fillRect(n.x,0,n.width,n.height))}g.stroke()}(e,t),c(0,t),x(e)}(e,t)}var p={line:function(e,t,i){e.moveTo(t.x,t.y),e.lineTo(i.x,i.y)},area:function(e,t){q.beginPath(),q.clearRect(0,0,P,b),q.fillStyle="#e3edf9",q.fillRect(e.x,e.y,t.x-e.x+t.width,t.y-e.y+t.height),q.rect(e.x,e.y,t.x-e.x+t.width,t.y-e.y+t.height),q.drawImage(v,0,0,P,b),q.drawImage(o,0,0,P,b),q.strokeStyle="#006dff",q.lineWidth=2,q.stroke()},render:function(e){q.beginPath(),q.clearRect(0,0,P,b),q.drawImage(v,0,0,P,b),q.drawImage(o,0,0,P,b),e&&(q.strokeStyle="#006dff",q.lineWidth=1.5,q.rect(e.x,e.y,e.width,e.height)),q.stroke()},scrollX:function(e,t){q.beginPath(),q.clearRect(0,0,P,b),q.drawImage(o,-parseInt(e.x),-parseInt(t.y),P,b),q.drawImage(v,-parseInt(e.x),-parseInt(t.y),P,b),q.globalCompositeOperation="source-over",q.drawImage(r,-parseInt(e.x),0,P,b),q.drawImage(f,0,-parseInt(t.y),P,b),q.globalCompositeOperation="destination-over",q.stroke()},scrollY:function(e,t){q.beginPath(),q.clearRect(0,0,P,b),q.drawImage(o,-parseInt(t.x),-parseInt(e.y),P,b),q.drawImage(v,-parseInt(t.x),-parseInt(e.y),P,b),q.globalCompositeOperation="source-over",q.drawImage(r,-parseInt(t.x),0,P,b),q.drawImage(f,0,-parseInt(e.y),P,b),q.globalCompositeOperation="destination-over",q.stroke()}},m={x:.5,y:.5};function R(){var t,i,o,n=$(".sm-sheet-scrollbar-horizontal"),a=$(document);function r(a){var r=a.pageX-t;r<0&&(r=0),n.offset({left:r}),function(t){var n=e(t,i);n&&(o=n,m.x=n.x,p.scrollX(o,m))}(r)}function l(){a.off("mousemove",r).off("mouseup",l)}n.mousedown(function(n){t=n.offsetX,i=n.pageY,(o=e(n.pageX,n.pageY))&&a.mousemove(r).mouseup(l)})}function I(){var t,i,o,n=$(".sm-sheet-scrollbar-vertical"),a=$(document);function r(a){var r=a.pageY-i;r<0&&(r=0),n.offset({top:r}),function(i){var n=e(t,i);n&&(o=n,m.y=n.y,p.scrollY(o,m))}(r)}function l(){a.off("mousemove",r).off("mouseup",l)}n.mousedown(function(n){t=n.pageX,i=n.offsetY,(o=e(n.pageX,n.pageY))&&a.mousemove(r).mouseup(l)})}var P,b,T=$("canvas"),k=$("textarea"),S={};function X(i){console.log(q.measureText("foo"));var o,n=t(i);if(k.hide(),S=o=e(n.x,n.y)){p.render(S),T.mousemove(function(i){var n=t(i);(o.x+o.width<n.x||o.y+o.height<n.y)&&(o=e(n.x,n.y))&&p.area(S,o)})}}function C(e){T.off("mousemove"),k.off("change")}function Y(i){var o=t(i),a=e(o.x,o.y);a&&(function(e){var t=e.y+T.position().top,i=e.x+T.position().left;k.show().focus(),k.css({left:i,top:t,width:"116px",height:"26px"}),k.val(e.text)}(a),function(e){k.change(function(){e.text=this.value,function(e){n.clearRect(e.x,e.y,e.width,e.height),n.fillText(e.text,e.x+3,e.y+15)}(e),p.render()})}(a))}var E,O={},W=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],A=document.querySelector("#canvas"),q=A.getContext("2d");P=$(A).parent().width(),b=$(A).parent().height(),window.devicePixelRatio&&(A.style.width=P+"px",A.style.height=b+"px",A.width=P*window.devicePixelRatio,A.height=b*window.devicePixelRatio,q.scale(window.devicePixelRatio,window.devicePixelRatio),a(E=u.data()),y(E,E[0]),p.render(),T.mousedown(X).mouseup(C).dblclick(Y),R(),I())}();
