// El objetivo del proyecto es calcular el porcentaje de tiro de un basquetbolista 
// Mediante el uso de function conseguimos que se realice el calculo de los daton ingresados por el usuario 
function calcularPorcentajeTiro(intentos, exitos) {
    if (intentos === 0) {
        return 0;
    }

    return (exitos / intentos) * 100;
}

// En este punto del proyecto realizamos los prompt necesarios para que el usuario ingrese los datos que busca calcular 
const intentos = parseInt(prompt("Ingrese la cantidad de intentos de tiro:"));
const exitos = parseInt(prompt("Ingrese la cantidad de tiros exitosos:"));

// Acá busco que porcentajeTiro de el calcularPorcentajeTiro 
const porcentajeTiro = calcularPorcentajeTiro(intentos, exitos);

// Acá hago que se muestren los resultados del porcentaje 
console.log(`El porcentaje de tiro es: ${porcentajeTiro}%`);

alert(`El porcetaje de tiro de su jugador es: ${porcentajeTiro}%`)


// Dependiendo el porcentaje del resultado se muestra un mensaje distinto 
if(porcentajeTiro < 30){
    console.log("Debería practicar más")
    alert("Deberías seguir practicando tu tiro!")
}else if(porcentajeTiro >=30 && porcentajeTiro <=51){
    console.log("Tenés un buen tiro, seguí así!")
    alert("Tenés un buen tiro, seguí así!")
}else if(porcentajeTiro >51 && porcentajeTiro <=99){
    console.log("Sos muy bueno, ser tirador es lo tuyo")
    alert("Sos muy bueno, ser tirador es lo tuyo")
}else if(porcentajeTiro ==100){
    console.log("Sos un robot, que locura")
    alert("Sos un robot, que locura")
}
