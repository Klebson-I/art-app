export interface ScrollStateInterface {
    artistSectionRef: any;
    goToQuizRef: any;
}

export interface ScrollStateAction {
    action: string;
    payload: any;
}

export type ScrollContextType = ScrollStateInterface | null;
export type ScrollDispatchContextType = React.Dispatch<ScrollStateAction> | null;