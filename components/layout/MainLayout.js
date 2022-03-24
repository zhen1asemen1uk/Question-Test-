import styled from "styled-components";

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;
    width: 80%;
    height: 100%;
`;

const MainLayout = ({ children }) => {
    return <Page>{children}</Page>;
};

export default MainLayout;
