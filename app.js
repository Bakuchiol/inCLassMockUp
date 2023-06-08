
let texter = document.querySelector('.scrolltxt')
let count = 0
let scrollers = [
    "BlahBlah",
    "OhLala",
    "SomthingElse"
]

const carouselup = () => {
    console.log("up")
    count++
    texter.innerHTML= scrollers[count]
}

const carouseldown = () => {
    console.log("up")
    count--
    texter.innerHTML= scrollers[count]
}