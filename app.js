let continuar;
do {
  // Pedimos al usuario que ingrese la moneda a cotizar
  const moneda = prompt("Ingresa la moneda a cotizar (EUR, GBP, ARS, AUD, CAD, JPY):").toUpperCase();

  // Creamos un objeto con las tasas de cambio de las diferentes monedas
  const cotizacion = {
    USD: 1,
    EUR: 1.14,
    GBP: 1.73,
    JPY: 109.69,
    CAD: 1.27,
    AUD: 1.31,
    ARS: 0.0026455026455026,
  };

  // Verificamos si la moneda ingresada por el usuario está en nuestro objeto de tasas de cambio
  if (cotizacion[moneda]) {
    // Pedimos al usuario que ingrese la cantidad a convertir
    const cantidad = parseFloat(prompt("Ingresa la cantidad a convertir:"))
    alert("La cotización será en DOLARES")

    // Calculamos la cantidad convertida y la mostramos al usuario
    const cantidadConvertida = cantidad * cotizacion[moneda]
    alert(cantidad + " " + moneda + " " + "equivale a " + cantidadConvertida.toFixed(4) + " Dolares")
  } else {
    // Mostramos un mensaje de error si la moneda no está en nuestro objeto de tasas de cambio
    alert("La moneda ingresada no es válida.")
  }

  // Preguntamos al usuario si desea continuar
  continuar = prompt("¿Deseas continuar? (S/N)").toUpperCase()
  if (continuar==="S"){
    alert("Te va a caer la AFIP!")}
  else {
    alert("Bien huído amigo")
  }
} while (continuar === "S")




