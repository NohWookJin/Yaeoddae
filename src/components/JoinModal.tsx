import "./Modal.css"; // 이 파일에서 모달에 대한 CSS 스타일을 정의합니다.

const JoinModal = () => {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <h2>약관동의</h2>
        </div>
        <div className="modal-content">
          <form>
            <label>
              <input type="checkbox" /> 전체 동의
            </label>
            <div className="terms">
              {/* 각 약관에 대한 내용은 여기에 구현합니다. */}
              <label>
                <input type="checkbox" /> 만 14세 이상 이용, 서비스 이용약관, 개인정보 수집 및 이용
                동의 (필수)
              </label>
              {/* ...기타 약관 내용 */}
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button">동의하고 계속하기</button>
        </div>
      </div>
    </div>
  );
};

export default JoinModal;
