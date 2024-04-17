export interface Props {
    options: string[] | undefined;
    selected: string | null ;
    handleOptionChange: (index: string) => void;
}