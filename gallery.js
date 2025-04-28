// 藝廊圖片資料，可以根據實際檔案增減
const images = [
    {
        src: 'images/自然連結.jpg',
        title: '自然連結',
        desc: '樹斷鐵絲連結仿生手工茶壺，樹枝與鐵絲相互糾纏，質樸中透露生命的堅韌。手工巧匠以獨特方式呈現自然之力與人力間的連結。',
        size: '19×10×19(cm)',
        year: '2023',
        material: '樹斷、鐵絲、陶土',
        price: 36800
    },
    {
        src: 'images/佛手瓜昆蟲壺(立把).jpg',
        title: '佛手瓜昆蟲壺(立把)',
        size: '',
        year: '2024',
        desc: '佛手瓜的獨特形狀和昆蟲的活躍姿態，似乎在表達生命的律動和自然的韻律。昆蟲的存在，提醒我們生命的多樣性和自然的美麗。這個茶壺的設計，希望能夠讓我們感受到生命的活力和自然的美好。',
        tag: [],
        price: 36800
    },
    {
        src: 'images/佛手瓜蝸牛壺(平把).jpg',
        title: '佛手瓜蝸牛壺(平把)',
        size: '',
        year: '2024',
        desc: '緩慢的美好，源自自然的美麗。佛手瓜的獨特形狀和蝸牛的悠閒步伐，邀請我們慢下來，享受生活的每一刻。蝸牛象徵家的感覺，其不僅僅是一個物理空間、一種狀態。讓我們在自然的美麗中品茶，找到家、安心、踏實的感覺。',
        tag: ['佛', '佛手瓜', '蝸牛'],
        price: 36800
    },
    {
        src: 'images/佛頭壺.jpg',
        title: '佛頭壺',
        size: '17*11*14 (cm)',
        year: '2023',
        desc: '「佛頭壺」，柴燒而成，仿佛佛陀的神聖化身。燒製過程中，作者以心雕琢，將佛的形象融入茶壺，每一處細節都閃耀著智慧之光。感受它的存在，如同與佛接觸，淨化心靈，賦予生活更深的意義。',
        tag: ['佛', '柴燒'],
        price: 36800
    },
    {
        src: 'images/南瓜同樂壺.jpg',
        title: '南瓜同樂壺',
        size: '',
        year: '2024',
        desc: '這隻南瓜同樂壺，宛如一顆成熟的南瓜，身上搭載著一群可愛的朋友。蝸牛、毛毛蟲和瓢蟲，三種不同的生物，共同在南瓜上創造了一個小小的生態系統。每個生物的細節，從觸角到翅膀，都被精心刻畫，展現了陶藝家的技巧和耐心。南瓜的紋理和顏色，也被巧妙地呈現，給人一種對自然的親切感。這隻壺，不僅是一件藝術品，也是一件充滿童趣和幽默的裝飾品。',
        tag: ['南瓜', '毛毛蟲', '瓢蟲', '蝸牛'],
        price: 36800
    },
    {
        src: 'images/南瓜聚寶壺.jpg', 
        title: '南瓜聚寶壺',
        size: '18*11*16(cm)',
        year: '2023',
        desc: '南瓜聚寶壺，器型獨特，如秋日南瓜擁有的神秘與豐富。其表面飾以精緻的昆蟲圖案，包含瓢蟲與毛毛蟲，象徵著幸運、祝福和成長。這個茶壺不僅是一件茶具，更是一個充滿生命力與希望的藝術品。與之相伴，茶香飄逸，生機盎然，為您的生活帶來更多美好與喜悅。',
        tag: ['南瓜', '守宮', '毛毛蟲', '瓢蟲'],
        price: 36800
    },
    {
        src: 'images/古井壺.jpg', 
        title: '古井壺',
        size: '17*10*9',
        year: '2023',
        desc: '古井壺以精湛的工藝打造而成，工法細膩，仿真度極高。每一個細節都經過精心雕琢，呈現出古井的獨特風貌。而壺蓋則採用木蓋設計，增添了自然的氣息，讓整體更加富有質感。這款茶壺不僅具有觀賞價值，更能讓人享受到泡茶的樂趣，是您品茗時的完美伴侶。',
        tag: ['井', '木', '木桶', '石', '釘', '鐵'],
        price: 36800
    },
    {
        src: 'images/守宮情緣.jpg', 
        title: '守宮情緣',
        size: '20*11*13(cm)',
        year: '2023',
        desc: '守宮情緣壺，以樹段為靈感，展現了自然之美。柴燒工藝賦予茶壺獨特的質感，每一個紋路都是大自然的痕跡。兩隻守宮對望造型象徵著守護之意，讓茶壺成為品茗時的靈魂之物，賦予茶水獨特的風味和氛圍。',
        tag: ['守宮', '柴燒', '樹段'],
        price: 36800
    },
    {
        src: 'images/密林樹瘤之瓢蟲壺.jpg', 
        title: '密林樹瘤之瓢蟲壺',
        size: '22*13*11(cm)',
        year: '2024',
        desc: '密林樹瘤之瓢蟲壺，其設計靈感來自於大自然。體現了樹瘤的特色，更具備了獨特紋路的側把。最引人注目的是，壺身上裝飾著十隻繽紛活潑的瓢蟲，它們在樹瘤般的茶壺上點綴著，猶如於森林中快樂的穿梭。每個細節都雕塑得精緻細膩，將大自然的神奇與寧靜感覺完美融合，令您每次啜飲茶湯，都能讓人仿佛置身於大自然之中，享受那份寧靜與祥和。',
        tag: ['側把', '樹瘤', '瓢蟲'],
        price: 36800
    },
    {
        src: 'images/方形橡木茶倉.jpg', 
        title: '方形橡木茶倉',
        size: '12*11*16(cm)',
        year: '2023',
        desc: '以往印象中的橡木桶通常呈圓形，但這款茶倉卻顛覆了傳統，採用方形設計，展現出獨特的創意與品味。橡木的質感與方形結構相結合，營造出獨特的視覺效果，彷彿是世界中的一個不可思議的變化。方形橡木茶倉不僅能有效地儲存茶葉，更是一件精美的藝術品，帶來獨特的品茶體驗。',
        tag: ['木', '螺母', '螺絲', '鐵'],
        price: 36800
    },
    {
        src: 'images/竹幽壺.jpg',
        title: '竹幽壺',
        size: '19*10*13 (cm)',
        year: '2023',
        desc: '「竹幽壺」，以竹根為靈感，裝飾精緻昆蟲圖案，包含蝸牛和瓢蟲。彷彿蝸居其中，瓢蟲覓食於茶香間。此壺不僅是茶具，更是一方竹林中的寧靜世界。作者希望您能用心沉浸其中，感受大自然的靜謐與生機，與茶香共鳴，為生活注入一份清新與活力。',
        tag: ['瓢蟲', '竹', '蝸牛'],
        price: 36800
    },
    {
        src: 'images/方竹映宇壺.jpg',
        title: '方竹映宇壺',
        size: '14*9*14(cm)',
        year: '2023',
        desc: '方竹映宇茶壺，以大自然中的竹子為靈感，突破傳統的圓形造型，創作出方形的設計。這款茶壺將大自然的奧秘融入其中，探索宇宙的無限可能。方形的竹子造型，彷彿是大自然的一道奇蹟，帶給人們對宇宙奧秘的無限遐想。每一次品茗，都像是一場穿越時空的冒險，讓您的茶道體驗更加充滿了神秘與奇幻。',
        tag: ['方', '竹'],
        price: 36800
    },
    {
        src: 'images/松竹梅意境壺.jpg', 
        title: '松竹梅意境壺',
        size: '15*8*10(cm)',
        year: '2023',
        desc: '「松竹梅意境壺」以中國傳統松、竹、梅為靈感，壺身曲線優雅，壺蓋雕有松竹梅圖案，象徵堅韌、正直與高潔。此壺融合三友精神，展現東方美學與品茗意境。',
        tag: ['松', '竹', '梅', '三友', '東方美學'],
        price: 36800
    },
    {
        src: 'images/松鼠尋果奇遇壺.jpg', 
        title: '松鼠尋果奇遇壺',
        size: '17*9*12(cm)',
        year: '2023',
        desc: '「松鼠尋果奇遇壺」以松鼠尋找果實的趣味場景為主題，壺身圓潤飽滿，壺蓋上雕有靈動松鼠，象徵探索與活力。細膩的果實與松鼠細節，展現自然界的豐饒與生動，是兼具童趣與藝術感的收藏茶壺。',
        tag: ['松鼠', '果實', '童趣'],
        price: 36800
    },
    {
        src: 'images/桶香螺音茶倉.jpg', 
        title: '桶香螺音茶倉',
        desc: '採用桶型設計，外觀採用螺紋處理，內部採用陶土製成，適合存放茶葉，散發出自然的質感。',
        price: 36800
    },
    {
        src: 'images/梅堅心境壺.jpg', 
        title: '梅堅心境壺',
        size: '15*8*10(cm)',
        year: '2023',
        desc: '「梅堅心境壺」以梅花堅韌不拔為主題，壺身圓潤，壺蓋雕有梅花，象徵逆境中堅持與優雅。細膩紋理展現梅花的生命力，適合品茗時細細體會堅毅與美感的交融。',
        tag: ['梅花', '堅韌', '優雅'],
        price: 36800
    },
    {
        src: 'images/梅花壺.jpg', 
        title: '梅花壺',
        size: '14*8*10(cm)',
        year: '2023',
        desc: '「梅花壺」以梅花為靈感，壺身圓潤，壺蓋雕有梅花盛開，象徵堅韌與高潔。細膩的梅花紋理，展現冬日生命的美麗與希望，適合品茗時細細品味自然與人生的韻味。',
        tag: ['梅花', '高潔', '冬日'],
        price: 36800
    },
    {
        src: 'images/森林探險壺.jpg', 
        title: '森林探險壺',
        size: '17*9*12(cm)',
        year: '2023',
        desc: '「森林探險壺」以森林探險為主題，壺身不規則造型，表面樹皮紋理細膩，展現林間野趣。壺蓋設計呼應自然生態，彷彿置身森林探險之旅，適合喜愛自然與冒險的藏家。',
        tag: ['森林', '探險', '樹皮', '自然'],
        price: 36800
    },
    {
        src: 'images/樹段奇趣壺(已訂非賣品).jpg', 
        title: '樹段奇趣壺(已訂非賣品)',
        size: '16*9*11(cm)',
        year: '2023',
        desc: '「樹段奇趣壺」以樹段為靈感，壺身不規則設計，表面細膩展現樹皮質感。壺蓋與壺把呼應自然造型，整體充滿童趣與自然奇趣，是一件極具特色的藝術茶壺。此壺已訂，僅供欣賞。',
        tag: ['樹段', '樹皮', '童趣', '自然'],
        price: 36800
    },
    {
        src: 'images/橡木桶茶杯.jpg', 
        title: '橡木桶茶杯',
        size: '8*8*7(cm)',
        year: '2023',
        desc: '「橡木桶茶杯」以橡木桶為造型靈感，外觀細緻展現橡木紋理，內部以陶土製成，兼具質感與實用性。適合品茶時使用，讓每一口茶都充滿自然木香與溫潤手感。',
        tag: ['橡木', '茶杯', '木紋', '實用'],
        price: 36800
    },
    {
        src: 'images/橡木桶鐵器壺.jpg', 
        title: '橡木桶鐵器壺',
        size: '18*10*13(cm)',
        year: '2023',
        desc: '「橡木桶鐵器壺」結合橡木桶的溫潤與鐵器的剛毅，壺身圓潤飽滿，壺把以鐵器造型呈現，展現堅固與自然的融合。細膩紋理與金屬質感相映成趣，是一件兼具美感與實用性的藝術茶壺。',
        tag: ['橡木桶', '鐵器', '融合', '質感'],
        price: 36800
    },
    {
        src: 'images/沁煙壺.jpg', 
        title: '沁煙壺',
        size: '18*9*12(cm)',
        year: '2023',
        desc: '「沁煙壺」以煙霧繚繞為靈感，壺身線條流暢，表面施以特殊工法，展現煙霧飄渺的意境。壺蓋與壺把設計呼應煙的流動感，整體造型優雅，適合品茗時靜心賞玩。',
        tag: ['煙', '曲線'],
        price: 36800
    },    
    {
        src: 'images/竹根青蛙壺.jpg', 
        title: '竹根青蛙壺',
        size: '17*10*12(cm)',
        year: '2023',
        desc: '「竹根青蛙壺」以竹根與青蛙為主題，壺身不規則造型展現竹根的自然曲線，壺蓋上雕有青蛙棲息，象徵生態共生與自然活力。整體設計充滿野趣與生命力，是一件極具收藏價值的藝術茶壺。',
        tag: ['竹根', '青蛙', '生態'],
        price: 36800
    },
    {
        src: 'images/竹節知了壺.jpg', 
        title: '竹節知了壺',
        size: '16*8*11(cm)',
        year: '2023',
        desc: '「竹節知了壺」融合竹節的節理與知了的意象，壺身圓潤，竹節紋理細緻，壺蓋雕有知了停棲，象徵夏日生機與自然律動。整體設計雅緻，適合品茗時細細品味自然之美。',
        tag: ['竹節', '知了', '夏日'],
        price: 36800
    },
    {
        src: 'images/紅蓮青蛙白陶壺.jpg', 
        title: '紅蓮青蛙白陶壺',
        size: '15*9*11(cm)',
        year: '2023',
        desc: '「紅蓮青蛙白陶壺」以白陶為基底，壺身圓潤，飾以紅蓮花紋，壺蓋上雕有青蛙棲息，象徵純潔與生機。整體設計色彩對比鮮明，展現自然與生命的融合，是兼具觀賞與實用價值的藝術茶壺。',
        tag: ['紅蓮', '青蛙', '白陶'],
        price: 36800
    },
    {
        src: 'images/絲瓜仙境壺.jpg', 
        title: '絲瓜仙境壺',
        size: '16*8*10(cm)',
        year: '2023',
        desc: '「絲瓜仙境壺」以絲瓜和仙境為主題，壺身圓潤，細節處理展現絲瓜的自然紋理，壺蓋上雕有仙境意象。整體設計充滿童趣與想像力，適合品茗時細細欣賞自然與夢想的結合。',
        tag: ['絲瓜', '仙境', '童趣'],
        price: 36800
    },
    {
        src: 'images/蓮蓬青蛙之旅壺.jpg', 
        title: '蓮蓬青蛙之旅壺',
        size: '17*8*11(cm)',
        year: '2023',
        desc: '「蓮蓬青蛙之旅壺」以蓮蓬與青蛙的自然生態為靈感，壺身圓潤，蓮蓬細節精緻，壺蓋上雕有青蛙，象徵生命力與冒險精神。適合收藏與品茗，讓人感受自然的趣味與活力。',
        tag: ['蓮蓬', '青蛙', '生態'],
        price: 36800
    },
    {
        src: 'images/蓮蓬青蛙壺.jpg', 
        title: '蓮蓬青蛙壺',
        size: '16*8*10(cm)',
        year: '2023',
        desc: '「蓮蓬青蛙壺」以蓮蓬與青蛙為主題，壺身圓潤飽滿，蓮蓬紋理細膩，壺蓋雕有青蛙棲息，象徵自然的和諧與生機。整體設計雅緻，適合愛好自然與藝術的藏家。',
        tag: ['蓮蓬', '青蛙', '自然'],
        price: 36800
    },
    {
        src: 'images/虛木幻鐵壺.jpg', 
        title: '虛木幻鐵壺',
        size: '17*9*12(cm)',
        year: '2023',
        desc: '「虛木幻鐵壺」融合虛木的空靈感與鐵器的堅實感，壺身圓潤，壺把以鐵器造型呈現，展現剛柔並濟的美學。適合喜愛獨特造型與現代藝術的藏家。',
        tag: ['虛木', '鐵器', '現代', '剛柔並濟'],
        price: 36800
    },
    {
        src: 'images/金把酒桶風格壺.jpg', 
        title: '金把酒桶風格壺',
        size: '18*10*13(cm)',
        year: '2023',
        desc: '「金把酒桶風格壺」以酒桶為造型，壺身圓潤飽滿，壺把以金器設計，展現奢華與質感的結合。適合品茗時感受尊貴氛圍，是收藏與實用兼具的藝術茶壺。',
        tag: ['酒桶', '金器', '奢華', '質感'],
        price: 36800
    },
    {
        src: 'images/鐵把橡桶壺.jpg', 
        title: '鐵把橡桶壺',
        size: '17*9*12(cm)',
        year: '2023',
        desc: '「鐵把橡桶壺」結合橡木桶的自然紋理與鐵器的堅固造型，壺身圓潤，壺把以鐵器設計，展現剛毅與溫潤的對比美。適合追求個性與自然質感的藏家。',
        tag: ['橡木桶', '鐵器', '對比', '自然'],
        price: 36800
    },
    {
        src: 'images/靈角壺.jpg', 
        title: '靈角壺',
        size: '16*8*11(cm)',
        year: '2023',
        desc: '「靈角壺」以神秘的靈角為主題，壺身圓潤，壺蓋雕有靈角圖案，象徵守護與神秘力量。設計獨特，適合喜愛神話與奇幻風格的藏家。',
        tag: ['靈角', '神秘', '守護', '奇幻'],
        price: 36800
    }
];

const gallery = document.getElementById('gallery');
gallery.innerHTML = '';
images.forEach((img, idx) => {
    const div = document.createElement('div');
    div.className = 'artwork';
    div.innerHTML = `
        <div class="artwork-imgbox">
          <img src="${img.src}" alt="${img.title}">
          <button class="learn-more-btn">了解更多</button>
        </div>
        <div class="artwork-info">
          <div class="artwork-label">${img.year || ''}</div>
          <div class="artwork-title">${img.title}</div>
          <div class="artwork-desc">${img.title === '自然連結' ? '樹斷鐵絲連結仿生手工茶壺，樹枝與鐵絲相互糾纏，質樸中透露生命的堅韌。手工巧匠以獨特方式呈現自然之力與人力間的連結。' : (img.desc || '')}</div>
        </div>

      `;
        // 每個藝術品都加彈窗功能
    const learnMoreBtn = div.querySelector('.learn-more-btn');
    learnMoreBtn.addEventListener('click', () => {
        // 建立彈窗元素
        const modal = document.createElement('div');
        modal.className = 'art-modal-overlay';
        modal.innerHTML = `
            <div class="art-modal">
                <button class="close-modal">×</button>
                <h2>${img.title}</h2>
                ${img.title !== '自然連結' ? `
                <div class="modal-year">創作年份：${img.year || ''}</div>
                <div class="modal-material">材質：${img.material || ''}</div>
                <div class="modal-size">尺寸：${img.size || ''}</div>
                <div class="modal-price">參考價：NT$ ${img.price ? img.price.toLocaleString() : '請洽詢'}</div>
                ` : ''}
                <div class="modal-imgs">
                    ${img.title !== '自然連結' ? `<img src="${img.src}" alt="${img.title}" class="modal-img" style="max-width:100%; margin:1rem 0; border-radius:8px;">` : ''}
                </div>
                <div class="modal-desc">
                  ${img.title === '自然連結' ? `
                    <strong>尺寸：</strong>19×10×19(cm)<br>
                    <strong>年份：</strong>2023<br>
                    <strong>參考價：</strong>NT$ 36,800<br>
                  ` : (img.desc || '')}
                </div>
                <button class="add-to-cart-modal">精選收藏</button>
            </div>
        `;
        document.body.appendChild(modal);
        // 關閉彈窗
        modal.querySelector('.close-modal').onclick = () => modal.remove();
        modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
        // 加入購物車
        modal.querySelector('.add-to-cart-modal').onclick = () => {
            if (window.cart && typeof cart.addItem === 'function') {
                const product = window.images.find(item => item.src === img.src);
                if (product) {
                    if (cart.addItem(product.src)) {
                        const tip = document.createElement('div');
                        tip.textContent = '已加入精選收藏！';
                        tip.style.cssText = 'position:fixed;top:20px;left:50%;transform:translateX(-50%);background:#232323;color:#fff;padding:8px 22px;border-radius:18px;z-index:99999;font-size:1.1rem;';
                        document.body.appendChild(tip);
                        setTimeout(()=>{ tip.remove(); }, 1200);
                    } else {
                        const tip = document.createElement('div');
                        tip.textContent = '已在購物車中！';
                        tip.style.cssText = 'position:fixed;top:20px;left:50%;transform:translateX(-50%);background:#bfa76f;color:#232323;padding:8px 22px;border-radius:18px;z-index:99999;font-size:1.1rem;';
                        document.body.appendChild(tip);
                        setTimeout(()=>{ tip.remove(); }, 1200);
                    }
                } else {
                    alert('找不到商品資料，請稍後再試！');
                }
            } else {
                alert('購物車功能尚未準備好，請稍後再試！');
            }
            modal.remove();
        };
    });  

    gallery.appendChild(div);
});
// 讓 cart.js 能正確取得商品資料
window.images = images;
// 彈窗樣式
const style = document.createElement('style');
style.innerHTML = `
.art-modal-overlay {
  position: fixed; left: 0; top: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.55); z-index: 9999; display: flex; align-items: center; justify-content: center;
}
.art-modal {
  background: #fff; border-radius: 12px; padding: 2rem 2.5rem; max-width: 350px; width: 92vw; box-shadow: 0 6px 32px rgba(0,0,0,0.18);
  text-align: center; position: relative;
}
.art-modal .close-modal {
  position: absolute; right: 1rem; top: 1rem; background: none; border: none; font-size: 2rem; cursor: pointer; color: #888;
}
.art-modal .modal-img { width: 90%; max-width: 220px; border-radius: 8px; margin-bottom: 1rem; }
.art-modal h2 { font-size: 1.25rem; color: #232323; margin-bottom: 0.5rem; }
.art-modal p { color: #444; font-size: 1rem; margin-bottom: 1.2rem; }
.art-modal .add-to-cart-modal {
  background: #bfa76f; color: #232323; border: none; border-radius: 24px; padding: 0.6rem 1.5rem; font-weight: bold; font-size: 1rem; cursor: pointer; transition: background 0.18s, color 0.18s;
}
.art-modal .add-to-cart-modal:hover { background: #232323; color: #fff; }
`;
document.head.appendChild(style);
