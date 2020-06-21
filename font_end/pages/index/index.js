//nav index
const navIndex = 0;

layui.use('element', function(){
    var element = layui.element;
});

layui.use('carousel', function(){
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
      elem: '#carousel0'
      ,width: '100%' //设置容器宽度
      ,arrow: 'hover' //始终显示箭头
      //,anim: 'updown' //切换动画方式
    });
});

layui.use('laytpl', function(){
    var laytpl = layui.laytpl;
    var dt_data = { //数据
        "title":"Layui常用模块"
        ,"list":[
            {"data":[
                {
                    'title':'新闻大赛',
                    "a":'https://cy.ncss.cn/information/8a80808d7158cfc3017227123da50011',
                    'img':'https://cy.ncss.cn/picture?path=eiity7g489wzs4ko'
                },
                {
                    'title':'网络招聘',
                    'a':'https://cy.ncss.cn/information/8a80808d708668b101708ad185c60001',
                    'img':'https://cy.ncss.cn/picture?path=xv7huz7tv649tyuv'
                },
                {
                    'title':'创业培训',
                    'a':'https://cy.ncss.cn/information/8a80808d7158cf5a0172369231200046',
                    'img':'https://cy.ncss.cn/picture?path=igkatdv42o2xt39v'
                }
            ]},
            {'data':[
                {
                    'title':'“众行远·创新征” 中国高校众创空间联盟成立大会圆满举行',
                    'a':'https://cy.ncss.cn/information/8a80808d6e67d7a9016ecaa1d58f001d',
                    'img':'https://cy.ncss.cn/picture?path=fcvyo425me2jq5zj&name=%E5%9B%BE%E7%89%871.png'
                },
                {
                    'title':'第六届中国国际“互联网+”大学生创新创业大赛工作研讨会在教育部召开',
                    'a':'https://cy.ncss.cn/information/8a80808d6e63492e016f3678ae23000b',
                    'img':'https://cy.ncss.cn/picture?path=7tp2l44kiavdxxcj&name=1.jpg'
                },
                {
                    'title':'教育部关于公布第五届中国“互联网+”大学生创新创业大赛获奖名单的通知',
                    'a':'https://cy.ncss.cn/information/8a80808d6e63492e016f68fe41e5002c',
                    'img':'https://cy.ncss.cn/picture?path=5a7mdimkkdm7f8d2&name=0_1.jpg'
                }
            ]}
        ]
    }
    var ss_data = { //数据
        "title":"Layui常用模块"
        ,"list":[
            {"data":[
                {
                    'title':'首期中国“互联网+”大学生创新创业大赛项目巡展 ——走进山西省级双创...',
                    "a":'https://cy.ncss.cn/information/8a80808d6e49c25d016e67c92b550008',
                    'img':'https://cy.ncss.cn/picture?path=30kd9rasu1yswlul'
                },
                {
                    'title':'福建 | 第五届福建省“互联网+”大学生创新创业大赛圆满落幕',
                    'a':'https://cy.ncss.cn/information/8a80808d6c425008016cbc7bd7dd0158',
                    'img':'https://cy.ncss.cn/picture?path=vonbpgu9s2xq0oq7'
                },
                {
                    'title':'广东 | 第五届中国“互联网＋”大学生创新创业大赛广东省分赛在佛山....',
                    'a':'https://cy.ncss.cn/information/8a80808d6c425008016c699b7ef300c9',
                    'img':'https://cy.ncss.cn/picture?path=sa4l8u3iexxntliy'
                }
            ]},
            {'data':[
                {
                    'title':'“湖北 | 第五届中国“互联网+”大学生创新创业大赛湖北省复赛在湖北....',
                    'a':'https://cy.ncss.cn/information/8a80808d6c425008016c4fd63200008d',
                    'img':'https://cy.ncss.cn/picture?path=tgk6elkiq3cv9vgz'
                },
                {
                    'title':'山东 | 第五届山东省“互联网+”大学生创新创业大赛在青岛大学圆满落幕',
                    'a':'https://cy.ncss.cn/information/8a80808d6e63492e016f3678ae23000bhttps://cy.ncss.cn/information/8a80808d6c425008016c459b77b2001b',
                    'img':'https://cy.ncss.cn/picture?path=ummtds4ufwkyiczc&name=%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190731090749.jpg'
                },
                {
                    'title':'吉林 | 第五届吉林省"互联网＋"大学生创新创业大赛总决赛在吉林外....教育部关于公布第五届中国“互联网+”大学生创新创业大赛获奖名单的通知',
                    'a':'https://cy.ncss.cn/information/8a80808d6c425008016c45c8269e004e',
                    'img':'https://cy.ncss.cn/picture?path=bt52oms7p983zyzh'
                }
            ]}
        ]
    }
    var getTpl = dt_modal.innerHTML,view = document.getElementById('ds_body');
    laytpl(getTpl).render(dt_data, function(html){
        view.innerHTML = html;
    });
    getTpl = dt_modal.innerHTML,view = document.getElementById('ss_body');
    laytpl(getTpl).render(ss_data, function(html){
        view.innerHTML = html;
    });
});