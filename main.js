/* mini carrito de supermercado por consola*/
/*Creamos objetos y los cerramos en el arrays de producto*/
class Producto {
    constructor(nombre, precio, disponible) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }
}

/*Creamos los objetos de nuestro supermercado*/
/* Primero el nombre del producto luego el precio y la cantidad disponible*/
const pan = new Producto("Pan", 220, 2);
const aceite = new Producto("Aceite", 2200, 7);
const arroz = new Producto("Arroz", 990, 11);
const fideos = new Producto("Fideos", 1000, 3);
const salsa = new Producto("salsa", 550, 14);
const azucar = new Producto("Azucar", 900, 4);
const sal = new Producto("Sal", 400, 7);
const galletas = new Producto("Galletas",1700 ,0 );
const mani = new Producto("Mani",200 ,9 );
const bebida = new Producto("Bebida",3000 ,7 );
const mayonesak = new Producto("Mayonesak",5000 ,1 );
const chocolate = new Producto("Chocolate", 7000 ,5 );
const maruchan = new Producto("Maruchan", 1300 ,3 );
const margarina = new Producto("Margarina",1100 ,2 );
const pate = new Producto("Pate", 300 , 0);
const croquetas = new Producto("Croquetas", 1400 ,1 );
const yogurt = new Producto("Yogurt", 150 , 2);
const jugo = new Producto("Jugo", 200 , 2);
const cereal = new Producto("Cereal", 6000, 7);
const helado = new Producto("Helado", 5400, 1);

/*Ahora lo agrupamos todos nuestros productos dentro de un array*/
const arrayProductos = [pan, aceite, arroz, fideos, salsa, azucar, sal, galletas, mani, bebida, mayonesak, chocolate, maruchan, margarina, pate, croquetas, yogurt, jugo, cereal, helado];
/* Luego revisamos que se vea bien con consola*/
console.log("Productos disponibles");
console.log(arrayProductos);
/*Le aplicamos el metódo reduce que me permite obtener el total del carrito de compras pasandole parametros*/







