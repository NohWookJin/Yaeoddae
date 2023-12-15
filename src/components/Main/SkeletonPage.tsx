import styled from "styled-components";

function SkeletonPage() {
  return (
    <ListContainer>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </ListContainer>
  );
}

export default SkeletonPage;

export const ListContainer = styled.div`
  min-width: 375px;
  min-height: 400px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
`;

const Skeleton = styled.div`
  width: 150px;
  height: 140px;
  border-radius: ${({ theme }) => theme.Br.default};
  background-image: linear-gradient(
    100deg,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.1)
  );
  margin-bottom: 60px;
  background-size: 400% 100%;
  color: rgba(0, 0, 0, 0);

  animation: skeleton-loading 7s linear infinite;
  @keyframes skeleton-loading {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
