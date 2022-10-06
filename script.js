const items = document.querySelectorAll('.item')
gsap.defaults({ duration: 0.3 })

items.forEach(function (item, index) {
  const tl = gsap
    .timeline({ paused: true })
    .to(item.querySelector('.text'), {
      color: 'white',
      x: 15,
      // scale: 1.2,
      transformOrigin: 'left center',
    })
    .to(item.querySelector('.dot'), { backgroundColor: '#F93', scale: 1.6 }, 0)

  item.addEventListener('mouseenter', () => tl.play())
  item.addEventListener('mouseleave', () => tl.reverse())
})
