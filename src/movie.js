const request=require('request')
// const key=6220866f

const movieDetails=(movieName,callback)=>{
    
    const url='http://www.omdbapi.com/?t='+movieName+'&apikey=6220866f'
request({url,json:true},(error,{body}={})=>{
    console.log("3")
    if(error){console.log("3")
        callback("error in connection",undefined)}
    // if (error){
    //     console.log(error)
        
    //    callback("Connection issue",undefined)
    // }
    else
    console.log("4")
    const data=body.body
    console.log(data)
    callback(undefined,body)
})

}
module.exports=movieDetails

