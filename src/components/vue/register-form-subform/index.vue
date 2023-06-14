<script setup>
    import LangSwitch from './lang-switch.vue';

    const validationSchema = {
        'name': 'required',
        'email': 'required|email',
        'password': 'required',
        'confirm-password': 'confirmed:@password' 
    };

    const register = (values) => {
        console.log(values);
    };

    const prepForTrans = (str) => `forms.register.${str}`.toLowerCase();
    
</script>
<template>

    <LangSwitch />

    <vee-form :validation-schema="validationSchema" @submit="register">

        <vee-field name="name" v-slot="{field, errors}">
            <div class="flex flex-col my-6">
                <label for="name" class="text-4xl font-mont font-bold capitalize my-4">{{ $t(prepForTrans("name.label")) }}</label>
                <input type="text" class="w-full text-4xl p-4 border border-black rounded-full" v-bind="field" />
                <div class="text-3xl mt-2" v-if="errors.length > 0">
                    * {{ $t(prepForTrans(errors[0] || "")) }}
                </div>
            </div>
        </vee-field>

        <vee-field name="email" v-slot="{field, errors}">
            <div class="flex flex-col my-6">
                <label for="name" class="text-4xl font-mont font-bold capitalize my-4">{{ $t(prepForTrans("email.label")) }}</label>
                <input type="text" class="w-full text-4xl p-4 border border-black rounded-full" v-bind="field" />
                <div class="text-3xl mt-2" v-if="errors.length > 0">
                    * {{ $t(prepForTrans(errors[0] || "")) }}
                </div>
            </div>
        </vee-field>

        <vee-field name="password" v-slot="{field, errors}">
            <div class="flex flex-col my-6">
                <label for="name" class="text-4xl font-mont font-bold capitalize my-4">{{ $t(prepForTrans("password.label")) }}</label>
                <input type="password" class="w-full text-4xl p-4 border border-black rounded-full" v-bind="field" />
                <div class="text-3xl mt-2" v-if="errors.length > 0">
                    * {{ $t(prepForTrans(errors[0] || "")) }}
                </div>
            </div>
        </vee-field>

        <vee-field name="confirm-password" v-slot="{field, errors}" :validateOnInput="true">
            <div class="flex flex-col my-6">
                <label for="name" class="text-4xl font-mont font-bold capitalize my-4">{{ $t(prepForTrans("confirm-password.label")) }}</label>
                <input type="password" class="w-full text-4xl p-4 border border-black rounded-full" v-bind="field" />
                <div class="text-3xl mt-2" v-if="errors.length > 0">
                    * {{ $t(prepForTrans(errors[0] || "")) }}
                </div>
            </div>
        </vee-field>

        <button class="text-6xl font-bold text-white uppercase w-full p-4 bg-blue-600 rounded-full mt-12" type="submit">
            {{ $t(prepForTrans("btns.submit")) }}
        </button>

    </vee-form>
</template>