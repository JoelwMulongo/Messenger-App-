# fleet
<html>
<BODY BGcolor=blue>
<a href="https://github.com/joelwmulongo"><img src="https://img.icons8.com/clouds/75/000000/github.png"/></a> <br>
<a href="https://stackoverflow.com/users/16901798/joel-mulongo"><img src="https://Stack_Overflow.png"/></a> <br>
<a href="https://dev.to/joelwmulongo"><img src="![image](https://user-images.githubusercontent.com/75514748/150685313-432de9ea-f380-4891-be5e-7c9a4861f5d4.png)
"/></a>
   <br>
<a href="https://twitter.com/joelwmulongo"><img src="https://www.logo.wine/a/logo/Stack_Overflow/Stack_Overflow-Logo.wine.svg" width="100" height="500"/></a>
<a href="https://github.com/joelwmulongo"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBI-e_AVQPqtwDc80GyPn43TbZ5EnhM7oJiA&usqp=CAU"/></a> &nbsp; <a href="https://twitter.com/VictorOmondi197"><img src="https://img.shields.io/twitter/follow/VictorOmondi197?label=Twitter&style=social" alt="Twitter"></a>
NEW PLACE Current Time: <span id="txt"></span>  
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
</script>  
   
   
</body>
   </html>
