import { Box } from "@mui/material"
import paint from '../../magritte.jpg';
import './style.css';
import { withBowDecoration } from "../Wrappers/withBowDecoration/withBowDecoration";
import { CustomImage } from "../CustomImage/CustomImage";

export const StartHeaderTab = () => {
    const WithDecoration = withBowDecoration(CustomImage);
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
            <button className="headerButton">Know artist more</button>
            <button className="headerButton">Go to quiz</button>
        </Box>
        
    </Box>
}