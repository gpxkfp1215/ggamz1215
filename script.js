document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('intro-screen');
    const mainIcon = document.getElementById('main-icon');

    mainIcon.addEventListener('click', () => {
        // 아이콘 클릭 시 intro-screen에 fade-out 클래스 추가
        introScreen.classList.add('fade-out');

        // 애니메이션이 끝난 후 화면을 숨깁니다.
        introScreen.addEventListener('animationend', () => {
            introScreen.style.display = 'none';
        });
    });
});
