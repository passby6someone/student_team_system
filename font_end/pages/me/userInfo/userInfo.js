var params = parseCookie(document.cookie);

const socket = 'http://www.misakiemi.cn:3003'
async function getUserInfo(){
    var data = await fetch(socket + `/getUserInfo?type=self&id=${params['id']}`)
        .then(res => res.json())
        .then(res => res);
    return data;
}

layui.use(['form','layer'],async function(){
    var form = layui.form;
    var layer = layui.layer;

    var userInfo = await getUserInfo();
    console.log(userInfo);

    form.val("info", userInfo);

    //监听提交
    form.on('submit(infoSubmit)', function(data){
        var data = form.val("info");
        // var url = urlMaker(socket+'/postUserInfo',data);
        // console.log(JSON.stringify(data));
        fetch(socket+'/postUserInfo', {
            method: 'POST',
            mode: 'cors',
            // credentials: 'include',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: postDataStringify(data)
          }).then(function(response) {
            return response
          }).then(res=>{
            if(res.success==='true'){
              layer.open({
                  title: '修改个人信息'
                  ,content: '修改成功'
                  ,btn: ['确定']
                  ,yes: function(index, layero){
                      //按钮【按钮一】的回调
                      window.location.reload();
                  }
              });
          }
          else{
              layer.open({
                  title: '修改个人信息'
                  ,content: '修改失败'
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
    form.on('submit(accountSubmit)', function(data){
        var data = form.val("account");
        console.log(data);
        var data1 = form.val("info");
        console.log(data1);
        data1['password'] = data['newPassword'];
        fetch(socket+'/postUserInfo', {
            method: 'POST',
            mode: 'cors',
            // credentials: 'include',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: postDataStringify(data1)
          })
          .then(function(response) {
              return response.json()
          })
          .then(function(res){
            console.log(res);
            // if(response)
            if(res.success==='true'){
                layer.open({
                    title: '修改个人信息'
                    ,content: '修改成功'
                    ,btn: ['确定']
                    ,yes: function(index, layero){
                        //按钮【按钮一】的回调
                        window.location.reload();
                    }
                });
            }
            else{
                layer.open({
                    title: '修改个人信息'
                    ,content: '修改失败'
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