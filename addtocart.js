const product = [
    {
        id: 0,
        image: 'image/1.jpeg',
        title: 'JI HIGH CUT',
        price: 4500,
    },
    {
        id: 1,
        image: 'image/2.jpeg',
        title: 'VANS OLD SCHOOL',
        price: 2000,
    },
    {
        id: 2,
        image: 'image/3.jpeg',
        title: 'JI HIGH CUT BLACK AND WHITE',
        price: 4500,
    },
    {
        id: 3,
        image: 'image/4.jpeg',
        title: 'AIR FORCE 1 WHITE',
        price: 1600,
    },
    {
        id: 4,
        image: 'image/5.jpeg',
        title: 'SB DUNK ORANGE',
        price: 4500,
    },
    {
        id: 5,
        image: 'image/6.jpeg',
        title: 'YEEZY 350',
        price: 4500,
    },
    {
        id: 6,
        image: 'image/7.jpg',
        title: 'JI SHOES',
        price: 4500,
    },
    {
        id: 7,
        image: 'image/8.jpg',
        title: 'GLOW IN THE DARK',
        price: 4600,
    },
    
    
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}