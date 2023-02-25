<script setup>
    import LangSwitch from './lang-switch.vue';

    const validationSchema = {
        'name': 'required',
        'email': 'required|email',
        'password': 'required',
        'confirm-password': 'confirmed:@password' 
    };

    const register = (values) => {
        alert(JSON.stringify(values, null, 4));
    };

    const prepForTrans = (str) => `forms.register.${str}`.toLowerCase();
</script>
<style lang="scss"></style>
<template>
    <div id="page-box" class="w-full max-w-sm mx-auto">

        <LangSwitch />

        <vee-form 
            class="px-4 text-4xl"
            :validation-schema="validationSchema"
            @submit="register"
            v-slot={errors}
        >
            <div class="mt-8 flex flex-col justify-center">
                <label for="name" class="font-mont font-bold capitalize">{{ $t(prepForTrans("name.label")) }}</label>
                <vee-field name="name" v-slot="{field, errors}">
                    <input type="text" class="p-4 mt-4 border-2 border-black" v-bind="field">
                    <div class="font-ssp font-bold text-3xl text-red-600 mt-2" v-if="errors.length > 0">
                        * {{ $t(prepForTrans(errors[0] || "")) }}
                    </div>
                </vee-field>
            </div>
            <div class="mt-8 flex flex-col justify-center">
                <label for="email" class="font-mont font-bold capitalize">{{ $t(prepForTrans("email.label")) }}</label>
                <vee-field name="email" v-slot="{field, errors}">
                    <input type="email" class="p-4 mt-4 border-2 border border-black" v-bind="field">
                    <div class="font-ssp font-bold text-3xl text-red-600 mt-2" v-if="errors.length > 0">
                        * {{ $t(prepForTrans(errors[0] || "")) }}
                    </div>
                </vee-field>
            </div>
            <div class="mt-8 flex flex-col justify-center">
                <label for="password" class="font-mont font-bold capitalize">{{ $t(prepForTrans("password.label")) }}</label>
                <vee-field name="password" v-slot="{field, errors}">
                    <input type="password" class="p-4 mt-4 border-2 border border-black" v-bind="field">
                    <div class="font-ssp font-bold text-3xl text-red-600 mt-2" v-if="errors.length > 0">
                        * {{ $t(prepForTrans(errors[0] || "")) }}
                    </div>
                </vee-field>
            </div>
            <div class="mt-8 flex flex-col justify-center">
                <label for="confirm-password" class="font-mont font-bold capitalize">{{ $t(prepForTrans("confirm-password.label")) }}</label>
                <vee-field name="confirm-password" v-slot="{field, errors}" :validateOnInput="true">
                    <input type="password" class="p-4 mt-4 border-2 border border-black" v-bind="field">
                    <div class="font-ssp font-bold text-3xl text-red-600 mt-2" v-if="errors.length > 0">
                        * {{ $t(prepForTrans(errors[0] || "")) }}
                    </div>
                </vee-field>
            </div>
            <div class="mt-8">
                <button :class="['font-ssp font-bold uppercase p-4 w-full bg-black text-4xl text-white', {'opacity-50 cursor-not-allowed': Object.keys(errors).length}]" type="submit">
                    {{ $t(prepForTrans("btns.submit")) }}
                </button>
            </div>
        </vee-form>

    </div>
</template>