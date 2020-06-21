var navIndexList = ['','','','',''];
navIndexList[navIndex] = 'layui-this';

var navModal = `<ul class="layui-nav" lay-filter="">
    <li class="layui-nav-item ${navIndexList[0]}"><a href="/pages/index/index.html">首页</a></li>
    <li class="layui-nav-item ${navIndexList[1]}"><a href="/pages/findTeam/findTeam.html">找队伍</a></li>
    <li class="layui-nav-item ${navIndexList[2]}">
        <a href="/pages/findPerson/findPerson.html">找队员</a>
        <!-- <dl class="layui-nav-child">
            <dd><a href="">移动模块</a></dd>
            <dd><a href="">后台模版</a></dd>
            <dd><a href="">电商平台</a></dd>
        </dl> -->
    </li>
    <li class="layui-nav-item ${navIndexList[3]}"><a href="/pages/findProject/findProject.html">找项目</a></li>
    <li class="layui-nav-item ${navIndexList[4]}"><a href="/pages/me/me/me.html">个人中心<span class="layui-badge-dot"></span></a></li>
</ul>`

console.log(this.id);

layui.use('laytpl', function(){
    var laytpl = layui.laytpl;
    var getTpl = navModal,view = document.getElementById('nav');
    laytpl(getTpl).render({}, function(html){
        view.innerHTML = html;
    });
});