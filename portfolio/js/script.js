// 按钮点击事件
const btn = document.getElementById('btn');
const msg = document.getElementById('msg');
let flag = false;
btn.addEventListener('click', function(){
    if(!flag){
        msg.innerText = "页面已加载完成，往下滑动查看作品！";
        flag = true;
    }else{
        msg.innerText = "你已经点击过按钮啦！";
    }
})
