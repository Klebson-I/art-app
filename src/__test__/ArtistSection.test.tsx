import { render, screen } from "@testing-library/react";
import { ArtistSection } from "../components/ArtistSection/ArtistSection";
import img from '../images/el_greco.jpg';
// eslint-disable-next-line jest/no-mocks-import
import { mockIntersectionObserver } from "./__mocks__/mockIntersectionObserver";

const mockDispatchScroll = jest.fn();

jest.mock('../context/ScrollContext', () => ({
    useScrollDispatch: () => mockDispatchScroll,
}));


const NAME = 'Test name';
const INFORMATION = 'Information';
const ARTIST_MAIN_COLOR = 'blue';
const EXAMPLE_IMAGE_TITLE = 'example';

interface RenderSectionInterface {
    name: string;
    information: string;
    artistMainColor: string;
    exampleImageTitle: string;
    isPrimary: boolean;
}
const renderSection = ({
    name,
    information,
    artistMainColor,
    exampleImageTitle,
    isPrimary
}: RenderSectionInterface) => {
    const { container } = render(
        <ArtistSection 
            name={name}
            information={information}
            artistMainColor={artistMainColor}
            exampleImageTitle={exampleImageTitle}
            imgSrc={img}
            isPrimary={isPrimary}
        />
    )
    return container;
}

beforeAll(() => {
    mockIntersectionObserver();
})

describe('Test ArtistSection component', () => {
    it('Should render section with given information from props', () => {
        renderSection({
            artistMainColor: ARTIST_MAIN_COLOR,
            exampleImageTitle: EXAMPLE_IMAGE_TITLE,
            information: INFORMATION,
            name: NAME,
            isPrimary: false,
        });
        const name = screen.getByText(`> ${NAME}`);
        const information = screen.getByText(INFORMATION);
        expect(name).toBeInTheDocument();
        expect(information).toBeInTheDocument();
    });
    it('Should not invoke set ref function when isPrimary given in props is false', () => {
        renderSection({
            artistMainColor: ARTIST_MAIN_COLOR,
            exampleImageTitle: EXAMPLE_IMAGE_TITLE,
            information: INFORMATION,
            name: NAME,
            isPrimary: false,
        });
        expect(mockDispatchScroll).not.toHaveBeenCalled();
    });
    it('Should invoke set ref function when isPrimary given in props is true', () => {
        renderSection({
            artistMainColor: ARTIST_MAIN_COLOR,
            exampleImageTitle: EXAMPLE_IMAGE_TITLE,
            information: INFORMATION,
            name: NAME,
            isPrimary: true,
        });
        expect(mockDispatchScroll).toHaveBeenCalled();
    });
})

export {};