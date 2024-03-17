import React from "react";
import { ArtistSection } from "../ArtistSection/ArtistSection"
import { paintersSections } from "./constants"

export const SectionGenerator: React.FC<{}> = () => {
    const sections = paintersSections.map(({
        artistMainColor,
        exampleImageTitle,
        imgSrc,
        information,
        name,
    }, index) => (
        <ArtistSection 
            artistMainColor={artistMainColor}
            exampleImageTitle={exampleImageTitle}
            imgSrc={imgSrc}
            information={information}
            name={name}
            key={index}
            isPrimary={index === 0}
        />
    ))

    return <>
        {sections}
    </>;
}