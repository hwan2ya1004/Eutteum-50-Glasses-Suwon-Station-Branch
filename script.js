document.addEventListener("DOMContentLoaded", function() {
    // 상품 리스트
    const products = [
        { name: "프레임 A", price: "100,000원", image: "frameA.jpg" },
        { name: "프레임 B", price: "150,000원", image: "frameB.jpg" },
        { name: "프레임 C", price: "200,000원", image: "frameC.jpg" }
    ];

    const productList = document.getElementById('product-list');

    // 상품 목록 생성
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="150">
            <h3>${product.name}</h3>
            <p>가격: ${product.price}</p>
        `;

        productList.appendChild(productDiv);
    });

    // 예약 처리
    const reservationForm = document.getElementById('reservation-form');
    const reservationResult = document.getElementById('reservation-result');

    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;

        if (name && date) {
            reservationResult.textContent = `${name}님, ${date}로 예약이 완료되었습니다!`;
            reservationForm.reset();
        } else {
            reservationResult.textContent = "예약 정보를 입력해 주세요.";
        }
    });
});
