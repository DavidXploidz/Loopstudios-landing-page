/*Globales*/
const menu = document.querySelector('.menu')
const menuHam = document.querySelector('#menu-ham')
const barra = document.querySelector('.barra')
const barraContenido = document.querySelector('.barra-contenido')
const gridCreations = document.querySelector('.grid-creations')
// const cardImages = document.querySelector('.card-images')

// console.log(cardImages)

menuHam.addEventListener('click', () => {
    if(menu.classList.contains('ocultar')){
        menuHam.src = 'images/icon-close.svg'
        menu.classList.remove('ocultar')
        menu.classList.add('mostrar')
        barraContenido.classList.add('menu-oculto')
        
    }else{
        menu.classList.remove('mostrar')
        menu.classList.add('ocultar')
        menuHam.src = 'images/icon-hamburger.svg'
        barraContenido.classList.remove('menu-oculto')
    }

});

const datos = [
    {
        id: 1,
        titulo: 'Deep',
        tituloSpan: 'earth',
        image: '../images/mobile/image-deep-earth.jpg',
        imageDesk: 'images/desktop/image-deep-earth.jpg'
    },
    {
        id: 2,
        titulo: 'Night',
        tituloSpan: 'arcade',
        image: '../images/mobile/image-night-arcade.jpg',
        imageDesk: 'images/desktop/image-night-arcade.jpg'
    },
    {
        id: 3,
        titulo: 'Soccer',
        tituloSpan: 'team VR',
        image: '../images/mobile/image-soccer-team.jpg',
        imageDesk: 'images/desktop/image-soccer-team.jpg'
    },
    {
        id: 4,
        titulo: 'The',
        tituloSpan: 'grid',
        image: '../images/mobile/image-grid.jpg',
        imageDesk: 'images/desktop/image-grid.jpg'
    },
    {
        id: 5,
        titulo: 'From up',
        tituloSpan: 'above VR',
        image: '../images/mobile/image-from-above.jpg',
        imageDesk: 'images/desktop/image-from-above.jpg'
    },
    {
        id: 6,
        titulo: 'rocket',
        tituloSpan: 'borealis',
        image: '../images/mobile/image-pocket-borealis.jpg',
        imageDesk: 'images/desktop/image-pocket-borealis.jpg'
    },
    {
        id: 7,
        titulo: 'The',
        tituloSpan: 'curiosity',
        image: '../images/mobile/image-curiosity.jpg',
        imageDesk: 'images/desktop/image-curiosity.jpg'
    },
    {
        id: 8,
        titulo: 'Make it',
        tituloSpan: 'fisheye',
        image: '../images/mobile/image-fisheye.jpg',
        imageDesk: 'images/desktop/image-fisheye.jpg'
    }
]

document.addEventListener('DOMContentLoaded', () => {
   datos.map(item => {
    const article = document.createElement('ARTICLE')
    article.classList.add('card-images')

    
        article.style.backgroundImage = `url(${item.imageDesk})`
        
        
       
    
        // article.style.backgroundImage = `url(${item.image})`
    
    
  

    const h3 = document.createElement('H3')
    h3.classList.add('card-titulo')
    h3.textContent = `${item.titulo}`

    const span = document.createElement('SPAN')
    span.textContent = `${item.tituloSpan}`

    h3.appendChild(span)
    article.appendChild(h3)
    gridCreations.appendChild(article)

   })
})