const request=require('request')

const poster=(url,callback)=>{
  
request({url,json:true},(error,{body}={})=>{
    if (error){
        callback("Connection issue",undefined)
    }
    else 
    callback(undefined,body)
})

}
module.exports=poster