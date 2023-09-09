const { createApp, ref, reactive, computed } = Vue;
window.addEventListener('DOMContentLoaded', () => {
    createApp({
        setup(){
            const showNav = ref(false);

            
            return { showNav }
        }
    }).mount('body');
})