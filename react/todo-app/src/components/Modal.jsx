import styled from 'styled-components';

export const Modal = ({
  children,
  closeModal,
}) => {
  return (
    <Background onClick={closeModal}>
      <Container
        onClick={(event) =>
          event.stopPropagation()
        }>
        <button onClick={closeModal}>
          close
        </button>
        {children}
      </Container>
    </Background>
  );
};

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #000000cc;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background: white;
  border-radius: 12px;
  width: 400px;
  height: 300px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`;
