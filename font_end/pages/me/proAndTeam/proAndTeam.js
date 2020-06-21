const params = parseUrl(this.location.href);
const cookieParams = parseCookie(document.cookie);

(function setId(){
    var ifr = document.querySelectorAll('iframe');
    var url = ifr[0].getAttribute('src');
    ifr[0].setAttribute('src',url+'&id='+cookieParams['id']);
    var url = ifr[1].getAttribute('src');
    ifr[1].setAttribute('src',url+'&id='+cookieParams['id']);
})();

(function setPage(){
    if(params['type'] === 'team'){
        document.querySelector('li[lay-id="tab1"]').innerHTML = '我创建的团队';
        document.querySelector('li[lay-id="tab2"]').innerHTML = '我参与的团队';
        document.querySelectorAll('iframe')[0].setAttribute('src','../cardBox/cardBox.html?type=team&creater=me&id='+cookieParams['id']);
        document.querySelectorAll('iframe')[1].setAttribute('src','../cardBox/cardBox.html?type=team&creater=others&id='+cookieParams['id']);
    }
})();

// function changeTab(tabIndex){
//     layui.use('element', function(){
//         var element = layui.element;
//         element.tabChange('tab', tabIndex);
//     });
// }

layui.use('element', function(){
    var element = layui.element;
});