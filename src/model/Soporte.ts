export class Soporte {
    private id: number;
    actualizarEstado(nombre: string, estado: string): void {
        console.log(`Soporte notificado: ${nombre} ha cambiado su estado a ${estado}.`);
    }
}