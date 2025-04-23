// 從gallery.js中獲取作品資料
const images = [
    { src: 'images/佛手瓜昆蟲壺(立把).jpg', title: '佛手瓜昆蟲壺(立把)', desc: '以佛手瓜為靈感來源，壺身採用立把設計，壺蓋上刻畫精細的昆蟲圖案。整體呈現出自然與藝術的完美結合。' },
    { src: 'images/佛手瓜蝸牛壺(平把).jpg', title: '佛手瓜蝸牛壺(平把)', desc: '平把設計更符合人體工學，壺蓋上刻畫蝸牛圖案，象徵著慢慢享受生活的態度。' },
    { src: 'images/佛頭壺.jpg', title: '佛頭壺', desc: '以佛頭為靈感來源，壺身採用圓潤設計，壺把採用傳統曲線造型，呈現出莊嚴而優雅的美感。' },
    { src: 'images/南瓜同樂壺.jpg', title: '南瓜同樂壺', desc: '以南瓜為靈感來源，壺身採用圓潤設計，壺蓋上刻畫南瓜藤蔓圖案，象徵著豐收和喜悅。' }
];

// 生成作品列表
function generateArtworkList() {
    const gallery = document.querySelector('.gallery');
    images.forEach(image => {
        const artworkElement = document.createElement('div');
        artworkElement.className = 'artwork';
        artworkElement.innerHTML = `
            <img src="${image.src}" alt="${image.title}">
            <div class="artwork-info">
                <h3>${image.title}</h3>
                <p class="description">${image.desc}</p>
                <button class="add-to-cart">加入購物車</button>
            </div>
        `;
        gallery.appendChild(artworkElement);
    });
}

// 初始化
window.addEventListener('DOMContentLoaded', () => {
    generateArtworkList();
});
