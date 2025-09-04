import {type  Equipo } from "../interfaces/IEquipo";

export class Inventario {
    private static instancia: Inventario;
    private equipos: Equipo[] = [];

    private constructor(){
}

    public static obtenerInventario():Inventario {
        if(!Inventario.instancia){
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia
    }

    public agregarEquipo({ nombre, tipo, estado }: Equipo): void {
        if (!nombre || !tipo  || !estado){
            console.log("porfa ingrese todos los campos")
        }
        this.equipos.push({nombre, tipo, estado});
    }

    public listarEquipos(): Equipo[] {
        return this.equipos;
    }
}
