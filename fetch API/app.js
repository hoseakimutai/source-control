fetch('https://fakestoreapi.com/products').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata);
    let data1 = "";
    completedata.map((values) => {
        data1 += `<div class="cards">
            <h1 class="tittle">${values.tittle}</h1>
            <img src=${values.image}alt="img" class="images">
            <p>${values.description}</p>
            <p class="Category">${values.category}</p>
            <p class="price">${values.price}</p>
    </div>`
    })
    document.getElementById("cards").innerHTML = data1;
})
    .catch((err) => {
        console.log(err);
    })