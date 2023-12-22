
document.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(function(){
        document.body.classList.remove('fade')
    }, 230);
})

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}


 document.getElementById("project-card1").addEventListener('mouseover', opaque1);
 document.getElementById("project-card2").addEventListener('mouseover', opaque2);
 document.getElementById("project-card3").addEventListener('mouseover', opaque3);
 document.getElementById("project-card4").addEventListener('mouseover', opaque4);


function opaque1() {
document.getElementById("project-card1").classList.toggle('opacity-50')
document.getElementById("project-card1").addEventListener('mouseout', opaque1)
}
function opaque2() {
    document.getElementById("project-card2").classList.toggle('opacity-50')
    document.getElementById("project-card2").addEventListener('mouseout', opaque2)
}
function opaque3() {
    document.getElementById("project-card3").classList.toggle('opacity-50')
    document.getElementById("project-card3").addEventListener('mouseout', opaque3)
}
function opaque4() {
    document.getElementById("project-card4").classList.toggle('opacity-50')
    document.getElementById("project-card4").addEventListener('mouseout', opaque4)
}


