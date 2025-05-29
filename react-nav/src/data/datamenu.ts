import { ItemsMenu } from "./interfaces";

export const itemsMenu: ItemsMenu[] = [
    { label: "Inicio", href: "#" },
    {
        label: "Servicios",
        href: "#",
        submenu: [
            {
                label: 'Servicio 1',
                href: 'https://www.ramajudicial.gov.co',
                target: '_blank'
            },
            {
                label: 'Servicio 2',
                href: 'https://www.google.com.co',
                target: '_blank'
            },
            {
                label: 'Servicio 3',
                href: '#'
            },
        ]
    },
    {
        label: "Consultas", href: "#",
        submenu: [
            {
                label: 'Consulta 1',
                href: '#componente1'
            },
            {
                label: 'Consulta 2',
                href: '#componente2'
            },
            {
                label: 'Consulta 3',
                href: '#componente3'
            },
            {
                label: 'Consulta 4',
                href: '#'
            },
            {
                label: 'Consulta 5',
                href: '#'
            },
        ]
    },
    {
        label: "Patrones", href: "#",
        submenu: [
            {
                label: 'Patrón Número 1',
                href: '#'
            },
            {
                label: 'Patrón Número 2',
                href: '#'
            },
            {
                label: 'Patrón Número 3',
                href: '#'
            },
        ]
    },
    { label: "Acerca De", href: "#" }
]

export const itemsMenu1: ItemsMenu[] = [
    { label: "Inicio", href: "#" },
    {
        label: "Servicios",
        href: "#",
    },
    {
        label: "Consultas", href: "#",
        submenu: [
            {
                label: 'Consulta 1',
                href: '#componente1'
            },
            {
                label: 'Consulta 5',
                href: '#'
            },
        ]
    },
    {
        label: "Patrones", href: "#",
    },
    { label: "Acerca De", href: "#" }
]
