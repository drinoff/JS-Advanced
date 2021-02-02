function httpValidator(input){
    let methodTypes = ['GET','POST','DELETE','CONNECT'];

    if (!input.hasOwnProperty('method')){
        errorThrower('Method');
    }else{
        if(!methodTypes.includes(input.method)){
            throw new Error('Invalid request header: Invalid Method');
        }
    }

    if(!input.hasOwnProperty('uri')){
        errorThrower('URI');
    }else{
        let pattern = /^[.a-z0-9]+$/;
        if(input.uri.match(pattern)===null){
            errorThrower('URI');
        }
    }

    if(!input.hasOwnProperty('version')){
        errorThrower('Version');
    }else{
        let acceptableVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
        if(!acceptableVersions.includes(input.version)){
            errorThrower('Version');
        }
    }

    if(!input.hasOwnProperty('message')){
        errorThrower('Message');
    }else{
        let pattern = /^[^<>\\&'"]+$/;
        if(input.message.match(pattern)===null && input.message !== ''){
            errorThrower('Message');
        }
    }
    return input;


    function errorThrower(errorType){

        throw new Error(`Invalid request header: Invalid ${errorType}`);
    }

}
httpValidator({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: 'asl<pls'
    }
)