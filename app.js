
let l = 'http://universities.hipolabs.com/search?name='

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let inp = document.querySelector("input")
let rc = document.querySelector("#c")

inp.addEventListener("input", ()=>{
    rc.innerHTML = ""
})
btn2.addEventListener("click", ()=>{
    clear()
})
 function clear()
 {
    rc.innerHTML = ""
 }
btn1.addEventListener("click", async ()=>{
    c = inp.value 
   clgs =  await getCountry(c);
   console.log(clgs)
   showClgs(clgs)
})

function showClgs(clgs)
{
    

    for(clg of clgs)
    {
        
         h4 = document.createElement("h4")
        h5 = document.createElement("h5")
        ul = document.createElement("ol")
        ul2 = document.createElement("ol")
        h4.innerText = clg.country
        h5.innerText= clg.name
        ul.innerText = "Links"
        ul2.innerText = "Domans"
        for(w of clg.web_pages)
        {
            li = document.createElement("li")
            li.innerText = w;
            ul.appendChild(li)
        }
        for(w of clg.domains)
            {
                li = document.createElement("li")
                li.innerText = w;
                ul2.appendChild(li)
            }
            div = document.createElement("div")
            div.classList.add("college-card") // ← Add this line
              
        div.appendChild(h4)
        div.appendChild(h5)
        div.appendChild(ul)
        div.appendChild(ul2)
        d = document.querySelector("#c")
        d.appendChild(div)

    }

}


async function getCountry(c)
{
    try{
        config = {}
        res = await axios.get(l+c)
        
        return res.data
    }
    catch(e)
    {
        console.log("Error: ", e)
    }
}


// let l = 'https://icanhazdadjoke.com/'

// p = document.querySelector("#fact")

// async function getJoke()
// {
//     try{
//         const config = { headers : { Accept : "application/json"}}
//         res = await axios.get(l, config)
//         console.log(res.data.joke);
//         p.innerText = res.data.joke;

//     }
//     catch(r)
//     {
//         console.log("Error: ", r);
//     }
// }
// function clearJoke()
// {
//     p.innerText = 'Click "New Fact" to load a Joke!';
// }



// let link = "https://catfact.ninja/fact";

// h2 = document.querySelector("h2")
// function clearFact()
// {
//     h2.innerText = "Random Cat Facts 🐱";
// }
// async function getFact()
// {
//     try{
        
//         let data = await axios.get(link);
//         console.log(data.data.fact);
//         h2.innerText = data.data.fact
        
//     }
//     catch(e){
//         console.log("Error: ", e);
//     }
// }
// async function getFact()
// {
//     try{
        
//         let data = await fetch(link);
//         data = await data.json(); 
//         console.log(data.fact);

//         data = await fetch(link);
//         data = await data.json(); 
//         console.log(data.fact);
//     }
//     catch(e){
//         console.log("Error: ", e);
//     }
// }

// console.log("Hello world");
// p = document.querySelector("p")
// h1 = document.querySelector("h1");
// function changeColor(color, delay)
// {
//   return new Promise((resolve, reject)=>{

//     setTimeout(() =>{
//         let n = Math.floor(Math.random() * 10) + 1;
//         if(n > 7)
//         {
//             reject("Error 404")
//         }
//        h1.style.color = color;
//        console.log(`Color changed to ${color}`)
//         resolve("Color changed");
//     }, delay)
//   })
// }
// async function demo()
// {
//     try{
//         await changeColor("red", 1000)
//         await changeColor("blue", 1000)
//         await changeColor("green", 1000)
//     }
//     catch(err)
//     {
//         console.log("Error found:", err) 
//     }

//     console.log("hello world")
//     console.log("Moa Mosa ji Mosa")
// }
// function changeColor(color, delay)
// {
//   return new Promise((resolve, reject)=>{

//     setTimeout(() =>{
//        h1.style.color = color;
//        console.log(`Color changed to ${color}`)
//         resolve("Color changed");
//     }, delay)
//   })
// }
// async function demo()
// {
//     await changeColor("red", 1000)
//     await changeColor("blue", 1000)
//     await changeColor("green", 1000)

// }
// function demo()
// {
//   return new Promise((resolve, reject)=>{

//     setTimeout(() =>{
//         let a = Math.floor(Math.random() * 10) + 1;
//         console.log(a);
//         resolve();
//     }, 1000)
//   })
// }
// async function hy()
// {
//     await demo();
//     await demo();
//     await demo();
// }
