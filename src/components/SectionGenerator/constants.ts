import { PainterSection } from "./types";
import vermeerImage from '../../images/vermeer.jpg';
import elGrecoImage from '../../images/el_greco.jpg';
import hayezImage from '../../images/hayez.jpg';

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
        information: "Precursor of impresionist art. Raised in Greece, qualified in Italy, spend most of life in Toledo, little town near to Madrit. Known because of specific brushstroke and colors used in paintings. People in his works are so often twisted, that only flame comes to mind.",
        name: 'El greco'
    },
    {
        artistMainColor: '#4B0082',
        exampleImageTitle: 'Kiss',
        imgSrc: hayezImage,
        information: "Italian painter born in Milan. His favorite topics was history, which he decorates with alegory. His famous Kiss is still considered as a symbol of Italy unity. Art students are thankful to him because of many artworks showing old italian fashion.",
        name: 'Francesco Hayez'
    },
]