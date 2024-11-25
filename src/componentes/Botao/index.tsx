import { ReactElement } from "react";

interface BotaoProps {
    label: string | ReactElement;
    onClick: () => void;
    className?:string;
}

const Botao = ({ label, onClick, className }: BotaoProps) => {
    return (
        <button className={className} onClick={onClick}>{label}</button>
    )
}

export default Botao