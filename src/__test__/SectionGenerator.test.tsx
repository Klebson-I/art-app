/* eslint-disable jest/no-mocks-import */
import { render, screen } from "@testing-library/react";
import { SectionGenerator } from "../components/SectionGenerator/SectionGenerator";
import { ARTIST_SECTION } from "../components/testAccessors";
import { mockIntersectionObserver } from "./__mocks__/mockIntersectionObserver";

jest.mock("../components/SectionGenerator/constants", () => ({
    paintersSections: [
        {
            artistMainColor: '',
            exampleImageTitle: '',
            imgSrc: '',
            information: "",
            name: ''
        },
        {
            artistMainColor: '',
            exampleImageTitle: '',
            imgSrc: '',
            information: "",
            name: ''
        },
        {
            artistMainColor: '',
            exampleImageTitle: '',
            imgSrc: '',
            information: "",
            name: ''
        },
        {
            artistMainColor: '',
            exampleImageTitle: '',
            imgSrc: '',
            information: "",
            name: ''
        },
    ],
}));

const mockDispatchScroll = jest.fn();

jest.mock('../context/ScrollContext', () => ({
    useScrollDispatch: () => mockDispatchScroll,
}));

const renderSectionGenerator = () => {
    const { container } = render(
        <SectionGenerator />
    )
    return container;
}

beforeAll(() => {
    mockIntersectionObserver();
})


describe('Test ArtistSection component', () => {
    it('Should render 4 ArtistSections when paintersSections have length of 4 elements in constants.ts file', () => {
        renderSectionGenerator();
        const sections = screen.getAllByTestId(ARTIST_SECTION);
        expect(sections).toHaveLength(4);
    });
})

export {};