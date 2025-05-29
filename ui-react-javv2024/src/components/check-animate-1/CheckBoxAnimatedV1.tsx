import { FC } from 'react';
import './checkboxanimatedv1.scss';

interface CustomCSSProperties extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

interface PropsCheckV1 extends React.InputHTMLAttributes<HTMLInputElement> {
    width?: string;
    height?: string;
    style?: React.CSSProperties;
    text?: string;
    color?: React.CSSProperties['color'];
}


const CheckBoxAnimatedV1: FC<PropsCheckV1> = ({
    width = '60px',
    height = '30px',
    style = {},
    text = 'Escoja',
    color = 'black',
    ...props
}) => {
    const dynamicStyle: CustomCSSProperties = {
        ...style,
        '--width': width || '80px',
        '--height': height || '40px',
        '--color': color || 'black'
    }

    return (
        <>
            <div
                className="check-container"
                style={dynamicStyle}
            >
                <label htmlFor="inputcheck">{text}</label>
                <div className="input-check">
                    <input
                        type="checkbox"
                        name="checkbox"
                        id="inputcheck"
                        checked={props.checked}
                        onChange={props.onChange}
                    />
                </div>
            </div>
        </>
    )
}
export default CheckBoxAnimatedV1