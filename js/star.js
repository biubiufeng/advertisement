$(document).ready(function(){
$(".tab-1-1").css("display","none");
$(".grid2").click(function(){
    $(".tab-1-1").css("display","");
      $(".tab-1-0").css("display","none");
});
$(".grid1").click(function(){
    $(".tab-1-1").css("display","none");
      $(".tab-1-0").css("display","");
});

//form

function isPoneAvailable(str) {
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (!myreg.test(str)) {
    return false;
  } else {
    return true;
  }
}

//submit
/*
function loginSubmit() {
  var text_mobile = $("#phone").val();
  $.post(
    "submit.php", {
      hiddenMobile: text_mobile,
      hiddenPass: pwd_password
    },
    function(data) {
      if (data == 1) {
      alert("提交成功，我们会派专人与您联系")
      } else {
        console.log("用户名或密码不正确");
      }
    }
  )
}
*/
$(".submit").click(function(){
  var text_mobile = $("#phone").val();
   if(!isPoneAvailable(text_mobile)){
     alert("请输入正确的手机号！")
     $("#phone").val("");
   }else{
     alert("提交成功，我们会派专人与您联系")
        $("#phone").val("");
   }
})
//font
function ranColor(){
var fontColor=$(".banner_font").css("color");
var red = parseInt(Math.random()*257).toString(16);
var blue = parseInt(Math.random()*257).toString(16);
var green= parseInt(Math.random()*257).toString(16);
var randomColor = '#'+red+blue+green;
$(".banner_font").css("color",randomColor);
}
setInterval(ranColor,2000);

var moveTextWidthAll=$(".move-text").width();
var news=$(".breaking_news").width();
var newMarquee=moveTextWidthAll-news;
$("marquee").width(newMarquee);
})
