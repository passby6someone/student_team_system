const socket = 'http://www.misakiemi.cn:3003';

const params = parseUrl(this.location.href);

function swapButton(){
    var first = true;
    return (function(){
        if(first){
            console.log(2333)
            document.querySelector('button').setAttribute('class','layui-btn layui-btn-disabled');
            // layui-icon-ok
            document.querySelector('button').innerHTML = '<sapn class="layui-icon layui-icon-ok"></sapn>已申请';
            first = false;
        }
    })();
}

const personModal = `
    <div class="layui-row">
        <div class="layui-col-md12" style="display: flex;justify-content:space-between;align-items:center;">
        <div style="display:flex;">
            <div style="padding:10px 20px;">
                <img src="https://t3.chei.com.cn/ncss/cy/web/img/Investor.png" style="width: 80px;border-radius: 50%;border: 1px solid #e6e6e6;margin-right: 5px;" alt="">
            </div>
            <div  style="display: flex;flex-direction: column;justify-content: space-around;">
                <h1>{{ d.name }}</h1>
                <h2>{{ d.school }} {{ d.major }}</h2>
            </div>
        </div>
        <button class="layui-btn" style="margin-right: 20px;" onclick="swapButton()"><sapn class="layui-icon layui-icon-add-circle"></sapn>申请加入</button>
        </div>
    </div>

    <div class="layui-row">
        <div class="layui-card">
            <div class="layui-card-header">自我介绍</div>
            <div class="layui-card-body">
            <p>{{ d.introduction }}</p>
            </div>
        </div>
    </div>

    <div class="layui-row">
        <div class="layui-card">
            <div class="layui-card-header">技能</div>
            <div class="layui-card-body">
                <p>{{ d.skill }}</p>
            </div>
        </div>
    </div>

    <div class="layui-row">
        <div class="layui-card">
            <div class="layui-card-header">邮箱</div>
            <div class="layui-card-body">
                <p>{{ d.email }}</p>
            </div>
        </div>
    </div>`;

const projectModal = `
    <div class="layui-row">
        <div class="layui-col-md12" style="display: flex;justify-content:space-between;align-items:center;">
            <div style="display:flex;">
                <div style="padding:10px 20px;">
                    <img src="https://t3.chei.com.cn/ncss/cy/web/img/Investor.png" style="width: 80px;border-radius: 50%;border: 1px solid #e6e6e6;margin-right: 5px;" alt="">
                </div>
                <div  style="display: flex;flex-direction: column;justify-content: space-around;">
                    <h1>{{ d.name }}</h1>
                    <h2>{{ d.school }} {{ d.team }}团队</h2>
                </div>
            </div>
            <button class="layui-btn" style="margin-right: 20px;" onclick="swapButton()"><sapn class="layui-icon layui-icon-add-circle"></sapn>申请加入</button>
        </div>
    </div>

    <div class="layui-row">
        <div class="layui-card">
            <div class="layui-card-header">所属领域</div>
            <div class="layui-card-body">
                <p>{{ d.type }}</p>
            </div>
        </div>
    </div>

    <div class="layui-row">
        <div class="layui-card">
            <div class="layui-card-header">项目概述</div>
            <div class="layui-card-body">
            <p>{{ d.introduction }}</p>
            </div>
        </div>
    </div>`;

const teamModal = `
    <div class="layui-row">
        <div class="layui-col-md12" style="display: flex;justify-content:space-between;align-items:center;">
            <div style="display: flex;">
                <div style="padding:10px 20px;">
                    <img src="https://t3.chei.com.cn/ncss/cy/web/img/Investor.png" style="width: 80px;border-radius: 50%;border: 1px solid #e6e6e6;margin-right: 5px;" alt="">
                </div>
                <div  style="display: flex;flex-direction: column;justify-content: space-around;">
                    <h1>{{ d.name }}</h1>
                    <h2>{{ d.school }}</h2>
                </div>
            </div>
            <button class="layui-btn" style="margin-right: 20px;" onclick="swapButton()"><sapn class="layui-icon layui-icon-add-circle"></sapn>申请加入</button>
        </div>
    </div>

    <div class="layui-row">
        <div class="layui-card">
            <div class="layui-card-header">方向</div>
            <div class="layui-card-body">
                <p>{{ d.industry }}</p>
            </div>
        </div>
    </div>

    <div class="layui-row">
        <div class="layui-card">
            <div class="layui-card-header">团队简介</div>
            <div class="layui-card-body">
            <p>{{ d.introduction }}</p>
            </div>
        </div>
    </div>`;

layui.use('laytpl', async function () {
    var laytpl = layui.laytpl;
    var getTpl = '';
    var data = {};

    await fetch(`${socket}/getDetail?type=${params['type']}&id=${params['id']}`)
        .then(res => res.json())
        .then(res => data = res[0]);

    if(window.location.href.indexOf('person')!==-1){
        getTpl = personModal;
        
    }
    else if(window.location.href.indexOf('project')!==-1){
        getTpl = projectModal;
        await fetch(`${socket}/getDetail?type=team&id=${data['team_id']}`)
            .then(res => res.json())
            .then(res => data['team'] = res[0]['name']);
    }
    else if(window.location.href.indexOf('team')!==-1){
        getTpl = teamModal;
    }

    console.log(data);

    var view = document.getElementById('view');

    laytpl(getTpl).render(data, function (html) {
        view.innerHTML = html;
    });

});