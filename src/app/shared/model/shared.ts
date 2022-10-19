import { Lector } from "app/pages/lector/model/lector.model";
import { Libro } from "app/pages/libro/model/libro.model";

export type LibroLector = {
    id: number;
    lector: Lector;
    libro: Libro;
    estado: string;
    tiempo?: string;
    fechaCreacion: string;
    fechaModificacion: string;
}

export type createLibroLector = {
    idLibro: string;
    idLector: string;
    estado: string;
}