function parseUrl(url){
    var o = {};
    var params = url.slice( url.indexOf('?')+1 );
    params.split('&').forEach(function(cur){
        o[cur.split('=')[0]] = cur.split('=')[1];
    });
    return o;
}

function parseCookie(cookie){
    var o = {};
    if(cookie.indexOf(';')===-1){
        o[cookie.split('=')[0]]=cookie.split('=')[1];
    }
    else{
        cookie.split('; ').forEach(cur=>{
            o[cur.split('=')[0]] = cur.split('=')[1];
        })
    }
    return o;
}

function urlMaker(url,params){
    url += '?';
    for(let i in params){
        url += `${i}=${params[i]}&`;
    }
    return url.slice(0,-1);
}

function postDataStringify(o){
    var str = '';
    for(let i in o){
        str += `${i}=${o[i]}&`;
    }
    return str.slice(0,-1);
}