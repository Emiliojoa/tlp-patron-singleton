import { AdaptadorInventario } from "./modulos/Adaptador";
import { Equipo } from "./modulos/Equipo";
import { EquipoFactory } from "./modulos/EquipoFactory";
import { Inventario } from "./modulos/Inventario";
import { InventarioViejo } from "./modulos/InventarioViejo";
import { Soporte } from "./modulos/Soporte";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<div>
    <h1>Mira la consola -----></h1>
</div>
`




// Punto 1 

const inventario = Inventario.obtenerInstancia();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
console.log(inventario.listarEquipos());

// Punto 2 

const factory = new EquipoFactory();
const Notebook = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
console.log(Notebook.detalles());
// Tipo: Notebook, Nombre: Dell XPS, RAM: 16GB, Procesador: i7

// Punto 3

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
// Soporte notificado: Notebook HP ha cambiado su estado a en reparación.

//Punto 4 


const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Servidor Dell", tipo: "Servidor", estado: "disponible" }]