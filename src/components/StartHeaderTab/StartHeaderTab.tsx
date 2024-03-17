import { Box } from "@mui/material"
import paint from '../../images/magritte.jpg';
import './style.css';
import { withBowDecoration } from "../Wrappers/withBowDecoration/withBowDecoration";
import { CustomImage } from "../CustomImage/CustomImage";
import { useScrollState } from "../../context/ScrollContext";
import { MAIN_HEADER_TEXT, MAIN_PARAGRAPH_TEXT } from "./constants";
import { SCROLL_TO_ARTIST_BUTTON, SCROLL_TO_QUIZ_BUTTON } from "../testAccessors";
import { scrollToRef } from "./utils";

export const StartHeaderTab = () => {
    const { artistSectionRef, goToQuizRef } = useScrollState();
    const WithDecoration = withBowDecoration(CustomImage);


    return <Box className='box'>
        <Box className="headingImageContainer">
            <WithDecoration src={paint} alt='magritte' tooltipText='Rene Magritte: Night Tree'/>
        </Box>
        <h1 className="heading">
            {MAIN_HEADER_TEXT}
        </h1>
        <p className="paragraph">
            {MAIN_PARAGRAPH_TEXT}
        </p>
        <Box className="buttonBox">
            <button 
                className="headerButton" 
                onClick={() => scrollToRef(artistSectionRef)}
                data-testid={SCROLL_TO_ARTIST_BUTTON}
            >
                Know artist more
            </button>
            <button 
                className="headerButton" 
                onClick={() => scrollToRef(goToQuizRef)}
                data-testid={SCROLL_TO_QUIZ_BUTTON}
            >
                Go to quiz
            </button>
        </Box>
        
    </Box>
}