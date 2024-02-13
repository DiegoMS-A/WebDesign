//SWITCH

const metodoPago = "tarjeta"

switch (metodoPago) {

    case "tarjeta":
        console.log("Pagaste con tarjeta")
        break;

    case "transferencia":
        console.log("Pagaste con  transferencia")
        break;

    case "cheque":
        console.log("Pagaste con cheque")
        break;

    default:
        console.log("Aun no has pagado")

}