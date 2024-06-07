'use strict'

function onMenuItemClicked(elLi){
    cleanLis()
    elLi.style.borderBlockEnd = '4px solid var(--color_secondary_01)'
    elLi.style.color = 'var(--color_secondary_01)'
}

function cleanLis(){
    let elLis = document.querySelectorAll('.main-header li')
    elLis = Array.from(elLis)
    elLis.forEach(elLi => {
        elLi.style.borderBlockEnd = '1px solid var(--color_secondary_03)'
        elLi.style.color = 'var(--color_secondary_base)'
    })
}