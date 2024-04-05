const c = (el)=>document.querySelector(el);
const cs= (el)=>document.querySelectorAll(el);

// mapeando pizzaJson
pizzaJson.map((item , index)=>{
    let pizzaItem = c(".models .pizza-item").cloneNode(true);

    //chave da pizza especifica
    pizzaItem.setAttribute('data-key', index)

    //preenchendo informaçoes em pizzaItem
    pizzaItem.querySelector(".pizza-item--img img").src = item.img;
    pizzaItem.querySelector(".pizza-item--price").innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
    pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;
    //fim de peenchimento de informaçoes em pizzaItem

    // open modal
    pizzaItem.querySelector("a").addEventListener("click", (e)=>{
        e.preventDefault();

        //busca elemento mais perto
        let key = e.target.closest(".pizza-item").getAttribute("data-key");
        // console.log(key)
        // console.log(pizzaJson[key])
        c(".pizzaInfo h1").innerHTML = pizzaJson [key].name
        c(".pizzaInfo--desc").innerHTML = pizzaJson [key].description



       
        c(".pizzaWindowArea").style.opacity= 0;
        c(".pizzaWindowArea").style.display="flex";
        setTimeout(()=>{
            c(".pizzaWindowArea").style.opacity= 1;
        }, 200);
    })

    c(".pizza-area").append(pizzaItem);
})