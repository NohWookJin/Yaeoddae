import styled from "styled-components";

function ErrorPage({ error }: ErrorPageProp) {
  return (
    <ErrorContainer role="alert">
      <p>잠시 후 다시 시도해 주세요.</p>
      <ErrorMessage>{error.message}</ErrorMessage>
    </ErrorContainer>
  );
}

export default ErrorPage;

const ErrorContainer = styled.div`
  text-align: center;
  height: 440px;
  padding: 30px;
`;

const ErrorMessage = styled.p`
  color: red;
  white-space: pre-wrap;
`;

export interface ErrorPageProp {
  error: Error;
}
