let captchaCode = '';

function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    captchaCode = '';
    for (let i = 0; i < 6; i++) {
        captchaCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('captchaDisplay').innerText = captchaCode;
}

function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const captchaInput = document.getElementById('captchaInput').value;

    const correctUsername = 'admin';
    const correctPassword = '1234';

    // 檢查使用者輸入
    if (username === correctUsername && password === correctPassword && captchaInput === captchaCode) {
        alert("登入成功！歡迎" + username + "。");
        window.location.href = 'success.html'; // 登入成功後跳轉到 success.html
        /*return true;*/
    } else {
        alert("登入失敗，帳號或密碼或驗證碼錯誤。");
        generateCaptcha();
        
    }
    return false; // 阻止表單提交

    
}

// 切換密碼顯示/隱藏
function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.getElementById('toggleIcon');
    if (passwordField.type === 'password') {
        passwordField.type = 'text'; // 顯示密碼
        toggleIcon.src = 'https://img.icons8.com/ios-filled/50/000000/invisible.png'; // 替換為不可見圖示
    } else {
        passwordField.type = 'password'; // 隱藏密碼
        toggleIcon.src = 'https://img.icons8.com/ios-filled/50/000000/visible.png'; // 替換為可見圖示
    }
}

// 當頁面加載時生成驗證碼
window.onload = generateCaptcha;