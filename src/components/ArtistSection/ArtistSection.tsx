import { Box } from "@mui/material";
import './style.css';
import roseImg from '../../images/rose.png';
import { CustomImage } from "../CustomImage/CustomImage";
import { useEffect, useRef, useState } from "react";
import { useIsElementVisible } from "../../hooks/useIsElementVisible";
import { ANIMATION_CLASS } from "./constants";

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
            setAdditionalClassHeader(ANIMATION_CLASS.SLIDE_ONE_SEC);
            setAdditionalClassInfo(ANIMATION_CLASS.SLIDE_TWO_SEC);
        }
    }, [isVisible]);
    
    return <Box className="painterBox" sx={{backgroundColor: `${artistMainColor}`}} ref={ref}>
        <CustomImage src={imgSrc} alt={name} tooltipText={exampleImageTitle} width="20rem"/>
        <div className="informationContainer">
            <h1 className={`painterName ${additionalClassHeader}`}>{`> ${name}`}</h1>
            <p className={`painterInformation ${additionalClassInfo}`}>{information}</p>
        </div>
        <img src={roseImg} alt="decoration-rose"/>
    </Box>
};
