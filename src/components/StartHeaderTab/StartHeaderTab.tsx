import { Box } from "@mui/material"
import paint from '../../images/magritte.jpg';
import './style.css';
import { withBowDecoration } from "../Wrappers/withBowDecoration/withBowDecoration";
import { CustomImage } from "../CustomImage/CustomImage";
import { useScrollState } from "../../context/ScrollContext";

export const StartHeaderTab = () => {
    const { artistSectionRef } = useScrollState();
    const WithDecoration = withBowDecoration(CustomImage);

    const scrollToArtistSection = () => {
        artistSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return <Box className='box'>
        <Box className="headingImageContainer">
            <WithDecoration src={paint} alt='magritte' tooltipText='Rene Magritte: Night Tree'/>
        </Box>
        <h1 className="heading">
            Welcome in art app
        </h1>
        <p className="paragraph">
            Let's get you a little bit into painters and masterpieces
        </p>
        <Box className="buttonBox">
            <button className="headerButton" onClick={scrollToArtistSection}>Know artist more</button>
            <button className="headerButton">Go to quiz</button>
        </Box>
        
    </Box>
}