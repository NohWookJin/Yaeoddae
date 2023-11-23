import React, { useState } from "react";
import styled from "styled-components";

// 스타일 컴포넌트
const PageContainer = styled.div`
  padding: 16px;
  background: #fff;
  min-height: 100vh;
  box-sizing: border-box;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: bold;
`;

const BackButton = styled.button`
  margin-right: 8px;
  background: none;
  border: none;
  cursor: pointer;
`;

const SectionTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
`;

const Section = styled.section`
  margin-bottom: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const Label = styled.label`
  flex: 1;
  margin-right: 8px;
`;

const Input = styled.input`
  flex: 2;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const InfoText = styled.p`
  font-size: 12px;
  color: #666;
`;

// 리액트 컴포넌트
const MyPage: React.FC = () => {
  const [nickname, setNickname] = useState("");

  // 이벤트 핸들러
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  // 뒤로 가기 버튼 핸들러 - 실제 기능 구현 필요
  const handleBackClick = () => {
    console.log("뒤로 가기");
  };

  // 닉네임 수정 버튼 핸들러 - 실제 기능 구현 필요
  const handleNicknameSubmit = () => {
    console.log("닉네임 수정", nickname);
  };

  return (
    <PageContainer>
      <Header>
        <BackButton onClick={handleBackClick}>＜</BackButton>내 정보 관리
      </Header>
      <Section>
        <SectionTitle>내 정보 수정</SectionTitle>
        <InputGroup>
          <Label htmlFor="nickname">닉네임</Label>
          <Input
            id="nickname"
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            placeholder="유저닉네임"
          />
          <Button onClick={handleNicknameSubmit}>수정</Button>
        </InputGroup>
        <InputGroup>
          <Label>연락처 이름</Label>
          <Input type="text" value="김소정" readOnly />
        </InputGroup>
        <InputGroup>
          <Label>휴대폰 번호</Label>
          <Input type="text" value="010-1234-1234" readOnly />
        </InputGroup>
        <InfoText>
          개인 정보 보호를 위해 내 정보는 모두 암호화되어 있습니다.
          <br />
          개인 정보 보호는 YAO에서 엄격하게 관리됩니다.
        </InfoText>
      </Section>
      <Section>
        <SectionTitle>예약 내역 확인</SectionTitle>
        {/* 예약 내역 확인 섹션 내용 */}
      </Section>
      {/* 추가적인 섹션 및 기능 구현 */}
      <Button>회원탈퇴</Button>
    </PageContainer>
  );
};

export default MyPage;
