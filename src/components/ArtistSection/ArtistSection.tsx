import { Box } from "@mui/material";
import './style.css';
import { CustomImage } from "../CustomImage/CustomImage";
import { useEffect, useRef, useState } from "react";
import { useIsElementVisible } from "../../hooks/useIsElementVisible";

interface Props {
    name: string;
    information: string;
    artistMainColor: string;
    imgSrc: string;
    exampleImageTitle: string;
}


export const ArtistSection: React.FC<Props> = ({ name, information, artistMainColor, imgSrc, exampleImageTitle }) => {
    const ref = useRef<Element|null>(null);
    const [additionalClassHeader, setAdditionalClassHeader] = useState<string>('');
    const [additionalClassInfo, setAdditionalClassInfo] = useState<string>('');
    const isVisible = useIsElementVisible(ref);

    useEffect(() => {
        if(isVisible) {
            setAdditionalClassHeader('animateSlideOneSec');
            setAdditionalClassInfo('animateSlideTwoSec');
        }
    }, [isVisible]);
    
    return <Box className="painterBox" sx={{backgroundColor: `${artistMainColor}`}} ref={ref}>
        <CustomImage src={imgSrc} alt={name} tooltipText={exampleImageTitle} width="20rem"/>
        <div className="informationContainer">
            <h1 className={`painterName ${additionalClassHeader}`}>{`> ${name}`}</h1>
            <p className={`painterInformation ${additionalClassInfo}`}>{information}</p>
        </div>
    </Box>
};
