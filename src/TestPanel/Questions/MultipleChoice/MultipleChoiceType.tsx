export interface Props {
    options: string[] | undefined;
    selected: string[] ;
    handleOptionsChange: (index: string) => void 
}