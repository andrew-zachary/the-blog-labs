import { ref, onMounted } from "vue";

export function useDateCountDown(startFromInSecs = 0, target = 0, callback = null) {

    const secs =  ref(0);
    const mins =  ref(0);
    const hrs = ref(0);
    const days = ref(0);
    
    onMounted(() => {
        
        setInterval(() => {

            const currentDateInSecs = Math.floor(Date.now() / 1000);
            const diff = Math.abs(currentDateInSecs - startFromInSecs);
            
            secs.value = Math.floor( diff % 60 );
            mins.value = Math.floor( (diff % (60 * 60)) / (60) );
            hrs.value = Math.floor( (diff % (60 * 60 * 24)) / (60 * 60) );

            days.value = Math.floor(diff / (60 * 60 * 24));


        }, 1000);

    });

    return { secs, mins, hrs, days };
}