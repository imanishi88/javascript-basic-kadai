const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const text = (document.getElementById("text").innerText);
    document.getElementById("text").innerText = "ボタンをクリックしました"

});
