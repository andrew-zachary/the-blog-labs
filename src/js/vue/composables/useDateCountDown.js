import { ref } from "vue";

export function useDateCountDown(source = 0, callback = null) {

    const secs =  ref(0);
    const mins =  ref(0);
    const hrs = ref(0);
    const days = ref(0);

    const isCounting = ref(false);

    const countingInterval = ref(null);

    const startCounting = () => {

        if(source.value.value.length === 0) return;

        isCounting.value = true;
        const unixTimeStamp = (new Date(source.value.value)).getTime();

        countingInterval.value = setInterval(() => {
    
            const diff =  Math.floor ( Math.abs(Date.now() - unixTimeStamp) / 1000 );
            
            secs.value = Math.floor( diff % 60 );
            mins.value = Math.floor( (diff % (60 * 60)) / (60) );
            hrs.value = Math.floor( (diff % (60 * 60 * 24)) / (60 * 60) );
    
            days.value = Math.floor(diff / (60 * 60 * 24));
    
        }, 1000);

    };

    const stopCounting = () => {
        clearInterval(countingInterval.value);
        isCounting.value = false;
        secs.value = 0;
        mins.value = 0;
        hrs.value = 0;
        days.value = 0;
    }

    return { secs, mins, hrs, days, startCounting, stopCounting, isCounting };
}