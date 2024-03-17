import { Tooltip } from '@mui/material';
import './style.css'

interface Props {
    src: string;
    alt: string;
    tooltipText?: string;
    width?: string;
}   

export const CustomImage: React.FC<Props> = ({ src, alt, tooltipText, width}) => {
    return <Tooltip title={tooltipText}>
        <span>
            <img 
                src={src} 
                className="headingImage" 
                alt={alt} 
                style={
                    width
                    ? { width }
                    : {}
                }
            />
        </span>
    </Tooltip>
}