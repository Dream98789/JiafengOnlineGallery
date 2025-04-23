# EmailJS 整合流程紀錄

## 需要填入的資訊
- Service ID: 請填入你的 EmailJS Service ID
- Template ID: 請填入你的 EmailJS Template ID
- Public Key: 請填入你的 EmailJS Public Key

---

## 步驟 1：在 index.html 引入 EmailJS SDK

在 <head> 區塊加入：

```html
<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
```

---

## 步驟 2：初始化 EmailJS

在 cart.js 最前面加：

```javascript
emailjs.init('你的Public Key');
```

---

## 步驟 3：送出表單時呼叫 emailjs.send

在訂單送出事件裡加入：

```javascript
const formData = new FormData(e.target);
const orderInfo = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    address: formData.get('address'),
    cart: (JSON.parse(localStorage.getItem('cart')) || [])
        .map(item => `${item.title} x${item.quantity}`)
        .join(', ')
};

emailjs.send('你的Service ID', '你的Template ID', orderInfo)
    .then(function(response) {
        console.log('Email sent!', response.status, response.text);
        // 成功訊息
    }, function(error) {
        console.error('Email failed:', error);
        // 失敗訊息
    });
```

---

## 測試
- 送出訂單後，確認信件是否收到。
- 若失敗，檢查 service/template/public key 是否正確。

---

如需協助請提供三組 ID（可打碼）。
