import iVehicleMotorcycle from "./iVehicleMotorcycle";

export default class Motorcycle implements iVehicleMotorcycle {
  constructor(
    color: string,
    number: number,
    engine: number
  ) {
    this.configure(color, number, engine);
  }

  startVehicle(): void {
    console.log("Ligando os motores!!!");
  }
  configure(
    color: string,
    number: number,
    engine: number,
 
  ) {
    console.log(`Criando um carro: ;
        ${color},
        ${number},
        ${engine} potência`);

    this.startVehicle();
  }
}
