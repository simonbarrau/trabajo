class Ropa{
    constructor(nombre, precio, envio){
        this.nombre=nombre;
        this.precio=precio;
        this.envio=envio;
        this.vendido=false;
    }
    vender(){
        this.vendido=true;
    }
}

let prendas= [];

prendas.push(new Ropa ("Black Hoodie",6200, "envio gratis"));
prendas.push(new Ropa ("White Hoodie",6200, "envio gratis"));
prendas.push(new Ropa ("Black Cap",6200, "envio gratis"));
prendas.push(new Ropa ("White Cap",6200, "envio gratis"));


for(const item of prendas){
if(item.nombre === "White Hoodie"){
    item.vender()
} 
}

console.log(prendas);