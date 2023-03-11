import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    width: 120px;
    flex-direction: column;
    background-color: rgb(0, 0, 0, 0.2);
    border-radius: 8px;
    backdrop-filter: blur(10px);
    gap: 4px;
`;

const PastilleIcon = styled.div`
    border-radius: 100%;
    background-color: rgb(0, 0, 0, 0.5);
    padding: 8px;
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #fff;
`;

type BoxProps = {
    icon: JSX.Element;
    title: string;
    description: string;
}

export function Box({icon, title, description}:BoxProps):JSX.Element{

    return <Container>
        <PastilleIcon>
        {icon}
        </PastilleIcon>
        <p style={{fontSize: '18px', fontWeight:'bold', color:'#fff'}}>{title}</p>
        <p style={{fontSize:'14px', color:'#fff'}}>{description}</p>
    </Container>
}