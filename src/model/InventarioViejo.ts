export class InventarioViejo {
  private Items: { nombre: string; tipo: string; estado: string }[] = [];


  public agregarItem(nombre: string, tipo: string, estado: string): void {
    this.Items.push({ nombre, tipo, estado });
  }

  public listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
    return this.Items;
  }
}

