document.addEventListener("DOMContentLoaded", function() {
    const loginResult = document.getElementById('login-result');

    // 카카오 로그인 버튼 클릭 이벤트
    document.getElementById('kakao-login-btn').addEventListener('click', function() {
        Kakao.Auth.login({
            success: function(authObj) {
                // 로그인 성공 시 사용자 정보 가져오기
                Kakao.API.request({
                    url: '/v2/user/me',
                    success: function(res) {
                        const nickname = res.kakao_account.profile.nickname;
                        loginResult.textContent = `${nickname}님, 카카오 로그인에 성공했습니다!`;
                    },
                    fail: function(error) {
                        loginResult.textContent = "사용자 정보 요청에 실패했습니다.";
                        console.error(error);
                    }
                });
            },
            fail: function(err) {
                loginResult.textContent = "카카오 로그인에 실패했습니다.";
                console.error(err);
            }
        });
    });
});
