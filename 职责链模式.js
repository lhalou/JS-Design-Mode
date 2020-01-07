let str = 'hello this is hello';

const Operator = (function(){
    let data;
    function pipe(handler){
        data = handler(data);
        return { pipe }
    }
    function source(param){
        data = param;
        return {pipe}
    }
    return {source}
})();

//调用
Operator.source(str)
    .pipe(repeat)
    .pipe(trim)
    .pipe(reverse)
    .pipe(result => {
        console.log(result)
    });

function repeat(str){
    return str.split('')
        .reduce((v1,v2) => {
            v1.push(v2);
            v1.push(v2);
            return v1;
        },[]).join('')
}

function trim(str){
    return str.trim()
}

function reverse(str){
    return str.split('').reverse().join('');
}