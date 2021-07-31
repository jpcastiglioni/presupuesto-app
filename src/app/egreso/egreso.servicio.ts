import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos: Egreso[]=[
        new Egreso("Renta depto", 900),
        new Egreso("Ropa", 200),
    ]

    eliminar(egreso: Egreso){
        const index:number = this.egresos.indexOf(egreso);
        this.egresos.splice(index,1);
    }
}