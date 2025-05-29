import { FC } from 'react';
import './checkboxanimated.scss'

interface PropsCheck {
    width?:  string;
    height?: string;
    style?: React.CSSProperties;
    text?: string; 
}

interface CustomCSSProperties extends React.CSSProperties {
    [key: `--${string}`]: string | number;
}

const CheckBoxAnimated: FC<PropsCheck> = ({
    width  = '150px',
    height = '50px',
    style = {},
    text = '' }) => {
    const dinamycStyle:CustomCSSProperties = {
        ...style,
        '--bgBorder': 'blue'
    }
    return (
        <div className="checkmain">
            <label htmlFor="check">{text}</label>
            <div
                className="checkcontainer"
                style={dinamycStyle}
            >
                <input
                    type="checkbox"
                    name="check"
                    id="check"
                    className='check'
                />
                <div className="check_circle"></div>

            </div>
        </div>

    )
}

export default CheckBoxAnimated