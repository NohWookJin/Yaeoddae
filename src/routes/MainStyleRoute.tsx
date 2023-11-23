import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function MainStyleRoute() {
  return (
    <MainStyleRouteLayoutWrapper>
      <MainStyleRouteLayout>
        <Outlet />
      </MainStyleRouteLayout>
    </MainStyleRouteLayoutWrapper>
  );
}

const MainStyleRouteLayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const MainStyleRouteLayout = styled.div`
  width: 375px;

  border-left: ${({ theme }) => theme.Border.thickBorder};
  border-right: ${({ theme }) => theme.Border.thickBorder};

  box-shadow: ${({ theme }) => theme.Bs.default};
`;
