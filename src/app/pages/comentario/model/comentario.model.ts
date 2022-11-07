import { Lector } from "app/pages/lector/model/lector.model";
import { Libro } from "app/pages/libro/model/libro.model";

export type Comentario = {
    id: number;
    idLibroLector: number;
    descripcion: string;
    libro: Libro;
    lector: Lector;
    fechaCreacion: string;
    fechaModificacion: string;
}