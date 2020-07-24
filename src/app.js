const result=require('./movie')
const express=require('express')
const path=require('path')
const hbs=require('hbs')
const app=express()
const port=5000
//Paths
const directory=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../templates/views')
const partilPath=path.join(__dirname,'../templates/partials')

app.use(express.static(directory)) //????

//Engine setup
app.set('view engine','hbs')
app.set('views',viewPath)

hbs.registerPartials(partilPath)//???

//Https req/resp
app.get('',(req,resp)=>{
    resp.render('index',{
        title:'index'
    })
})

app.get('/about',(req,resp)=>{
    resp.render('about',{
     title:'About',
     message:'Created by Praphul '
    })
})

app.get('/movieDetails',(req,resp)=>{
    try
    {
        var name =req.query.address   
       console.log("api enter")
       console.log("5")
        result(name,(error,data)=>{
            console.log(req.query.address)
            console.log("result")
            console.log(error+" ee")
            console.log(data+" dd")
            if(error){
                return resp.send({error})
            }
              
               console.log("6")            
               console.log("no entry")
            //    console.log(data.body)
        resp.send({    
        title:data.Title,
        rating:data.imdbRating,
        year:data.Year,
        relasedDate:data.Released,
        genre:data.Genre,
        director:data.Director,
        cast:data.Actors,
        discription:data.Plot,
        Poster:data.Poster
               })
           
        })


    }
    catch(ex){
        return resp.send({error})
    }
    
    })


    app.get('*',(req,resp)=>{
        resp.render('404',{
            title:'404 ',
            name:'Lucky',
            errorMessage:'Page not found'
     
        })
    })

    //Port
    app.listen(port,()=>{
    console.log('start at'+ port)
})

// result(process.argv[2],(error,data)=>{
//     console.log("result")
//     console.log(error+"ee")
//     console.log(data+"dd")
//     if(!data){
//         console.log("return")
//         //  return console.log("done")
//         return resp.send({discription:'done'})
//     }
//    else
//    {    
//        console.log("6")            
//        console.log("no entry")
// resp.send({    
// title:data.Title,
// rating:data.imdbRating,
// year:data.Year,
// relasedDate:data.Released,
// genre:data.Genre,
// director:data.Director,
// cast:data.Actors,
// discription:data.Plot,
// Poster:data.Poster
// })
//    }
//    }
// )