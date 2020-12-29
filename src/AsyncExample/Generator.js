export const Generator=()=>{

    function* createColorIterator(array) {
     const available=array;
      
      while(available.length!==0){
         const randomIndex=Math.floor(Math.random()*available.length);
         const value=available[randomIndex];

         available.splice(randomIndex,1);
         yield value;
      }
    }
    const names=["Dom","shelly","tinny","marie"];
    const uniqueNames=createColorIterator(names);
    for(const n of uniqueNames){
        console.log(n);
    }
    }