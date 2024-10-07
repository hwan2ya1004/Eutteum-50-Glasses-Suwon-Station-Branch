document.addEventListener("DOMContentLoaded", function() {
    // 매달 제공되는 행사 정보
    const events = [
        {
            title: "10월 할인 이벤트",
            description: "10월 한 달간 모든 안경 프레임 20% 할인!",
        },
        {
            title: "렌즈 프로모션",
            description: "특정 렌즈 구매 시 두 번째 렌즈 무료!",
        }
    ];

    const eventList = document.getElementById('event-list');

    // 행사 목록 생성
    events.forEach(event => {
        const eventDiv = document.createElement('div');
        eventDiv.classList.add('event-item');

        eventDiv.innerHTML = `
            <h3>${event.title}</h3>
            <p>${event.description}</p>
        `;

        eventList.appendChild(eventDiv);
    });
});
