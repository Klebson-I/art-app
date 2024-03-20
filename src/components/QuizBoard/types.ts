export interface QuestionsAssignInterface {
    image: string;
    painter: string;
};

export interface QuestionsAssignWithOptionsInterface extends QuestionsAssignInterface{
    options: string[];
};

export type QuestionsAssignsListType = QuestionsAssignInterface[];

export type QuestionsAssignsWithOptionsListType = QuestionsAssignWithOptionsInterface[];