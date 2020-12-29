
//promise resolves after a all pomise got resolved
const Promisee=()=>{
    var p1=new Promise((resolve,reject)=>{
        setTimeout(resolve,1000,"one");
    });
    var p2=new Promise((resolve,reject)=>{
        setTimeout(resolve,2000,"two");
    });
    var p3=new Promise((resolve,reject)=>{
        setTimeout(resolve,3000,"three");
    });
    var p4=new Promise((resolve,reject)=>{
        reject("reject");
    });

    Promise.all([p1,p2,p3,p4])
    //we can write function instead of =>function()
    .then(values=>{
        console.log(values);
    })
    .catch(reason=>{
        console.log(reason);
    })
     
}

export default Promisee;

/*const promise1=Promise.resolve('Hello World');
    const promise2=14;
    const promise3=new Promise((resolve,reject)=>{
        setTimeout(resolve,2000,"Good bye")
    })

    Promise.all([promise1,promise2,promise3])
    .then(values=>conole.log(values));*/