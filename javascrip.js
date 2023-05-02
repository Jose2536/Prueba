console.log(calificacionHotel(hoteles, "hotel1"));
let hoteles = [{ nombre: "hotel1", internet:"wifi", parking: "estacionamientogratis", comida:"desayuno"  , calificaciongoogle: "100" },
               { nombre: "hotel2", internet:" "   , parking: "estacionamientogratis", comida:" "         , calificaciongoogle: "60"  },
               { nombre: "hotel3", internet:"wifi", parking: "estacionamientopago"  , comida:"desayuno"  , calificaciongoogle: "80"  },
               { nombre: "hotel4", internet:" "   , parking: "estacionamientopago"  , comida:" "         , calificaciongoogle: "40"  },
               { nombre: "hotel5", internet:"wifi", parking: "estacionamientopago"  , comida:" "         , calificaciongoogle: "70"  }];

//Funcion para saber si esta el hotel y devolver el indice
function estaHotel(hoteles, elegido) {
    for (let i = 0; i < hoteles.length; i++) {
        if (hoteles[i].nombre === elegido) {
            return i;
        }
    }
    return -1;
}

function calificacionHotel(hoteles, nombreHotel) {
    let i = estaHotel(hoteles, nombreHotel);
    if (i !== -1) {
        let x = 0;
        if (hoteles[i].parking === "estacionamientogratis") {
            x++;
        }
        if (hoteles[i].internet === "wifi") {
            x++;
        }
        if (hoteles[i].comida === "desayuno") {
            x++;
        }
        if (hoteles[i].calificaciongoogle >= 80) {
            x++;
        }
        return x;
    } else {
        return "no tiene calificacion";
    }
}
//cambio nueva rama 