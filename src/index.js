function render (datas) {
  const ul = document.querySelector('.cards')

  const li = document.createElement('li');
  ul.append(li)
  li.classList.add('card')

  const h2 = document.createElement('h2')
  li.append(h2)
  h2.innerText = datas.name

  const img = document.createElement('img')
  img.setAttribute('src', datas.sprites.other['official-artwork'].front_default)
  img.addEventListener('mousemove', () => {
    return img.setAttribute('src', datas.sprites.other['dream_world']['front_default'])
  })
  img.addEventListener('mouseout', () => {
    return img.setAttribute('src', datas.sprites.other['official-artwork'].front_default)
  })
  img.classList.add('card--img')
  // img.setAttribute('width', 256)
  li.append(img)

  const ul2 = document.createElement('ul')
  ul2.classList.add('card--text')
  li.append(ul2)

  for (let i = 0; i < datas.stats.length; i++) {
    const li = document.createElement('li')
    li.innerText = `${(datas.stats[i].stat.name).toUpperCase()}: ${datas.stats[i]["base_stat"]}`
    li.classList.add('features')
    ul2.append(li)
  }

  const h3 = document.createElement('h3')
  li.append(h3)
  h3.innerText = 'Games'

  const ul3 = document.createElement('ul')
  ul3.classList.add('card--text')
  li.append(ul3)

  const li3 = document.createElement('li')
  li3.innerText = datas["game_indices"][data.indexOf(datas)].version.name
  li3.classList.add('features')
  ul3.append(li3)
}

for (let datas of data) {
  render(datas)
}
