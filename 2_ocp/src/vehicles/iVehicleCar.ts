export default interface iVehicleCar{
    startVehicle():void;   
    configure(
        color: string,
        number: number,
        engine: number,
        seats: number,
        doors: number
    )
}