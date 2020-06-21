const socket = 'http://www.misakiemi.cn:3003';

layui.use(['form','layer'],()=>{
    var form = layui.form;
    var layer = layui.layer;

    console.log(123);
    form.on('submit(formDemo)', function(data){
        console.log(data);

        fetch(urlMaker(socket+'/login',data['field']), {
            method: 'GET',
            mode: 'cors',
            credentials: 'include'
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if(res['success']==='true'){
                window.location.href="../index/index.html"
            }
            else{
                layer.open({
                    title: '登录失败'
                    ,content: '账号或密码错误'
                    ,btn: ['确定']
                    ,yes: function(index, layero){
                        //按钮【按钮一】的回调
                        window.location.reload();
                    }
                });
            }
            // document.cookie = "test=2333";
        });

        return false;
    });
})

// layui.use('form', function(){
//     var form = layui.form;
    
//     //监听提交
//     form.on('submit(formDemo)', function(data){
//       layer.msg(JSON.stringify(data.field));
//       return false;
//     });
//   });