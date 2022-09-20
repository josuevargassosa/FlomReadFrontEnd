import { FuseNavigationItem } from "@fuse/components/navigation";

const color_principal = "#E85D36";


export const modulos: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/dashboard'
    },
    {
        id   : 'libros',
        title: 'Libros',
        type : 'basic',
        icon : 'heroicons_outline:book-open',
        link : '/libros'
    },
    {
        id   : 'alumnos',
        title: 'Alumnos',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/alumnos'
    },
    {
        id   : 'resumenes',
        title: 'Resumenes',
        type : 'basic',
        icon : 'heroicons_outline:pencil-alt',
        link : '/resumenes'
    },
];