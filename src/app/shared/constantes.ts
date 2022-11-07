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
    'Maternal',
    'Inicial 1',
    'Inicial 2',
    'Primero de básica',
    'Segundo año de educación básica',
    'Tercer año de educación básica',
    'Cuarto año de educación básica',
    'Quinto año de educación básica',
    'Sexto año de educación básica',
    'Séptimo año de educación básica',
    'Octavo año de educación básica',
    'Noveno año de educación básica',
    'Décimo año de educación básica',
    'Primer año de bachillerato',
    'Segundo año de bachillerato',
    'Tercer año de bachillerato',
    'Carrera de nivel superior'
]


export const Instituciones: string[] = [
    'Unidad Educativa Letras y Vida',
    'Unidad Educativa Almirante Lord Thomas',
    'Colegio Hispanoamericano',
    'Unidad Educativa República de Francia',
    'TES',
    'Lexa',
    'UIDE',
    'Universidad Casa Grande',
    'Universidad Pacífico'
]