// ============= show menu mobile===============
const navMenu = document.getElementById('nav_menu'),
navToggle = document.getElementById('nav_toggle'),
navclose = document.getElementById('nav_close'),
navLink = document.querySelectorAll('.nav_link')

if(navToggle){
    navToggle.addEventListener('click' ,()=>{
        navMenu.classList.add('show_menu')
    })
}
if(navclose){
    navclose.addEventListener('click' ,()=>{
        navMenu.classList.remove('show_menu')
    })
}
// ============= remove menu mobile=============== 

navLink.forEach(n=>n.addEventListener('click' ,()=>{
    navMenu.classList.remove('show_menu')
}))

// ============= Change background header =============
const header = document.getElementById('header')
window.addEventListener('scroll', ()=>{
    if (this.scrollY >= 50 ){
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
})
// ============= scroll up =============
const scrollup = document.getElementById('scrollup')
window.addEventListener('scroll', ()=>{
    if (this.scrollY >= 1000 ){
        scrollup.classList.add('show-scroll')
    } else {
        scrollup.classList.remove('show-scroll')
    }
})
// ============= scroll Navbor =============
const sections= document.querySelectorAll('section[id]')
function scrollActive(){
    const screenY  = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (screenY  > sectionTop && screenY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('activeLink')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('activeLink')
        }   
    })
}
window.addEventListener('scroll', scrollActive)
// ============= scroll Reveal Animation =============
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay:400
})
sr.reveal(`.home_header,.section_title`,{delay:600})
sr.reveal(`.home_footer`,{delay:700})
sr.reveal(`.home_img`,{delay:900 , origin:'top'})

sr.reveal(`.sponsor_img`,{ origin:'top', interval:100})
sr.reveal(`.specs_data`,{ origin:'left', interval:100})
sr.reveal(`.specs_img`,{ origin:'right'})

sr.reveal(`.case_data,.discount_animate`,{ origin:'left'})
sr.reveal(`.case_img,.discount_img`,{ origin:'right'})

sr.reveal(`.products_card`,{ origin:'top', interval:100 })
sr.reveal(`.products_img`,{ origin:'bottom', interval:100,delay:1000 })




