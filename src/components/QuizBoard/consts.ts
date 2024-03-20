import { QuestionsAssignsListType } from "./types";
import bruagelQuestionImage from '../../images/Q_Bruegel.jpg';
import cezanneQuestionImage from '../../images/Q_Cezanne.jpg';
import elgrecoQuestionImage from '../../images/Q_El_greco.jpg';
import goyaQuestionImage from '../../images/Q_Goya.jpg';
import halsQuestionImage from '../../images/Q_Hals.jpg';
import hayezQuestionImage from '../../images/Q_Hayez.jpg';
import hopperQuestionImage from '../../images/Q_Hopper.jpg';
import rubensQuestionImage from '../../images/Q_Rubens.jpg';
import vermeerQuestionImage from '../../images/Q_Vermeer.jpg';
import magritteQuestionImage from '../../images/Q_magritte.jpg';

export const QUESTION_ASSIGNS: QuestionsAssignsListType = [
    {
        image: bruagelQuestionImage,
        painter: 'Peter Bruegel the Elder'
    },
    {
        image: cezanneQuestionImage,
        painter: 'Paul Cezanne'
    },
    {
        image: elgrecoQuestionImage,
        painter: 'El Greco'
    },
    {
        image: goyaQuestionImage,
        painter: 'Francisco Goya'
    },
    {
        image: halsQuestionImage,
        painter: 'Frans Hals'
    },
    {
        image: hayezQuestionImage,
        painter: 'Francesco Hayez'
    },
    {
        image: hopperQuestionImage,
        painter: 'Edward Hopper'
    },
    {
        image: rubensQuestionImage,
        painter: 'Peter Paul Rubens'
    },
    {
        image: vermeerQuestionImage,
        painter: 'Jan Vermeer'
    },
    {
        image: magritteQuestionImage,
        painter: 'Rene Magritte'
    },
];

export const PAINTERS = [
    'Rene Magritte', 
    'El Greco', 
    'Jan Vermeer', 
    'Peter Paul Rubens', 
    'Edward Hopper', 
    'Francesco Hayez', 
    'Frans Hals', 
    'Francisco Goya', 
    'Paul Cezanne', 
    'Peter Bruegel the Elder',
    'Tiziano',
    'Rafael Santi',
    'Hieronimus Bosch',
    'Francesco Guardi',
    'Canaletto',
    'Giovanni Bellini',
    'Andrea Mantegna',
    'Rembrandt',
    'Leonadro Da Vinci',
];

const QUESTIONS_COUNT = 10;