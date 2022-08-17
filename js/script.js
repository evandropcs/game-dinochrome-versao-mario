const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
 
const jump = function(){
    mario.classList.add('jump')

    setTimeout(function(){
        mario.classList.remove('jump')

    },500)
}

const loop = setInterval(function(){

    console.log(loop)

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
    const cloudsPosition = clouds.offsetLeft

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
    
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = 'img/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '40px'

        clouds.style.animation = 'none'
        clouds.style.left = `${cloudsPosition}px`



        clearInterval(loop)

    }

},10)


document.addEventListener('keydown', jump)