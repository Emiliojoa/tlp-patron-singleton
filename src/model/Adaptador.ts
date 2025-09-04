import type { InventarioViejo } from "./InventarioViejo";

export class AdaptadorInventario  {
  private viejo: InventarioViejo;
  constructor(viejo: InventarioViejo) {
    this.viejo = viejo
  }

  agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.viejo.agregarItem(nombre, tipo, estado);
  }


  listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
    return this.viejo.listarEquipos();
  }
}

