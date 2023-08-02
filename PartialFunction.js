function partial(fn,...args){
  return function(...moreArgs){
    return fn(...args,..moreArgs);
  }
}
const plus3=add.bind(null,1,2);

const plus=(a,b,c)=>{
  return a+b+c;
}
