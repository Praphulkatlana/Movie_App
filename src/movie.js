const request=require('request')
// const key=6220866f

const movieDetails=(movieName,callback)=>{
    
    const url='http://www.omdbapi.com/?t='+movieName+'&apikey=6220866f'
request({url,json:true},(error,{body}={})=>{
   
    if(error){
        callback("error in connection",undefined)}
   
    
    const data=body.body
        callback(undefined,body)
})

}
module.exports=movieDetails

