const knex = require('knex')({
    client: 'mysql',
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'misakimei427131',
        database : 'DuiBa'
    },
    useNullAsDefault: true
});

function inserts(){
    knex('person').insert({
        name:'梁凯',
        username:'test_name0',
        password:'123456',
        skill:'精通python',
        introduction:'热爱编程，喜欢新鲜事物',
        school:'天津科技大学',
        major:'软件工程',
        email:'49326889982@qq.com',
        isLookforteam:'y'
    }).catch(console.log);
    knex('person').insert({
        name:'梁泽彬',
        username:'testname1',
        password:'123456',
        skill:'熟练掌握PS',
        introduction:'喜欢设计，喜欢做海报',
        school:'天津师范大学',
        major:'新闻传媒',
        email:'44826889982@qq.com',
        isLookforteam:'y'
    }).catch(console.log);
    knex('person').insert({
        name:'张杰鹏',
        username:'testname2',
        password:'123456',
        skill:'熟练掌握电商运营技巧，了解一定运维知识',
        introduction:'喜欢看书，看电影',
        school:'天津理工大学',
        major:'电子商务',
        email:'493265459982@qq.com',
        isLookforteam:'y'
    }).catch(console.log);
    knex('person').insert({
        name:'胡云好',
        username:'testname3',
        password:'123456',
        skill:'熟练掌握电商运营技巧，了解一定运维知识',
        introduction:'喜欢看书，看电影',
        school:'天津理工大学',
        major:'电子商务',
        email:'493265459982@qq.com',
        isLookforteam:'y'
    }).catch(console.log);
    knex('person').insert({
        name:'吕秋幸',
        username:'testname4',
        password:'123456',
        skill:'了解一定硬件知识,掌握matlab等建模工具',
        introduction:'喜欢看书，看电影',
        school:'天津工业大学',
        major:'机械自动化',
        email:'493265459982@qq.com',
        isLookforteam:'y'
    }).catch(console.log);
    knex('person').insert({
        name:'陈星宇',
        username:'testname5',
        password:'123456',
        skill:'了解一定财务知识',
        introduction:'喜欢看书，看电影',
        school:'天津财经大学',
        major:'会计',
        email:'493265459982@qq.com',
        isLookforteam:'y'
    }).catch(console.log);
    knex('person').insert({
        name:'黄千博',
        username:'testname6',
        password:'123456',
        skill:'有良好的文学功底,有一定的自媒体运营能力',
        introduction:'喜欢看书，看电影',
        school:'天津外国语大学',
        major:'汉语言文学',
        email:'493265459982@qq.com',
        isLookforteam:'y'
    }).catch(console.log);
    knex('person').insert({
        name:'邓清文',
        username:'testname7',
        password:'123456',
        skill:'掌握matlab等数学建模工具',
        introduction:'喜欢看书，看电影',
        school:'天津城建大学',
        major:'高分子材料',
        email:'493265459982@qq.com',
        isLookforteam:'y'
    }).catch(console.log);
    knex('person').insert({
        name:'黄晨俊',
        username:'testname8',
        password:'123456',
        skill:'掌握一定程度财务知识',
        introduction:'喜欢看书，看电影',
        school:'天津商业大学',
        major:'工商管理',
        email:'493265459982@qq.com',
        isLookforteam:'y'
    }).catch(console.log);
    knex('person').insert({
        name:'刘凡',
        username:'testname9',
        password:'123456',
        skill:'拥有一定程度的自媒体运营能力',
        introduction:'喜欢看书，看电影',
        school:'天津医科大学',
        major:'法学',
        email:'493265459982@qq.com',
        isLookforteam:'y'
    }).catch(console.log);
    knex('person').insert({
        name:'邓玥',
        username:'testname10',
        password:'123456',
        skill:'了解java,具有一定的后端编程能力',
        introduction:'喜欢看书，看电影',
        school:'天津财经大学',
        major:'电子商务',
        email:'493265459982@qq.com',
        isLookforteam:'y'
    }).catch(console.log);
    knex('team').insert({
        id:3,
        name:'Yummy吖咪自主厨房吧团队',
        introduction:'创业团队主要成员均为大学在校本科生。成员均学习成绩良好，具有一定的经济学与管理学基础，且各有特长，具有一定程度的专业素养。团队分工清晰明确、各司其职，在工作上密切配合。',
        industry:'经济学类',
        school:'天津科技大学',
        isLookforperson:'y'
    }).catch(console.log);
    knex('team').insert({
        id:2,
        name:'社区学习现状调查团队',
        introduction:'团队曾参加过第九届市场调研大赛、第八届统计坊论文比赛、srt等，熟知问卷设计、数据收集、撰写报告等过程，能够运用数据分析软件、描述性统计解决实际问题。',
        industry:'统计学类',
        school:'天津理工大学',
        isLookforperson:'y'
    }).catch(console.log);
    knex('team').insert({
        id:1,
        name:'View Round',
        introduction:'团队四人来自学校不同院系，成员之间沟通良好、合作默契。成员之间所学习的专业知识可以互相弥补各取所长，有助于项目的开发。',
        industry:'计算机类',
        school:'天津工业大学',
        isLookforperson:'y'
    }).catch(console.log);
    knex('team').insert({
        id:4,
        name:'金融科技下居民金融素养调研团队',
        introduction:'专业基础扎实。本项目团队全部成员5人，均为金融学专业学生，其中4人为量化金融拔尖人才实验班专业学生，1人为金融学（证券投资）专业学生',
        industry:'计算机类',
        school:'天津财经大学',
        isLookforperson:'y'
    }).catch(console.log);
    knex('team').insert({
        id:5,
        name:'海河治理与天津旅游经济协同发展调研团队',
        introduction:'团队成员分别来自不同的专业，对环境与经济发展拥有更加全面的看法。',
        industry:'计算机类',
        school:'天津商业大学',
        isLookforperson:'y'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:1,
        person_id:1,
        isCaptain :'n'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:1,
        person_id:2,
        isCaptain :'y'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:1,
        person_id:3,
        isCaptain :'n'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:2,
        person_id:3,
        isCaptain :'y'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:2,
        person_id:4,
        isCaptain :'n'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:2,
        person_id:5,
        isCaptain :'n'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:3,
        person_id:5,
        isCaptain :'n'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:3,
        person_id:6,
        isCaptain :'y'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:3,
        person_id:7,
        isCaptain :'n'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:4,
        person_id:7,
        isCaptain :'n'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:4,
        person_id:8,
        isCaptain :'y'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:4,
        person_id:9,
        isCaptain :'n'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:5,
        person_id:9,
        isCaptain :'y'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:4,
        person_id:10,
        isCaptain :'n'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:5,
        person_id:10,
        isCaptain :'n'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:1,
        person_id:10,
        isCaptain :'n'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:2,
        person_id:10,
        isCaptain :'n'
    }).catch(console.log);
    knex('t_p').insert({
        team_id:3,
        person_id:10,
        isCaptain :'n'
    }).catch(console.log);
    knex('t_c').insert({
        team_id:1,
        competition:'大创'
    }).catch(console.log);
    knex('project').insert({
        name:'Yummy吖咪自主厨房吧',
        school:'天津科技大学',
        type:'经济学类',
        introduction:'Yummy吖咪自主厨房吧采用“量贩式”运营方式，使用“O2O”宣传方式，创造个性化服务，为每一位客户提供安全卫生、环境清雅、创意趣味的快乐烹饪体验。',
        team_id:3,
        isLookforperson:'y'
    }).catch(console.log);
    knex('project').insert({
        name:'天津社区学习现状调查及依托移动智能终端的社区学习共同体创新模式研究',
        school:'天津理工大学',
        type:'统计学类',
        introduction:'本项目首先对天津市社区居民的社区学习情况开展调查，对其做出数据分析，明确社区居民关于社区学习的现状，并发现存在的问题以及探寻问题的成因，为社区学习提出一种具有针对性的依托移动智能终端的社区学习共同体的创新模式，阐述其理论构建和实践策略。',
        team_id:2,
        isLookforperson:'y'
    }).catch(console.log);
    knex('project').insert({
        name:'基于VR技术的“View Round”虚拟旅游App',
        school:'天津工业大学',
        type:'计算机类',
        introduction:'我们团队设计出“View Round ”App，用户在下载App后配合相应的VR设备即可进行虚拟旅游，做到足不出户看风景。这样可以弥补现实旅游异地性、不确定性的先天不足，进而使游客全身心地投入景点体验，为用户带来了一次全新的旅游体验。',
        team_id:1,
        isLookforperson:'y'
    }).catch(console.log);
    knex('project').insert({
        name:'金融科技下居民金融素养的城乡差异及影响因素分析——基于京津冀区域的调研',
        school:'天津财经大学',
        type:'金融学类',
        introduction:'对金融科技发展背景下城乡居民金融素养进行精准测度，对比分析居民基本金融素养和金融科技素养的城乡差异，并运用Logit模型对形成差异的影响因素进行实证检验，以期为缩小金融素养城乡不平等，改善农村居民长期金融福利提出建议。',
        team_id:4,
        isLookforperson:'y'
    }).catch(console.log);
    knex('project').insert({
        name:'海河治理与天津旅游经济协同发展调研报告',
        school:'天津财经大学',
        type:'经济学类',
        introduction:'改革开放以来,天津旅游经济高速发展,生态环境也在不断改善中,海河作为天津的“母亲河”，因此海河治理与天津旅游经济之间存在一定的联系，为此我们调研实践团赴天津海河游轮公司开展调研,分析天津海河治理与天津旅游经济发展的关系',
        team_id:5,
        isLookforperson:'y'
    }).catch(console.log);
}

inserts();

module.exports = inserts