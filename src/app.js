const result=require('./movie')
const express=require('express')
const path=require('path')
const hbs=require('hbs')
const app=express()
const port=process.env.PORT || 5000
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
       
        result(name,(error,data)=>{
           
            if(error){
                return resp.send({error})
            }
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
    console.log('start at '+ port)
})
