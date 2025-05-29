// Aquí irán los icónos del Navbar
import { FC } from "react";

interface PropsIcons {
    width?: number;
    height?: number;
    classes?: string;
}

const Iconmenuhamburger:FC<PropsIcons> = ( {width = 24, height = 24} ) => {
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
        //   {...props}
        >
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      )
};

const Iconclosemenuhamburger:FC<PropsIcons> = ( {width = 24, height = 24} ) => {
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
        //   {...props}
        >
          <path d="M16.192 6.344l-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
        </svg>
      )
};

const Icondroparrow:FC<PropsIcons> = ( {width = 24, height = 24, classes=''} )  => {
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
          className={classes}
        //   {...props}
        >
          <path d="M16.293 9.293L12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
        </svg>
      )
};

export {
    Iconclosemenuhamburger,
    Iconmenuhamburger,
    Icondroparrow
}