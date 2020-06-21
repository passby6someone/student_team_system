var params = parseUrl(this.location.href);

console.log(params);

const socket = 'http://www.misakiemi.cn:3003'
async function getUserInfo(){
    var data = await fetch(socket + `/getUserInfo?type=self&id=${params['id']}`)
        .then(res => res.json())
        .then(res => res);
    return data;
}

async function page(){
    var userData = await getUserInfo();
    console.log(userData);
    var isCaptain = userData['isCaptain'] === 'y' ? true : false;
    const modal = `<div class="layui-row layui-col-space10">
    {{#  layui.each(d.list, function(index, item){ }}
    <div class="layui-col-sm4">
        <div class="layui-card" style="margin: 10px 0px;">
            <div class="layui-card-header" style="padding: 10px 0px;">
                <a href=""><h2 class="item-title">{{ item.name }}</h2></a>
            </div>
            <div class="layui-card-body">
                <div class="layui-row" style="margin-top: 10px;">
                    <div class="layui-col-sm12" style="text-align: center;">
                        申请学校：{{ item.school }}
                    </div>
                </div>
                <div class="layui-row" style="margin-top: 10px;">
                    <div class="layui-col-sm12" style="text-align: center;">
                        所属领域：{{ item.type === undefined ? item.industry : item.type }}
                    </div>
                </div>
                <div class="layui-row" style="margin-top: 10px;display: flex;justify-content: center;">
                    <div class="layui-col-sm8" style="text-align: center;">
                        <a href="../{{ d.type }}/edit{{ d.Uptype }}.html?id={{ item.id }}" target="_blank"><button class="layui-btn layui-btn-normal" style="width: 100%;">编辑</button></a>
                    </div>
                </div>
                <div class="layui-row" style="margin-top: 10px;display: flex;justify-content: center;">
                    <div class="layui-col-sm8" style="text-align: center;">
                        <button class="layui-btn layui-btn-danger" style="width: 100%;">删除</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{# }); }}
    {{# if(d.isCaptain&&d.type==='project'){ }}
    <div class="layui-col-sm4">
        <a href="/pages/me/project/createProject.html?id={{ d.id }}" target="_blank">
        <div class="layui-card" style="margin: 10px 0px;height: 247px;">
            <div class="layui-card-body" style="height: 100%;display: flex;flex-direction: column;align-items: center;justify-content: space-around;">
                <span class="layui-icon layui-icon-addition" style="font-size: 100px;"></span>
                <p>创建项目</p>
            </div>
        </div>
        </a>
    </div>
    {{# } }}
    {{# if(d.type==='team'){ }}
    <div class="layui-col-sm4">
        <a href="/pages/me/team/createTeam.html?id={{ d.id }}" target="_blank">
        <div class="layui-card" style="margin: 10px 0px;height: 247px;">
            <div class="layui-card-body" style="height: 100%;display: flex;flex-direction: column;align-items: center;justify-content: space-around;">
                <span class="layui-icon layui-icon-addition" style="font-size: 100px;"></span>
                <p>创建团队</p>
            </div>
        </div>
        </a>
    </div>
    {{# } }}
    </div>`;

    layui.use('laytpl', async function(){
        var laytpl = layui.laytpl;

        var data = await fetch(socket + `/getUserInfo?type=${params['type']}&creater=${params['creater']}&id=${params['id']}`)
            .then(res => res.json())
            .then(res => res);

        console.log(data);

        var data = {
            id:params['id'],
            isCaptain:isCaptain,
            type:params['type'],
            Uptype:params['type'].slice(0,1).toUpperCase()+params['type'].slice(1),
            list:data
        }
        console.log(data);

        var view = document.getElementById('container');
        laytpl(modal).render(data, function(html){
            view.innerHTML = html;
        });
    });
}

page();