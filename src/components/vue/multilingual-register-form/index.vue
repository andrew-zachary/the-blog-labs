<script setup>
    const validationSchema = {
        'fname': 'required',
        'lname': 'required',
        'email': 'required|email',
        'password': 'required',
        'confirm-password': 'confirmed:@password' 
    };
    const register = (values) => {
        console.log(values);
    };
</script>
<style lang="scss"></style>
<template>
    <vee-form 
        class="px-4 text-4xl w-full max-w-sm mx-auto"
        :validation-schema="validationSchema"
        @submit="register"
    >
        <div class="mt-8 flex flex-col justify-center">
            <label for="fname" class="capitalize">first name</label>
            <vee-field name="fname" type="text" class="p-4 mt-4 border-2 border-black"></vee-field>
            <ErrorMessage class="text-3xl text-red-600 mt-2" name="fname" />
        </div>
        <div class="mt-8 flex flex-col justify-center">
            <label for="lname" class="capitalize">last name</label>
            <vee-field name="lname" type="text" class="p-4 mt-4 border-2 border border-black"></vee-field>
            <ErrorMessage class="text-3xl text-red-600 mt-2" name="lname" />
        </div>
        <div class="mt-8 flex flex-col justify-center">
            <label for="email" class="capitalize">email</label>
            <vee-field name="email" type="email" class="p-4 mt-4 border-2 border border-black"></vee-field>
            <ErrorMessage class="text-3xl text-red-600 mt-2" name="email" />
        </div>
        <div class="mt-8 flex flex-col justify-center">
            <label for="password" class="capitalize">password</label>
            <vee-field name="password" type="password" class="p-4 mt-4 border-2 border border-black"></vee-field>
            <ErrorMessage class="text-3xl text-red-600 mt-2" name="password" />
        </div>
        <div class="mt-8 flex flex-col justify-center">
            <label for="confirm-password" class="capitalize">confirm password</label>
            <vee-field name="confirm-password" type="password" class="p-4 mt-4 border-2 border border-black" :validateOnInput="true"></vee-field>
            <ErrorMessage class="text-3xl text-red-600 mt-2" name="confirm-password" />
        </div>
        <div class="mt-8">
            <button class="p-4 w-full bg-black text-4xl text-white" type="submit">sign up</button>
        </div>
    </vee-form>
</template>