$(document).ready(function(){
    var baseUrl='http://118.126.116.146'
    var token=''
    //输入不为空的简单判定
    function validate(data){
        return data.every(item=>{
            return item['value'] !== ''
        })
    }
//注册
function register(){
    var data=  $("#registerForm").serializeArray()
    if(validate(data)){
        $.post(baseUrl+'/register',
        data,
        function(data){
            console.log('返回的数据'+JSON.stringify(data))
        })
    }else{
        alert('输入不能为空')
    }
}
$("#register").click(register);

//登录
function login(){
    var data=  $("#loginForm").serializeArray()
    if(validate(data)){
        $.post(baseUrl+'/login',
        data,
        function(data){
            token = data.data['access-token']
            $.ajaxSetup({
                headers:{
                    'Authorization': 'Bearer '+token
                }
            })
            console.log('返回的数据'+JSON.stringify(data))
        })
    }else{
        alert('输入不能为空')
    }
}
$("#login").click(login);

//以下均要先登录才能正常请求
//输入uid爬取数据
function crawl(){
    var data=  $("#searchForm").serializeArray()
    if(validate(data)){
        $.post(baseUrl+'/privacy',
        data,
        function(data){
            console.log('返回的数据'+JSON.stringify(data))
        })
    }else{
        alert('输入不能为空')
    }
}
$("#search").click(crawl);

//检查微博是否已爬完
function checkSearch(){
    $.get(baseUrl+'/privacy',
        function(data){
            if(data.data['flag']==2){
                alert('数据已爬完')
            }
            console.log('返回的数据'+JSON.stringify(data))
        })
}
$('#checkSearch').click(checkSearch)
//重置flag，已便可以重新爬取微博
function setFlag(){
    $.ajax({
        url: baseUrl+'/privacy',
        type: 'PUT',
        success: function(data){
            console.log('返回的数据'+JSON.stringify(data))
        }
    })
}
$('#setFlag').click(setFlag)

//分析数据
function analysis(){
     $.post(baseUrl+'/analysis',
        {},
        function(data){
            console.log('返回的数据'+JSON.stringify(data))
        })
}
$('#analysis').click(analysis)

//查询数据是否爬完
function setImage(data){
    var img=new Image();
    img.src='data:image/png;base64, '+data;
    document.getElementById('group').appendChild(img);
}
function checkAnalysis(){
    $.get(baseUrl+'/analysis',
        function(data){
            if(data.data['flag']==4){
                console.log('数据已分析完成')
                setImage(data.data.contents.first_data.image)
            }
            console.log('返回的数据'+JSON.stringify(data))
        })
}
$('#checkAnalysis').click(checkAnalysis)
})
