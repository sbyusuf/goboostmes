(async function(){
  const container = document.getElementById("purDiv");
  if(!container) return;
  const src = container.getAttribute("data-src");
  if(!src) return;

  try {
    const proxy = "https://elegant-liger-5af2bf.netlify.app/.netlify/functions/index?url=" + encodeURIComponent(src);
    const res = await fetch(proxy);
    const html = await res.text();
    container.innerHTML = html;
  } catch(e){
    container.innerHTML = "<p style='color:red'>Failed to load content</p>";
    console.error(e);
  }
})();
