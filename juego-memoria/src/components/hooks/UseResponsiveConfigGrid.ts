// Programamos un hook para la configuración responsive del componente

import { useEffect, useMemo, useState } from "react";


type UseResponsiveGridConfigParams = {
    cols: number;
    rows: number;
    mobileBreakpoint?: number; // por defecto 768px
};

export const useResponsiveConfigGrid = ({
    cols,
    rows,
    mobileBreakpoint = 768
}: UseResponsiveGridConfigParams) => {

    const [isMobile, setIsMobile] = useState(false)
    // Calculamos cómo irá el grid, dependiendo del viewport

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`);
        const handler = () => setIsMobile(mediaQuery.matches);
        handler(); // Ejecutar al inicio
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, [mobileBreakpoint]);

    // Calculamos la grid, dependiendo del ancho del viewport
    const gridConfig = useMemo<React.CSSProperties>(() => {
        if (isMobile) {
            return {
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gridTemplateRows: 'auto', // o puedes omitirlo si el contenido define las filas
            };
        }

        return {
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
        };
    }, [cols, rows, isMobile]);

    return gridConfig
}