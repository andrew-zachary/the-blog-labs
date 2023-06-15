<script setup>
    import LangSwitch from './lang-switch.vue';
    import * as yup from 'yup';

    yup.setLocale({
        mixed: {
            required: (attr) => {
                return `${attr.path}.errors.required`;
            }
        }
    });

    const validationSchema = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required(),
        'confirm_password': yup.string().required().oneOf([yup.ref('password')], 'confirm_password.errors.required')
    });

    const register = (values, errors) => {
        console.log(values);
    };

    const prepForTrans = (str) => `forms.register.${str}`.toLowerCase();
    
</script>
<template>

    <LangSwitch />

    <vee-form :validation-schema="validationSchema" @submit="register">

        <vee-field name="name" v-slot="{field, errors}">
            <div class="flex flex-col my-6">
                <label for="name" class="text-2xl font-mont font-bold capitalize my-4">{{ $t(prepForTrans("name.label")) }}</label>
                <input type="text" class="w-full text-3xl p-2 border border-black rounded-full" v-bind="field" />
                <div class="text-2xl mt-2" v-if="errors.length > 0">
                    * {{ $t(prepForTrans(errors[0] || "")) }}
                </div>
            </div>
        </vee-field>

        <vee-field name="email" v-slot="{field, errors}">
            <div class="flex flex-col my-6">
                <label for="name" class="text-2xl font-mont font-bold capitalize my-4">{{ $t(prepForTrans("email.label")) }}</label>
                <input type="text" class="w-full text-3xl p-2 border border-black rounded-full" v-bind="field" />
                <div class="text-2xl mt-2" v-if="errors.length > 0">
                    * {{ $t(prepForTrans(errors[0] || "")) }}
                </div>
            </div>
        </vee-field>

        <vee-field-array name="hobbies" v-slot="{ fields, push, remove }">

            <div v-for="(entry, id) in fields" :key="entry.key">
                
                <vee-field :name="`hobbies[${id}].name`" v-slot="{field, errors}" rules="required">
                    <div class="flex flex-col my-6">
                        <input type="text" class="w-full text-3xl p-2 border border-black rounded-full" v-bind="field" />
                        <pre>{{ errors }}</pre>
                    </div>
                </vee-field>

                <button type="button" @click="remove(id)">remove</button>

            </div>

            <button type="button" @click="push({name: ''})">push</button>

        </vee-field-array>

        <vee-field name="password" v-slot="{field, errors}">
            <div class="flex flex-col my-6">
                <label for="name" class="text-2xl font-mont font-bold capitalize my-4">{{ $t(prepForTrans("password.label")) }}</label>
                <input type="password" class="w-full text-3xl p-2 border border-black rounded-full" v-bind="field" />
                <div class="text-2xl mt-2" v-if="errors.length > 0">
                    * {{ $t(prepForTrans(errors[0] || "")) }}
                </div>
            </div>
        </vee-field>

        <vee-field name="confirm_password" v-slot="{field, errors}" :validateOnInput="true">
            <div class="flex flex-col my-6">
                <label for="confirm_password" class="text-2xl font-mont font-bold capitalize my-4">{{ $t(prepForTrans("confirm_password.label")) }}</label>
                <input type="password" class="w-full text-3xl p-2 border border-black rounded-full" v-bind="field" />
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