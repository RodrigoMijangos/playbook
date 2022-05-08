const TRAVEL = {
    begin : "Zocalo de la ciudad",
    destination : "Aeropuerto",
    duration : "30 minutos",
    distance : "12 kilometros",
    getDetails : function (){
        let msg = `Inicio: ${this.begin}\tFinal: ${this.destination}\n`;
        msg += `Duracion del viaje: ${this.duration}\nKilometros Recorridos: ${this.distance}\n`;
        return msg;
    }
}

console.log(TRAVEL.getDetails());