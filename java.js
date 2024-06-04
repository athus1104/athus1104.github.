
function scrollToFlowers() {
  var flowersPosition = document.getElementById('flowers').offsetTop;
  window.scrollTo({
      top: flowersPosition,
      behavior: 'smooth'
  });
}

onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };