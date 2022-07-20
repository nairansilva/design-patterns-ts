import TypeVehicle from "./typeVehicle";
import Motorcycle from "./vehicles/Motorcycle";
import Car from "./vehicles/Car";

let type: TypeVehicle;
let vehicle;

type = retVeiculo(2);

if (type === TypeVehicle.CAR) {
  vehicle = new Car("Amarelo", 2002, 2.0, 4, 4);
} else if (type === TypeVehicle.MOTORCICLE) {
  vehicle = new Motorcycle("Amarelo", 2022, 2.0);
}

function retVeiculo(tipo: number): TypeVehicle {
  if (tipo === 1) {
    return TypeVehicle.CAR;
  }
  return TypeVehicle.MOTORCICLE;
}
