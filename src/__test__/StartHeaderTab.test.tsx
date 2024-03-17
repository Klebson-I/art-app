import { render, screen } from "@testing-library/react";
import { StartHeaderTab } from "../components/StartHeaderTab/StartHeaderTab";
import { MAIN_HEADER_TEXT, MAIN_PARAGRAPH_TEXT } from "../components/StartHeaderTab/constants";
import { SCROLL_TO_ARTIST_BUTTON, SCROLL_TO_QUIZ_BUTTON } from "../components/testAccessors";
import * as utils from "../components/StartHeaderTab/utils";
import userEvent from "@testing-library/user-event";

const spyOnScroll = jest.spyOn(utils, 'scrollToRef').mockImplementation(() => {});

jest.mock('../context/ScrollContext', () => ({
    useScrollState: () => ({
        artistSectionRef: {},
        goToQuizRef: {},
    })
}))

const renderComponent = () => {
    const { container } = render(
        <StartHeaderTab />
    )
    return container;
}

describe('Test StartHeaderTab component', () => {
    it('Should render header, paragraph and 2 buttons', () => {
        renderComponent();
        const header = screen.getByText(MAIN_HEADER_TEXT);
        const paragraph = screen.getByText(MAIN_PARAGRAPH_TEXT);
        const scrollToArtist = screen.getByTestId(SCROLL_TO_ARTIST_BUTTON);
        const scrollToQuiz = screen.getByTestId(SCROLL_TO_QUIZ_BUTTON);
        expect(header).toBeInTheDocument();
        expect(paragraph).toBeInTheDocument();
        expect(scrollToArtist).toBeInTheDocument();
        expect(scrollToQuiz).toBeInTheDocument();
    });
    it('Should invoke scroll function when scroll to artist button is clicked', () => {
        renderComponent();
        const scrollToArtist = screen.getByTestId(SCROLL_TO_ARTIST_BUTTON);
        userEvent.click(scrollToArtist);
        expect(spyOnScroll).toHaveBeenCalled();
    });
    it('Should invoke scroll function when scroll to quiz button is clicked', () => {
        renderComponent();
        const scrollToQuiz = screen.getByTestId(SCROLL_TO_QUIZ_BUTTON);
        userEvent.click(scrollToQuiz);
        expect(spyOnScroll).toHaveBeenCalled();
    });
})

export {};