 ![Joel](Https://GitHub.com/joelwmulongo/fleet/blob/main/joel.gif?raw=true) <br>
 <body style="background-image:url(images/sms_bg.jpg); background-size: cover; background-repeat: no-repeat; "> Current Time: <span id="txt"></span>  
<script>  
window.onload=function(){getTime();}  
function getTime(){  
var today=new Date();  
var h=today.getHours();  
var m=today.getMinutes();  
var s=today.getSeconds();  
// add a zero in front of numbers<10  
m=checkTime(m);  
s=checkTime(s);  
document.getElementById('txt').innerHTML=h+":"+m+":"+s;  
setTimeout(function(){getTime()},1000);  
}  
//setInterval("getTime()",1000);//another way  
function checkTime(i){  
if (i<10){  
  i="0" + i;  
 }  
return i;  
}  
</script>  </body>
  <form method="get" action="http://www.google.com/search">

<div style="border:2px dotted black;padding:4px;width:15em;">
<table border="0" align="center" cellpadding="0">
<tr><td>
<input type="text"   name="q" size="25" style="color:#808080;"
maxlength="255" value="Google site search"
onfocus="if(this.value==this.defaultValue)this.value=''; this.style.color='black';" onblur="if(this.value=='')this.value=this.defaultValue; "/>
<input type="submit" value="Go!" />
<input type="hidden" name="sitesearch" value="yoursite.com" /></td></tr>
</table>
</div>

</form>
</html>
