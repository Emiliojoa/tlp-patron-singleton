import {Soporte} from "./Soporte"

export class Equipo {
    private observador:Soporte[]= [];
    private nombre: string;
    private tipo: string;
    private estado: string;

    constructor(nombre: string, tipo: string, estado: string) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
    }

    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarCambio();
    }

    agregarObservador(obs: Soporte): void {
        this.observador.push(obs);
    }

    private notificarCambio(): void {
        for (const obs of this.observador) {
            obs.actualizarEstado(this.nombre, this.estado);
        }
    }
}