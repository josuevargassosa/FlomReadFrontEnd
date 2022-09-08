import { FuseNavigationItem } from "@fuse/components/navigation";

const color_principal = "#E85D36";


export const modulos: FuseNavigationItem[] = [
    {
        id   : 'dashboard',
        title: 'Dashboard',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
    {
        id   : 'libros',
        title: 'Libros',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example1'
    },
    {
        id   : 'resumenes',
        title: 'Resumenes',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example2'
    },
];