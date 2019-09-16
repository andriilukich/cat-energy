function slider() {
  document.querySelector('.sample__slides').addEventListener('mousemove', (event) => {
    let x = event.offsetX;
    document.querySelector('.sample__slide--after').style.width = x + 'px';
  });
}

slider();
