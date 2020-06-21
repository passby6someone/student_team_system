const socket = 'http://www.misakiemi.cn:3003'
// const socket = 'http://127.0.0.1:3003'

const params = parseUrl(window.location.href);

layui.use('form', function(){
    var form = layui.form;

    //监听提交
    form.on('submit(form)', function(data){

        data['field']['person_id'] = params['id'];

        fetch(socket+'/postProjectInfo', {
            method: 'POST',
            mode: 'cors',
            // credentials: 'include',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: postDataStringify(data['field'])
        })
        .then(res => res.json())
        .then(res => {
            if(res.success==='true'){
                layer.open({
                    title: '修改项目信息'
                    ,content: '修改成功'
                    ,btn: ['确定']
                    ,yes: function(index, layero){
                        //按钮【按钮一】的回调
                        window.close();
                    }
                });
            }
            else{
                layer.open({
                    title: '修改项目信息'
                    ,content: res['errMsg']
                    ,btn: ['确定']
                    ,yes: function(index, layero){
                        //按钮【按钮一】的回调
                        window.location.reload();
                    }
                });
            }
        });

        return false;
    });
});