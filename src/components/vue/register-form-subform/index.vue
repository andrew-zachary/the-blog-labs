<script setup>
    import LangSwitch from './lang-switch.vue';
    import * as yup from 'yup';

    const initialValues = {
        name: '',
        email: '',
        hobbies: [{name: '', years: '1'}],
        password: '',
        confirm_password: ''
    };

    const validationSchema = yup.object().shape({
        name: yup.string().required('name.errors.required'),
        email: yup.string().email('email.errors.email').required('email.errors.required'),
        hobbies: yup.array().of(
            yup.object().shape({
                name: yup.string().required(),
                years: yup.string().required(),
            })
        ).required().min(1),
        password: yup.string().required('password.errors.required'),
        'confirm_password': yup.string().required('confirm_password.errors.required').oneOf([yup.ref('password')], 'confirm_password.errors.required')
    });

    const register = (values, errors) => {
        console.log(values);
        alert(JSON.stringify(values, null, 4));
    };

    const prepForTrans = (str) => `forms.register.${str}`.toLowerCase();
    
</script>
<style lang="scss">

#select-years {
    margin: 0 0 0 1.5rem;

    html[dir=rtl] & {
        margin: 0 1.5rem 0 0;
    }
}

.p-button-icon {
    padding: 0 1.5rem;

    &:before {
        font-size: 3.5rem;
    }
}

button:disabled {
    opacity: 0.5;
}
</style>
<template>

    <LangSwitch />

    <vee-form 
        :validation-schema="validationSchema" 
        :initial-values="initialValues" 
        @submit="register"
        v-slot="{errors}"
    >

        <vee-field name="name" v-slot="{field, errors}" :validateOnInput="true">
            <div class="flex flex-col my-6">
                <label for="name" class="text-4xl font-mont font-bold capitalize my-4">{{ $t(prepForTrans("name.label")) }}</label>
                <input type="text" class="w-full text-3xl py-2 px-8 border border-black rounded-full" v-bind="field" />
                <div class="text-2xl mt-2" v-if="errors.length > 0">
                    * {{ $t(prepForTrans(errors[0] || "")) }}
                </div>
            </div>
        </vee-field>

        <vee-field name="email" v-slot="{field, errors}" :validateOnInput="true">
            <div class="flex flex-col my-6">
                <label for="name" class="text-4xl font-mont font-bold capitalize my-4">{{ $t(prepForTrans("email.label")) }}</label>
                <input type="text" class="w-full text-3xl py-2 px-8 border border-black rounded-full" v-bind="field" />
                <div class="text-2xl mt-2" v-if="errors.length > 0">
                    * {{ $t(prepForTrans(errors[0] || "")) }}
                </div>
            </div>
        </vee-field>

        <vee-field-array name="hobbies" v-slot="{ fields, push, remove }">

            <div class="flex items-center mt-6">
                <label for="hobbies" class="text-4xl font-mont font-bold capitalize py-[1.5rem]">{{ $t(prepForTrans("hobbies.label")) }}</label>
                <Button 
                    v-show="fields.length < 3" @click="push({name: '', years: '1'})"
                    icon="pi pi-plus-circle text-2xl" 
                    severity="secondary" 
                    rounded 
                    aria-label="Bookmark" />
            </div>

            <div class="text-2xl" v-show="fields.length === 0">
                {{ $t(prepForTrans("hobbies.errors.min")) }}
            </div>

            <div class="flex items-start" v-for="(entry, id) in fields" :key="entry.key">
                
                <vee-field :name="`hobbies[${id}].name`" v-slot="{field, errors}" :validateOnInput="true">

                    <div class="grow flex flex-col mb-4">
                        <input
                            type="text" 
                            class="w-full text-3xl py-2 px-8 border border-black rounded-full" 
                            v-bind="field" />
                        <div class="text-2xl" v-if="errors.length > 0">
                            * {{ $t(prepForTrans('hobbies.errors.signal')) }}
                        </div>
                    </div>

                    <div id="select-years" class="py-2 px-4 border border-black rounded-full">
                        <vee-field :name="`hobbies[${id}].years`" as="select" class="text-3xl bg-white focus:outline-none">
                            <option value="1">{{ $t(prepForTrans('hobbies.years.1')) }}</option>
                            <option value="2">{{ $t(prepForTrans('hobbies.years.2')) }}</option>
                            <option value="3">{{ $t(prepForTrans('hobbies.years.3')) }}</option>
                        </vee-field>
                    </div>

                    <Button 
                    @click="() => {
                        if(fields.length <= 1) return;
                        remove(id);
                    }"
                    :disabled="fields.length <= 1"
                    class="grow-0"
                    icon="pi pi-times-circle" 
                    severity="secondary" 
                    rounded 
                    aria-label="Bookmark" />

                </vee-field>

            </div>

        </vee-field-array>

        <vee-field name="password" v-slot="{field, errors}" :validateOnInput="true">
            <div class="flex flex-col my-6">
                <label for="name" class="text-4xl font-mont font-bold capitalize my-4">{{ $t(prepForTrans("password.label")) }}</label>
                <input type="password" class="w-full text-3xl py-2 px-8 border border-black rounded-full" v-bind="field" />
                <div class="text-2xl mt-2" v-if="errors.length > 0">
                    * {{ $t(prepForTrans(errors[0] || "")) }}
                </div>
            </div>
        </vee-field>

        <vee-field name="confirm_password" v-slot="{field, errors}" :validateOnInput="true">
            <div class="flex flex-col my-6">
                <label for="confirm_password" class="text-4xl font-mont font-bold capitalize my-4">{{ $t(prepForTrans("confirm_password.label")) }}</label>
                <input type="password" class="w-full text-3xl py-2 px-8 border border-black rounded-full" v-bind="field" />
                <div class="text-2xl mt-2" v-if="errors.length > 0">
                    * {{ $t(prepForTrans(errors[0] || "")) }}
                </div>
            </div>
        </vee-field>

        <button 
            :class="['text-6xl font-bold text-white uppercase w-full p-4 bg-black rounded-full mt-12']"
            :disabled="Object.keys(errors).length"
            type="submit"
        >
            {{ $t(prepForTrans("btns.submit")) }}
        </button>

    </vee-form>
</template>