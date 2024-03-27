export type colorType = 'secondary' | 'primary' | 'success' | 'error';

export interface GetButtonColorInput {
    option: string,
    optionClicked: string,
    painter: string,
}

export interface IsButtonSelectedAsCorrectAnswerInput extends GetButtonColorInput {}