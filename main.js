/* mini carrito de supermercado por consola*/
/*Creamos objetos y los cerramos en el arrays de producto*/
class Producto {
    constructor(nombre, precio, disponible, mitadPrecio, precioNormal) {
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
        this.mitadPrecio = mitadPrecio
        this.precioNormal = precioNormal
    }
}

/*Creamos los objetos de nuestro supermercado*/
/* Primero el nombre del producto luego el precio y la cantidad disponible*/
const pan = new Producto("Pan", 220, 2, "Precio normal");
const aceite = new Producto("Aceite", 2200, 7, "Precio normal");
const arroz = new Producto("Arroz", 990, 11, "Precio normal");
const fideos = new Producto("Fideos", 1000, 3, "Precio normal");
const salsa = new Producto("salsa", 550, 14,);
const azucar = new Producto("Azucar", 900, 4);
const sal = new Producto("Sal", 400, 7);
const galletas = new Producto("Galletas", 1700, 0, "oferta");
const mani = new Producto("Mani", 200, 9);
const bebida = new Producto("Bebida", 3000, 7, "oferta");
const mayonesak = new Producto("Mayonesak", 5000, 1, "oferta");
const chocolate = new Producto("Chocolate", 7000, 5, "oferta");
const maruchan = new Producto("Maruchan", 1300, 3);
const margarina = new Producto("Margarina", 1100, 2);
const pate = new Producto("Pate", 300, 0);
const croquetas = new Producto("Croquetas", 1400, 1);
const yogurt = new Producto("Yogurt", 150, 2);
const jugo = new Producto("Jugo", 200, 2);
const cereal = new Producto("Cereal", 6000, 7, "oferta");
const helado = new Producto("Helado", 5400, 1, "oferta");

/*Ahora lo agrupamos todos nuestros productos dentro de un array*/
const productos = [pan, aceite, arroz, fideos, salsa, azucar, sal, galletas, mani, bebida, mayonesak, chocolate, maruchan, margarina, pate, croquetas, yogurt, jugo, cereal, helado];
/* Luego revisamos que se vea bien con consola*/
console.log("Productos disponibles");
console.log(productos);

/*Le aplicamos el metódo sort para que nos busque el producto de menor a mayor precio*/

const productosOrdenados = productos.sort((a, b) => a.precio - b.precio)
console.log("Precio de nuestros productos de menor a mayor")
console.log(productosOrdenados);

function main() {
    const carro_compras = []
    let opcion = "1"

    while (opcion !== "salir") {
        opcion = prompt("Elija una opción de producto: 1) Pan 2)Aceite 3) Arroz 4) Fideos 5)Salsa 6)Azucar 7)Sal 8)Galletas 9)Mani 10)Bebida 11)Mayonesa 12)Chocolate 13)Maruchan 14)Margarina 15)Pate 16)Croquetas 17)Yogurt 18)Jugo 19)Cereal 20)Helado  salir) para salir")

        switch (opcion) {
            case "1":
                carro_compras.push(
                    productos[0]
                )
                alert("se ha agregado pan a tu carro de compras")
                break;
            case "2":
                carro_compras.push(
                    productos[1]
                )
                alert("Se a agregado aceite a tu carro de compras")
                break;
            case "3":
                carro_compras.push(
                    productos[2]
                )
                alert("Se a agregado arroz a tu carro de compras")
                break;
            case "4":
                carro_compras.push(
                    productos[3]
                )
                alert("Se a agregado fideos a tu carro de compras")
                break;
            case "5":
                carro_compras.push(
                    productos[4]
                )
                alert("Se a agregado salsa a tu carro de compras")
                break;
            case "6":
                carro_compras.push(
                    productos[5]
                )
                alert("Se a agregado azucar a tu carro de compras")
                break;
            case "7":
                carro_compras.push(
                    productos[6]
                )
                alert("Se a agregado sal a tu carro de compras")
                break;
            case "8":
                carro_compras.push(
                    productos[7]
                )
                alert("Se a agregado mani a tu carro de compras")
                break;
            case "9":
                carro_compras.push(
                    productos[8]
                )
                alert("Se a agregado bebida a tu carro de compras")
                break;
            case "10":
                carro_compras.push(
                    productos[9]
                )
                alert("Se a agregado mayonesa a tu carro de compras")
                break;
            case "11":
                carro_compras.push(
                    productos[10]
                )
                alert("Se a agregado chocolate a tu carro de compras")
                break;
            case "12":
                carro_compras.push(
                    productos[11]
                )
                alert("Se a agregado maruchan a tu carro de compras")
                break;
            case "13":
                carro_compras.push(
                    productos[12]
                )
                alert("Se a agregado margarina a tu carro de compras")
                break;
            case "14":
                carro_compras.push(
                    productos[13]
                )
                alert("Se a agregado pate a tu carro de compras")
                break;
            case "15":
                carro_compras.push(
                    productos[14]
                )
                alert("Se a agregado croquetas a tu carro de compras")
                break;
            case "16":
                carro_compras.push(
                    productos[15]
                )
                alert("Se a agregado yogurt a tu carro de compras")
                break;
            case "17":
                carro_compras.push(
                    productos[16]
                )
                alert("Se a agregado jugo a tu carro de compras")
                break;
            case "18":
                carro_compras.push(
                    productos[17]
                )
                alert("Se a agregado cereal a tu carro de compras")
                break;
            case "19":
                carro_compras.push(
                    productos[18]
                )
                alert("Se a agregado helado a tu carro de compras")
                break;
            case "salir":
                return
            default:
                alert("La opcion ingresada no es valida")
        }
    }
}
main()
alert("Gracias por su compra")


