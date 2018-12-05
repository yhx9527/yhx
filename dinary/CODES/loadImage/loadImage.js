function lazyload(){
    var images = document.getElementsByTagName('img');
    var len = images.length;
    var n = 0;
    return function(){
        console.log('加载')
        var seeHeight = document.documentElement.clientHeight
        //浏览器兼容
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        for(var i=n;i<len;i++){
            if(images[i].offsetTop < seeHeight + scrollTop){
                if(images[i].getAttribute('src') === 'images/loading.gif'){
                    images[i].src=images[i].getAttribute('data-src')
                }
                n=n+1
            }
        }
    }
}
var loadImages = lazyload();
loadImages()
//window.addEventListener('scroll',throttle(loadImages,1000),false);
window.addEventListener('scroll',debounce(loadImages,100),false);
