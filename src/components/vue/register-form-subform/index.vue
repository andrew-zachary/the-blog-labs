<script setup>
    import LangSwitch from './lang-switch.vue';
    import * as yup from 'yup';

    const initialValues = {
        name: '',
        email: '',
        hobbies: [],
        password: '',
        confirm_password: ''
    };

    const validationSchema = yup.object().shape({
        name: yup.string().required('name.errors.required'),
        email: yup.string().email().required('email.errors.required'),
        hobbies: yup.array().of(
            yup.object().shape({
                name: yup.string().required()
            })
        ).min(1, 'at least 1 hobby'),
        password: yup.string().required('password.errors.required'),
        'confirm_password': yup.string().required('confirm_password.errors.required').oneOf([yup.ref('password')], 'confirm_password.errors.required')
    });

    const register = (values, errors) => {
        console.log(values);
    };

    const prepForTrans = (str) => `forms.register.${str}`.toLowerCase();
    
</script>
<style lang="scss">
.p-button-icon {
    padding: 1.5rem;

    &:before {
        font-size: 3rem;
        color: #2563eb;
    }
}
</style>
<template>

    <LangSwitch />

    <vee-form :validation-schema="validationSchema" :initial-values="initialValues" @submit="register">

        <vee-field name="name" v-slot="{field, errors}">
            <div class="flex flex-col my-6">
                <label for="name" class="text-2xl font-mont font-bold capitalize my-4">{{ $t(prepForTrans("name.label")) }}</label>
                <input type="text" class="w-full text-3xl py-2 px-4 border border-black rounded-full" v-bind="field" />
                <div class="text-2xl mt-2" v-if="errors.length > 0">
                    * {{ $t(prepForTrans(errors[0] || "")) }}
                </div>
            </div>
        </vee-field>

        <vee-field name="email" v-slot="{field, errors}">
            <div class="flex flex-col my-6">
                <label for="name" class="text-2xl font-mont font-bold capitalize my-4">{{ $t(prepForTrans("email.label")) }}</label>
                <input type="text" class="w-full text-3xl py-2 px-4 border border-black rounded-full" v-bind="field" />
                <div class="text-2xl mt-2" v-if="errors.length > 0">
                    * {{ $t(prepForTrans(errors[0] || "")) }}
                </div>
            </div>
        </vee-field>

        <vee-field-array name="hobbies" v-slot="{ fields, push, remove }">

            <div class="flex items-center mt-6">
                <label for="hobbies" class="text-2xl font-mont font-bold capitalize">{{ $t(prepForTrans("hobbies.label")) }}</label>
                <Button 
                    v-show="fields.length < 3" @click="push({name: ''})"
                    icon="pi pi-plus-circle text-2xl text-blue-600" 
                    severity="secondary" 
                    rounded 
                    aria-label="Bookmark" />
            </div>

            <div class="text-2xl" v-show="fields.length === 0">
                {{ $t(prepForTrans("hobbies.errors.min")) }}
            </div>

            <div class="flex items-center" v-for="(entry, id) in fields" :key="entry.key">
                
                <vee-field :name="`hobbies[${id}].name`" v-slot="{field, errors}" rules="required">
                    <div class="grow flex flex-col py-2 relative">
                        <input type="text" class="w-full text-3xl py-2 px-4 border border-black rounded-full" v-bind="field" />
                        <div class="text-2xl absolute bottom-[-17px]" v-if="errors.length > 0">
                            * {{ $t(prepForTrans('hobbies.errors.signal')) }}
                        </div>
                    </div>
                </vee-field>

                <Button 
                    @click="remove(id)"
                    class="grow-0"
                    icon="pi pi-times-circle" 
                    severity="secondary" 
                    rounded 
                    aria-label="Bookmark" />

            </div>

        </vee-field-array>

        <vee-field name="password" v-slot="{field, errors}">
            <div class="flex flex-col my-6">
                <label for="name" class="text-2xl font-mont font-bold capitalize my-4">{{ $t(prepForTrans("password.label")) }}</label>
                <input type="password" class="w-full text-3xl py-2 px-4 border border-black rounded-full" v-bind="field" />
                <div class="text-2xl mt-2" v-if="errors.length > 0">
                    * {{ $t(prepForTrans(errors[0] || "")) }}
                </div>
            </div>
        </vee-field>

        <vee-field name="confirm_password" v-slot="{field, errors}" :validateOnInput="true">
            <div class="flex flex-col my-6">
                <label for="confirm_password" class="text-2xl font-mont font-bold capitalize my-4">{{ $t(prepForTrans("confirm_password.label")) }}</label>
                <input type="password" class="w-full text-3xl py-2 px-4 border border-black rounded-full" v-bind="field" />
                <div class="text-2xl mt-2" v-if="errors.length > 0">
                    * {{ $t(prepForTrans(errors[0] || "")) }}
                </div>
            </div>
        </vee-field>

        <button class="text-2xl font-bold text-white uppercase w-full p-4 bg-blue-600 rounded-full mt-12" type="submit">
            {{ $t(prepForTrans("btns.submit")) }}
        </button>

    </vee-form>
</template>