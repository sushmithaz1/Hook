const PromiseEx=()=>{

const timeOut = (t) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Completed in ${t}`)
      })
    })
  }
  
  //normal promise.
  timeOut(1000)
   .then(result => console.log(result)) 
  
  // Promise.all
 // Promise.all([timeOut(1000), timeOut(2000)])
 //  .then(result => console.log(result)) 
}
export default PromiseEx;