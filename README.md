## 画像の存在有無確認用
Kサイト用にカスタマイズした画像の存在有無確認用の雛形になります.<br>
下記のコードにて画像の存在有無を確認しています.<br>
主に画像が無い場合に404ページにリダイレクトする場合の対処方法として作っています.<br>
<br>
```javascript
const { loadImage } = require("@napi-rs/canvas");

function checkImages(name,imageUrls)
{
  imageUrls.forEach(async (imgUrl) => {
    try {
      // canvasを使って画像が存在するか確認
      await loadImage(imgUrl); // 画像をロードして存在確認
      console.log(`name: ${name}, url: ${imgUrl}, exists: true`);
    } catch (error) {
      console.log(`name: ${name}, url: ${imgUrl} exists: false `);
    }
  });
}
```

