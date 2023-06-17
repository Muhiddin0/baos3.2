

function scroll_activator(baos_elements, scroll_element, window_height) {

    scroll_element.addEventListener('scroll', () => {
        

        for (let i = 0; i < baos_elements.length; i++) {
            
            let element_top = baos_elements[i].offsetTop
            let element_height = baos_elements[i].clientHeight
            let scroll_Y = scroll_element.scrollTop == undefined ? scroll_element.scrollY:scroll_element.scrollTop
            
            if (scroll_Y == undefined)
                scroll_Y = 0
            if (element_top + element_height / 2 < window_height + scroll_Y){
                
                baos_elements[i].classList.add('baos-active')
                
            } else {
                baos_elements[i].classList.remove('baos-active')
            }  
        }
    })
}

function init(scroll_element_selector) {

    if (scroll_element_selector == window){
        
        const baos_elements = document.querySelectorAll('.baos')
        const scroll_element = window
        const window_height = window.innerHeight

        scroll_activator(baos_elements,scroll_element,window_height)

        
        for (let i = 0; i < baos_elements.length; i++) {

            let element_top = baos_elements[i].offsetTop
            let element_height = baos_elements[i].clientHeight
            let scroll_Y = scroll_element.scrollTop ? scroll_element.scrollTop:scroll_element.scrollY

            
            if (element_top + element_height / 2 < window_height + scroll_Y){
                baos_elements[i].classList.add('baos-active')
            } else {
                baos_elements[i].classList.remove('baos-active')
            }  
        }
    } else if (typeof(scroll_element_selector) === "string") {
        const scroll_element = document.querySelector(scroll_element_selector)
        const baos_elements = scroll_element.querySelectorAll('.baos')
        const window_height = document.querySelector(scroll_element_selector).clientHeight

        scroll_activator(baos_elements,scroll_element,window_height)

        for (let i = 0; i < baos_elements.length; i++) {

            let element_top = baos_elements[i].offsetTop
            let element_height = baos_elements[i].clientHeight
            let scroll_Y = scroll_element.scrollTop ? scroll_element.scrollTop:scroll_element.scrollY

            if (scroll_Y == undefined)
                scroll_Y = 0

            
            if (element_top + element_height / 2 < window_height + scroll_Y){
                baos_elements[i].classList.add('baos-active')
            } else {
                baos_elements[i].classList.remove('baos-active')
            }  
        }
        
    } else {
        console.info("Xato Malumot turini kiritmang")
    }
}
