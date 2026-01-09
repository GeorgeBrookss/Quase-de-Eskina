import styled from 'styled-components';

export const StatusContainer = styled.div`
    width: 100%;
    max-width: fit-content;
    margin: 0 auto;
    border-radius: 20px;
    margin-top: 20px;
    padding: 0.5rem;
    text-align: center;
    font-weight: bold;
    font-size: 1.275rem;
    color: #fffbf9;
    background-color: ${props => props.isOpen ? '#11C163' : ' #F94A4A'};
`;