const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
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

const app = new Koa();
const router = new Router();
const port = 3003;

router.get('/login',async (ctx,next)=>{
  console.log(ctx.query);
  let user = await knex('person').select().where({username:ctx.query['username'],password:ctx.query['password']});
  if(user.length!==0){
    ctx.set('Set-Cookie',`id=${user[0].id}; Path=/`)
    ctx.body = {success:'true'};
  }
  else{
    ctx.body = {success:'false'}
  }
});

router.post('/signup',async (ctx,next)=>{
  console.log(ctx.request.body);
  var personData = Object.assign({},ctx.request.body);
  await knex('person').insert(personData)
    .catch(()=>ctx.body={success:false});
  ctx.body = {success:true};
})

router.get('/getUserInfo',async (ctx,next)=>{
  console.log(ctx.query);
  switch(ctx.query['type']){
    case 'self':
      let personData = await knex('person')
        .where({
          id:ctx.query['id']
        })
        .then(res => res[0]);
      ctx.body = await knex('t_p')
        .where({
          person_id:ctx.query['id'],
          isCaptain:'y'
        })
        .select('isCaptain')
        .then(res => {
          if(res.length != 0){
            personData['isCaptain'] = 'y';
            return personData;
          }
          else{
            personData['isCaptain'] = 'n';
            return personData;
          }
        });
      break;
    case 'project':
      if(ctx.query['creater'] === 'me'){
        let team_id = await knex('t_p')
          .where({
            person_id:ctx.query['id'],
            isCaptain:'y'
          })
          .then(res => {
            if(res.length === 0){
              return null;
            }
            else{
              return res.map(cur => cur['team_id']);
            }
          });
        console.log(team_id);
        if(team_id === null){
          ctx.body = [];
          break;
        }
        await knex('project')
          .whereIn('team_id',team_id)
          .then(res => ctx.body = res);
      }
      else{
        let team_id = await knex('t_p')
          .where({
            person_id:ctx.query['id'],
            isCaptain:'n'
          })
          .then(res => {
            if(res.length === 0){
              return null;
            }
            else{
              return res.map(cur => cur['team_id']);
            }
          });
          console.log(team_id);
        if(team_id === null){
          ctx.body = [];
          break;
        }
        await knex('project')
          .whereIn('team_id',team_id)
          .then(res => ctx.body = res);
      }
      break;
    case 'team':
      if(ctx.query['creater'] === 'me'){
        let team_id = await knex('t_p')
          .where({
            person_id:ctx.query['id'],
            isCaptain:'y'
          })
          .then(res => {
            if(res.length === 0){
              return null;
            }
            else{
              return res.map(cur => cur['team_id']);
            }
          });
          console.log(team_id);
        if(team_id === null){
          ctx.body = [];
          break;
        }
        await knex('team')
          .whereIn('id',team_id)
          .then(res => ctx.body = res);
      }
      else{
        let team_id = await knex('t_p')
          .where({
            person_id:ctx.query['id'],
            isCaptain:'n'
          })
          .then(res => {
            if(res.length === 0){
              return null;
            }
            else{
              return res.map(cur => cur['team_id']);
            }
          });
        console.log(team_id);
        if(team_id === null){
          ctx.body = [];
          break;
        }
        await knex('team')
          .whereIn('id',team_id)
          .then(res => ctx.body = res);
      }
      break;
  }
});

router.post('/postUserInfo',async (ctx,next)=>{
  await knex('person')
    .where({
      id:ctx.request.body['id']
    })
    .update(ctx.request.body)
    .catch(err => ctx.body={errmsg:err,success:'false'});
  ctx.body = {errmsg:'',success:'true'};
});

router.get('/getDistinct',async (ctx,next)=>{
  await knex(ctx.query['table']).distinct(ctx.query['field']).then(res => ctx.body = res);
});

router.get('/getPersonInfo',async (ctx,next)=>{
  let queryCondition = {isLookforTeam:'y'};
  if(ctx.query['value']!=='all'){
    queryCondition[ctx.query['field']] = ctx.query['value'];
  }
  await knex('person').where(queryCondition).then(res => ctx.body = res);
});

router.get('/getTeamInfo',async (ctx,next)=>{
  let queryCondition = {isLookforperson:'y'};
  if(ctx.query['value']!=='all'){
    queryCondition[ctx.query['field']] = ctx.query['value'];
  }
  await knex('team').where(queryCondition).then(res => ctx.body = res);
});

router.get('/getProjectInfo',async (ctx,next)=>{
  let queryCondition = {isLookforperson:'y'};
  if(ctx.query['value']!=='all'){
    queryCondition[ctx.query['field']] = ctx.query['value'];
  }
  await knex('project').where(queryCondition).then(res => ctx.body = res);
});

router.get('/getDetail',async (ctx,next)=>{
  await knex(ctx.query['type']).where({id:ctx.query['id']}).then(res => ctx.body = res);
});

router.post('/postProjectInfo',async (ctx,next)=>{
  console.log(ctx.request.body);
  if(ctx.request.body.hasOwnProperty('team_name')){
    let team = await knex('team').where({name:ctx.request.body['team_name']}).then(res => res);
    if(team.length === 0){
      ctx.body = {errMsg:'不存在该名称队伍',success:'false'};
      return false;
    }
    else if(team.length > 1){
      let team_ids = team.map(cur => cur.id);
      var team_id = await knex('t_p').whereIn('team_id',team_ids).andWhere('person_id',ctx.request.body['person_id']).andWhere('isCaptain','y').then(res => res);
      team_id = team_id[0]['team_id'];
    }
    else{
      var team_id = team[0]['id'];
    }
    var data = Object.assign({},ctx.request.body);
    delete data['person_id'];
    delete data['team_name'];
    data['team_id'] = team_id;
    console.log(data);
    await knex('project').insert(data).catch(console.log);
    ctx.body = {errMsg:'',success:'true'};
  }
  else{
    var data = Object.assign({},ctx.request.body);
    await knex('project').update(data).catch(console.log);
    ctx.body = {errMsg:'',success:'true'};
  }
});

router.post('/postTeamInfo',async (ctx,next)=>{
  if(ctx.request.body['writeType'] === "create"){
    var data = Object.assign({},ctx.request.body);
    delete data['writeType'];
    knex('team').insert(data).catch(console.log);
    ctx.body = {errMsg:'',success:'true'};
    // console.log(data);
  }
  else{
    var data = Object.assign({},ctx.request.body);
    delete data['writeType'];
    knex('team').update(data).catch(console.log);
    ctx.body = {errMsg:'',success:'true'}
  }
});

app.use(async (ctx, next)=> {
  ctx.set('Access-Control-Allow-Origin', ctx.headers['origin']);
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  ctx.set("Access-Control-Allow-Credentials", "true");
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
});

app.use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));