import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import homeIcon from "../assets/icons/home.svg?react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const [loadingMessage, setLoadingMessage] = useState<JSX.Element>(
    <span>로딩 중입니다. 잠시만 기다려 주세요.</span>
  );
  const navigate = useNavigate();
  function navigateToHome() {
    navigate("/");
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoadingMessage(
        <>
          <span>잠시 후 다시 시도해 주세요.</span>
          <button onClick={navigateToHome}>
            <HomeIcon /> 홈으로 가기
          </button>
        </>
      );
    }, 10000);

    return () => {
      document.body.style.overflow = "auto";

      clearTimeout(timer);
    };
  }, []);

  return (
    <LoadingBackground>
      <div>
        <Spinner />
        {loadingMessage}
      </div>
    </LoadingBackground>
  );
}

export default Loading;

const flexBox = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

const LoadingBackground = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1000;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  ${flexBox}

  div {
    ${flexBox}
    position: relative;
  }

  span {
    color: ${(props) => props.theme.Color.componentColor};
  }

  button {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.Color.componentColor};
    padding: 6px 24px 6px 48px;
    border-radius: ${(props) => props.theme.Br.default};
    border: ${(props) => props.theme.Border.thinBorder};

    HomeIcon {
      fill: ${(props) => props.theme.Color.mainColor};
    }

    &:hover {
      background-color: ${(props) => props.theme.Color.mainColor};
      color: ${(props) => props.theme.Color.componentColor};
      border-color: ${(props) => props.theme.Color.mainColor};

      HomeIcon {
        fill: white;
      }
    }
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: ${(props) => `4px solid ${props.theme.Color.mainColor}`};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const HomeIcon = styled(homeIcon)`
  position: absolute;
  left: calc(50% - 46px);
  bottom: -0.5px;
  transform: translate(-50%, -50%);
`;
