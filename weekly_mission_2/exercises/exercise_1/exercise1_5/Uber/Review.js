const REVIEW = {
    user : "ViajantePromedio",
    rate : 4.5,
    title : "Me sentí muy seguro",
    body : "El conductor respetaba correctamente las reglas de vialidad",
    travel : {
        begin : "Aeropuerto",
        destination : "Centro comercial",
        duration : "40 minutos",
        distance : "13 kilometros"
    },
    getDetails : function (){
        let msg = `${this.user}\n${this.title}\n${this.rate} estrellas\n${this.body}\n`;
        msg += `Inicio: ${this.travel.begin}\tFinal: ${this.travel.destination}\n`;
        msg += `Duracion del viaje: ${this.travel.duration}\nKilometros Recorridos: ${this.travel.distance}\n`;
        return msg;
    }
}

console.log(REVIEW.getDetails())