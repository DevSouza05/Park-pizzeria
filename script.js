const c = (el)=>document.querySelector(el);
const cs= (el)=>document.querySelectorAll(el);


// mapeando pizzaJson
pizzaJson.map((item , index)=>{
    let pizzaItem = c(".models .pizza-item").cloneNode(true);

    //preenchendo informaçoes em pizzaItem
    c(".pizza-area").append(pizzaItem)
})