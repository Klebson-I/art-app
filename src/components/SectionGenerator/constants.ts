import { PainterSection } from "./types";
import vermeerImage from '../../images/vermeer.jpg';
import elGrecoImage from '../../images/el_greco.jpg';

export const paintersSections: PainterSection[] = [
    {
        artistMainColor: '#FFDB58',
        exampleImageTitle: 'Reading letter woman',
        imgSrc: vermeerImage,
        information: "Mysterious man born in Delft. We donk know much about his life. He's favorite topic of paintings were women. He got outstanding sign that went through souls of peoples. Mysterious man born in Delft. We donk know much about his life. He's favorite topic of paintings were women. He got outstanding sign that went through souls of peoples.",
        name: 'Vermeer'
    },
    {
        artistMainColor: 'midnightblue',
        exampleImageTitle: 'View of Toledo',
        imgSrc: elGrecoImage,
        information: "Precursor of impresionist art. Raised in Greece, qualified in Italy, spend most of life in Toledo, little town near to Madrit. Known because of specific brushstroke and colors used in paintings. People in his works are so often twisted, that only flame comes to mind",
        name: 'El greco'
    },
]