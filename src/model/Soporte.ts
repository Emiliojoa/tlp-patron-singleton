export class Soporte {
    private id: number = Math.floor(Math.random() * 1000);
    actualizarEstado(nombre: string, estado: string): void {
        console.log(`Soporte notificado: ${nombre} ha cambiado su estado a ${estado}.`);
    }
}