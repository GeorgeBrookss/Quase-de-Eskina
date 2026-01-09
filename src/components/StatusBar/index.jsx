import { StatusContainer } from './styles';

export function StatusBar() {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();

    let isOpen = false;
    let text = "Fechado no momento";

    if (day >= 1 && day <= 3) {
    if (hour >= 9 && hour < 16) isOpen = true;
    }

    if (day >= 4 && day <= 6) {
    if (hour >= 10 && hour < 24) isOpen = true;
    }

    if (day === 0) {
    if (hour >= 14 && hour < 24) isOpen = true;
    }

    if (isOpen) {
    text = "Aberto agora";
    }

    return (
    <StatusContainer isOpen={isOpen}>
        {text}
    </StatusContainer>
    )
}