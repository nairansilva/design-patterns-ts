import iVehicleCar from "./iVehicleCar";

export default class Car implements iVehicleCar {
  constructor(
    color: string,
    number: number,
    engine: number,
    seats: number,
    doors: number
  ) {
    this.configure(color, number, engine, seats, doors);
  }

  startVehicle(): void {
    console.log("Ligando os motores!!!");
  }
  configure(
    color: string,
    number: number,
    engine: number,
    seats: number,
    doors: number
  ) {
    console.log(`Criando um carro: ;
        ${color},
        ${number},
        ${engine} potência,
        ${seats} assentos,
        ${doors} portas`);

    this.startVehicle();
  }
}
