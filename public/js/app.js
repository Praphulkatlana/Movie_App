const movie=document.getElementById("movie_name")
const year=document.getElementById("movie_year")
const rating=document.getElementById("rating")
const genre=document.getElementById("genre")
const cast=document.getElementById("cast")
const director=document.getElementById("director")
const discription=document.getElementById("discription")
const poster=document.getElementById("maincontent")

const text_area=document.getElementById("mytext")
const test=document.getElementById("test")
const btn=document.getElementById("btn")


btn.addEventListener('click',()=>{
    movie.innerText=""
    year.innerText=""
    rating.innerText=""
    genre.innerText=""
    cast.innerText=""
    discription.innerText=""
    director.innerText=""

    var movie_name= text_area.value;
    movie_name=movie_name.replace(/^\s+|\s+$/gm,'');
    console.log(movie_name)
    //redirect to page    
    const url=`http://localhost:5000/movieDetails/?address=${movie_name}`

    if (!movie_name){
       return alert("enter movie name")
    }    
    fetch(url).then((response)=>{
        
    response.json().then((data)=>{
        if (!data)
        {
            return discription.innerText="Network issue"
        }

        else if(!data.title){
            return discription.innerText="Movie not found"
        }
        
        {
            poster.style.background='rgba(0,0,0,0.5)'
            poster.style.backgroundImage='url('+data.Poster+')'
            btn.style.backgroundImage='url('+data.Poster+')'
            poster.style.backgroundRepeat='no-repeat'
            poster.style.backgroundSize='cover'
            poster.style.backgroundPosition='centre centre'
            poster.style.height='100vh'
            movie.innerText=data.title
            year.innerText='('+data.year+')'
            rating.innerText=data.rating
            cast.innerText=data.cast
            discription.innerText=data.discription
            director.innerText=data.director
            genre.innerText=data.genre
        }
        })
    })


})    

//youtube 
// const youtube=document.getElementById("youtube")
// youtube.addEventListener('click',()=> {
//     console.log("56")
//  window.location.href="https://www.youtube.com/results?search_query=`+{{title}} trailer`";
// })