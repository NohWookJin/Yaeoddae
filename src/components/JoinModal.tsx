import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const JoinModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  const [isChecked, setIsChecked] = useState({
    all: false,
    terms: false,
    personalInfo: false,
    marketing: false,
    location: false,
  });

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // 모달이 닫혀 있으면 아무것도 렌더링하지 않음
  if (!isOpen) {
    return null;
  }

  // 체크박스 상태 변경을 처리하는 함수
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (name === "all") {
      setIsChecked({
        all: checked,
        terms: checked,
        personalInfo: checked,
        marketing: checked,
        location: checked,
      });
    } else {
      setIsChecked((prev) => ({
        ...prev,
        [name]: checked,
        all: prev.terms && prev.personalInfo && prev.marketing && prev.location && checked,
      }));
    }
  };

  return (
    <ModalBackground>
      <ModalContainer ref={modalRef}>
        <h2>약관동의</h2>
        <div className="modal-content">
          <form>
            <label>
              <input
                type="checkbox"
                name="all"
                checked={isChecked.all}
                onChange={handleCheckboxChange}
              />{" "}
              전체 동의
            </label>
            <Terms>
              <label>
                <input
                  type="checkbox"
                  name="terms"
                  checked={isChecked.terms}
                  onChange={handleCheckboxChange}
                />{" "}
                만 14세 이상 이용, 서비스 이용약관, 개인정보 수집 및 이용 동의 (필수)
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="personalInfo"
                  checked={isChecked.personalInfo}
                  onChange={handleCheckboxChange}
                />{" "}
                개인정보 수집 및 이용 동의 (선택)
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="marketing"
                  checked={isChecked.marketing}
                  onChange={handleCheckboxChange}
                />{" "}
                숙소 특가, 쿠폰 등 마케팅 수신 동의 (선택)
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="location"
                  checked={isChecked.location}
                  onChange={handleCheckboxChange}
                />{" "}
                위치 정보 이용 약관 동의 (선택)
              </label>
            </Terms>
          </form>
        </div>
        <ModalFooter>
          <button type="button">동의하고 계속하기</button>
        </ModalFooter>
      </ModalContainer>
    </ModalBackground>
  );
};

export default JoinModal;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 355px;
  font-size: ${(props) => props.theme.Fs.default};
  text-align: left;

  h2 {
    font-size: ${(props) => props.theme.Fs.modalTitle};
    text-align: center;
  }
`;

const Terms = styled.div`
  margin-top: 10px;
`;

const ModalFooter = styled.div`
  margin-top: 20px;
  text-align: right;

  button {
    background-color: ${(props) => props.theme.Color.mainColor};
  }
  button:hover {
    ${(props) => props.theme.Color.hoverColor};
  }
`;
