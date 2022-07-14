


class Ropa{
    constructor(nombre, precio, envio, descuento, stock){
        this.nombre=nombre;
        this.precio=precio;
        this.envio=envio;
        this.descuento=descuento;
        this.stock=stock;
        this.vendido=false;
    }
    vender(){
        this.vendido=true;
    }
    calcIva(){
        this.precio= this.precio * 1.21
    }
    calcDescuento(){
        this.precio = this.precio * 1.21 - (this.precio *1.21 * 0.3)
    }
}

const buzo1 = new Ropa("Trap Violet", 10000, "envio gratis","Descuento:OFF", "stock: Available")
const buzo2 = new Ropa("Orange Trapstar", 10000, "envio gratis","Descuento:ON", "stock: Available")
const buzo3 = new Ropa("Orange 666", 10000, "envio gratis","Descuento:OFF", "stock: Available")
const buzo4 = new Ropa("Green Teeth", 10000, "envio gratis","Descuento:ON", "stock: Available")
const buzo5 = new Ropa("Trap Watermelon", 10000, "envio gratis","Descuento:OFF", "stock: Out of")
const buzo6 = new Ropa("Spine 22", 10000, "envio gratis","Descuento:ON", "stock: Available")
let prendas= [];
prendas.push(buzo1);
prendas.push(buzo2);
prendas.push(buzo3);
prendas.push(buzo4);
prendas.push(buzo5);
prendas.push(buzo6);

buzo1.calcIva ();
buzo3.calcIva ();
buzo5.calcIva ();

buzo2.calcDescuento ();
buzo4.calcDescuento ();
buzo6.calcDescuento();





for(const item of prendas){
if(item.nombre === "Trap Watermelon"){
    item.vender()
} 
}

console.log(prendas);