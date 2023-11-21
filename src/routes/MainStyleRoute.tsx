import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainStyleRouteLayout = styled.div``;

export default function MainStyleRoute() {
  return (
    <MainStyleRouteLayout>
      <Outlet />
    </MainStyleRouteLayout>
  );
}
