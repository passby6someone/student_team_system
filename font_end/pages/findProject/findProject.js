//nav index
const navIndex = 3;

const params = parseUrl(this.location.href);

const socket = 'http://www.misakiemi.cn:3003';

function setHeight(){
  if(document.querySelector('#projectList').parentElement.parentElement.clientHeight < window.innerHeight){
    console.log(true);
    setTimeout(() => {
      var height = 0;
    var slibing = document.querySelector('#projectList').parentElement.parentElement.children;
    for(let i = 0;i < slibing.length;i++){
      height += slibing[i].clientHeight;
    }
    height = window.innerHeight - height + document.querySelector('#projectList').parentElement.clientHeight;
    // document.querySelector('#projectList').parentElement.parentElement.children.forEach(cur=> height += cur.clientHeight );
    document.querySelector('#projectList').parentElement.setAttribute('style','min-height:'+height+'px');
    }, 100);
  }
}

setHeight();

layui.use('element', function () {
  var element = layui.element;

  //…
});

layui.use('laytpl', async function () {
  var laytpl = layui.laytpl;

  const modal0 = `<div class="layui-row">
                    <a href="/pages/findProject/findProject.html?field=type&value=all" class="layui-col-md2" style="text-align: center;color: #01AAED;">全部</a>
                    {{#  layui.each(d.list, function(index, item){ }}
                    <a href="/pages/findProject/findProject.html?field=type&value={{ item.type }}" class="layui-col-md2" style="text-align: center;color: #01AAED;">{{ item.type }}</a>
                    {{# }); }}
                </div>`;

  var majorList = await fetch(socket + '/getDistinct?table=project&field=type')
    .then(res => res.json())
    .then(res => res);

  console.log(majorList);

  var data = { //数据
    list: majorList
  }
  var getTpl = modal0, view = document.getElementById('typeSearch');
  laytpl(getTpl).render(data, function (html) {
    view.innerHTML = html;
  });

  const modal1 = `<div class="layui-row">
                    <a href="/pages/findProject/findProject.html?field=school&value=all" class="layui-col-md2" style="text-align: center;color: #01AAED;">全部</a>
                    {{#  layui.each(d.list, function(index, item){ }}
                    <a href="/pages/findProject/findProject.html?field=school&value={{ item.school }}" class="layui-col-md2" style="text-align: center;color: #01AAED;">{{ item.school }}</a>
                    {{# }); }}
                </div>`;

  var schoolList = await fetch(socket + '/getDistinct?table=project&field=school')
    .then(res => res.json())
    .then(res => res);

  console.log(schoolList);

  var data = { //数据
    list: schoolList
  }
  var getTpl = modal1, view = document.getElementById('schoolSearch');
  laytpl(getTpl).render(data, function (html) {
    view.innerHTML = html;
  });
})

layui.use(['laypage', 'laytpl'],async function () {
  var laypage = layui.laypage;
  var laytpl = layui.laytpl;

  const modal = `<div class="layui-row">
  <div class="layui-col-md4">
      项目名称
  </div>
  <div class="layui-col-md4">
      学校
  </div>
  <div class="layui-col-md4">
      项目所属领域
  </div>
</div>
{{#  layui.each(d.list, function(index, item){ }}
<a href="/pages/detail/projectDetail.html?type=project&id={{ item.id }}">
  <div class="layui-row">
    <div class="layui-col-md4" style="text-align:left;padding-left:20px;text-overflow: ellipsis;word-break: keep-all;white-space: nowrap;overflow: hidden;">
        <img src="https://t3.chei.com.cn/ncss/cy/web/img/Investor.png" style="width: 40px;border-radius: 50%;border: 1px solid #e6e6e6;margin-right: 5px;" alt="">
        {{item.name}}
    </div>
    <div class="layui-col-md4">
      {{item.school}}
    </div>
    <div class="layui-col-md4">
      {{item.type}}
    </div>
  </div>
</a>
{{# }); }}`;

  var projectList = await fetch(socket + `/getProjectInfo?field=${params['field']}&value=${params['value']}`)
    .then(res => res.json())
    .then(res => res);

  console.log(projectList);

  //执行一个laypage实例
  laypage.render({
    elem: 'pagesIndex' //注意，这里的 test1 是 ID，不用加 # 号
    , count: projectList.length //数据总数，从服务端得到
    ,jump: function(obj, first){
      //obj包含了当前分页的所有参数，比如：
      // console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
      // console.log(obj.limit); //得到每页显示的条数

      var data = { //数据
        list: projectList.slice((obj.curr - 1)*obj.limit, obj.curr*obj.limit + obj.limit)
      }
      var getTpl = modal, view = document.getElementById('projectList');
      laytpl(getTpl).render(data, function (html) {
        view.innerHTML = html;
      });
      
      //首次不执行
      // if(!first){
      //   //do something
      // }
    }
  });
});

