
/*
three states of the excution of apromise
 1.pending : The promise is still waiting for the opearation complete
 2.fulfiled: the operation  completed successfully 
 3.rejected : the operation failed 
 */




let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(("done"),1000))


    setTimeout(()=>reject("reject"),1000)
        
    
})
promise.then((msg)=>{
    console.log(msg)
})
.catch((error)=>{
    console.log(error);
})