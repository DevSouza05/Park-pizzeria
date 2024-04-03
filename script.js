const c = (el)=>document.querySelector(el);
const cs= (el)=>document.querySelectorAll(el);

Person.map((item, index)=>{
    console.log(item) 
})

// mapeando pizzaJson
pizzaJson.map((item , index)=>{
    let pizzaItem = c(".models .pizza-item").cloneNode(true);

    //preenchendo informaçoes em pizzaItem
    pizzaItem.querySelector(".pizza-item--img img").src = item.img;
    pizzaItem.querySelector(".pizza-item--price").innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
    pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;
    //fim de peenchimento de informaçoes em pizzaItem

    // open modal
    pizzaItem.querySelector("a").addEventListener("click", (e)=>{
        e.preventDefault();
    
        c(".pizzaWindowArea").style.opacity= 0;
        c(".pizzaWindowArea").style.display="flex";
        setTimeout(()=>{
            c(".pizzaWindowArea").style.opacity= 1;
        }, 200);
    })

    c(".pizza-area").append(pizzaItem);
})