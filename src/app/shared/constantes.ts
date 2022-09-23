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
        id   : 'lector',
        title: 'Lector',
        type : 'basic',
        icon : 'heroicons_outline:users',
        link : '/lectores'
    },
    {
        id   : 'comentario',
        title: 'Comentario',
        type : 'basic',
        icon : 'heroicons_outline:pencil-alt',
        link : '/comentarios'
    },
];

export const grados: string[] = [
    'Universidad',
    'Preparatoria',
    'Secundaria',
    'Primaria',
    'Inicial'
]


export const Instituciones: string[] = [
    'Universidad',
    'Preparatoria',
    'Secundaria',
    'Primaria',
    'Inicial'
]