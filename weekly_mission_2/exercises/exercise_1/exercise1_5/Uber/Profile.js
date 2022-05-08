const PROFILE = {
    username : "RodrigoMijangos",
    reviews : [
        {
            user : "ViajanteFrecuente",
            rate : 5,
            title : "El servicio es increíble",
            body : "El viaje me hizo sentir muy cómodo",
            travel : {
                begin : "Zócalo de la Ciudad",
                destination : "Aeropuerto",
                duration : "53 minutos",
                distance : "15 kilometros"
            }
        },
        {
            user : "ViajantePromedio",
            rate : 4.5,
            title : "Me sentí muy seguro",
            body : "El conductor respetaba correctamente las reglas de vialidad",
            travel : {
                begin : "Aeropuerto",
                destination : "Centro comercial",
                duration : "40 minutos",
                distance : "13 kilometros"
            }
        },
        {
            user : "ViajanteComun",
            rate : 5,
            title : "Buen servicio",
            body : "",
            travel : {
                begin : "Plaza comercial",
                destination : "Zoológico",
                duration : "53 minutos",
                distance : "15 kilometros"
            }
        },
    ],
    car : "Bicibleta de montaña rodada 15",
    addReview : function (review){
        this.reviews.push(review);
        return true;
    },
    setRaiting : function (){
        let raiting = 0;
        this.reviews.forEach(
            review => {
                raiting += review.rate;
            }
        );
        raiting = raiting/this.reviews.length;
        raiting = raiting.toFixed(1);
        return raiting;
    },
    getDetails : function () {
        let msg = `${this.username}\t${this.setRaiting()} estrellas\n`;
        msg += `${this.reviews.length} reseñas.\n`;
        this.reviews.forEach(
            review => {
                msg += `----------------------------------\n`;
                msg += `${review.user}\n${review.title}\n${review.rate} estrellas\n${review.body}\n`;
                msg += `Inicio: ${review.travel.begin}\tFinal: ${review.travel.destination}\n`;
                msg += `Duracion del viaje: ${review.travel.duration}\nKilometros Recorridos: ${review.travel.distance}\n`;
            }
        );
        return msg;
    }
}

let newReview = {
    user : "ViajanteComun",
    rate : 5,
    title : "Otro buen viaje",
    body : "",
    travel : {
        begin : "Av. Coreola",
        destination : "Zoológico",
        duration : "30 minutos",
        distance : "8 kilometros"
    }
}

console.log(PROFILE.getDetails());
console.log("Añadiendo nueva reseña");
if(PROFILE.addReview(newReview))
    console.log(PROFILE.getDetails());