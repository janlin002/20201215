# 20201215
<h3>1.Explain the difference between cookies, session storage, and local storage?<h3>

![img](https://img.onl/TcO0dZ)
<h3>2. What does CORS stand for and what issue does it address?</h3>
 
<p>
 中文叫:跨來源資源共用<br>
是一種使用額外 HTTP標頭令目前瀏覽網站的使用者代理取得存取其他來源（網域）伺服器特定資源權限的機制。當使用者代理請求一個不是目前來源——例如來自於不同網域、通訊協定或通訊埠的資源時，會建立一個跨來源 HTTP 請求。<br>
跨來源資源共用機制提供了網頁伺服器跨網域的存取控制，增加跨網域資料傳輸的安全性。現代瀏覽器支援在 API 容器（如 XMLHttpRequest）中使用 CORS 以降低跨來源 HTTP 請求的風險。
</p>
 
<h3>3. What is HTTP method OPTIONS?</h3>
<p>OPTIONS請求旨在發送一種“探測”請求以確定針對某個目標地址的請求必須具有怎樣的約束（比如應該採用怎樣的HTTP方法以及自定義的請求報頭），<br>
 然後根據其約束發送真正的請求。比如針對“跨域資源”的預檢（Preflight）請求採用的HTTP方法就是OPTIONS。

簡而言之，OPTIONS請求方法的主要用途有兩個：<br>
1、獲取服務器支持的HTTP請求方法；<br>
2、用來檢查服務器的性能。<br>
</p>

<h3>4. Describe BFC (Block Formatting Context) and how it works.</h3>
<p>具有 BFC（格式化上下文） 特性的元素可以看作是隔離的容器，容器里面的元素不會在布局上影響到外面的元素<br>
會觸發的條件：<br>
  <ul>
    <li>body 根元素</li>
    <li>浮動元素：float 除 none 以外的值</li>
    <li>絕對定位元素：position (absolute、fixed)</li>
    <li>display 為 inline-block、table-cells、flex</li>
    <li>overflow 除了 visible 以外的值 (hidden、auto、scroll)</li>
   </ul>
</p>

[連結](https://codepen.io/ytiimefp/pen/dypvRNg)

<h3>5. Explain the difference between layout, painting and compositing.</h3>
<p>Layout:計算每個元素(Element)在頁面的位置,大小。而且也會運算元素間的相互效應,和樣式之間的繼承<br>

painting:對螢幕像素填上顏色的步驟。他把文字寫出來，把圖片畫出來，顏色、邊框和陰影呈現在 DOM 元素上。<br>
Chrome DevTools > More tools > Rendering > 勾選 Paint flashing，開啟後檢視畫面，發生繪製時該區塊會閃綠光。<br>

compositing:當畫面上的元素被畫好了，放在不同的圖層。 而且圖層正在等待被放置到網頁的正確位置，準備好被正確地渲染。<br>
</p>

<h3>6. Can you explain the difference between px, em and rem as they relate to font sizing?</h3>
<p>
  <ol>
    <li>px：絕對單位，只要設定多少 px，就會精確的呈現</li>
    <li>em：相對單位，每個子元素透過「倍數」乘以父元素(上一層)的 px 值。</li>
    <li>rem：相對單位，每個元素透過「倍數」乘以根元素的 px 值。(根元素指的是 html 的 font-size，預設為16px )</li>
</ol>
</p>

[連結](https://codepen.io/ytiimefp/pen/xxEqrvM)
<h3>7. What tools would you use to find a performance bug in your code?</h3>
<ol>
  <li>Chrome DevTools(Lighthouse)</li>
  <li>VsCode 中斷點</li>
 </ol>
