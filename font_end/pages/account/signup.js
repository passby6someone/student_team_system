const socket = 'http://www.misakiemi.cn:3003';

layui.use(['form','layer'],()=>{
    var form = layui.form;
    var layer = layui.layer;

    console.log(123);
    form.on('submit(formDemo)', function(data){
        console.log(data);

        fetch(socket+'/signup', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: postDataStringify(data['field']),
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if(res['success']){
                layer.open({
                    title: '注册账号'
                    ,content: '注册成功，将在3s后跳转到登录页'
                    ,btn: ['确定']
                });
                setTimeout(() => {
                    window.location.href="./login.html";
                }, 3000);
            }
            else{
                layer.open({
                    title: '注册账号'
                    ,content: '该用户名已被注册'
                    ,btn: ['确定']
                    ,yes: function(index, layero){
                        //按钮【按钮一】的回调
                        // window.location.reload();
                        close(index);
                        return false;
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