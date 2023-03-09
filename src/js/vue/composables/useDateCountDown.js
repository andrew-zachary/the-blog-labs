import { ref, onMounted } from "vue";

export function useDateCountDown(startFrom = 0, target = 0, callback = null) {
    
    const secs =  ref(60);
    const mins =  ref(0);
    
    onMounted(() => {
        
        const counter = setInterval(() => {
            
            secs.value -= 1;
            
            const currentTime = Math.floor(Date.now() / 1000);
            const diff = Math.abs(currentTime - startFrom);
            mins.value = Math.floor(diff / 60);

        }, 1000);

    });

    return { secs, mins };
}