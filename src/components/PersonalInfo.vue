<template>
<ValidationObserver v-slot="{ invalid,handleSubmit }" >
    <ValidationProvider name="firstName" rules="required" v-slot="{ errors }">
      <label for="firstName" class="d-block">Firstname<span class="text-danger">*</span></label>
      <input id="firstName" v-model="personalInfoForm.firstName" type="text" class="form-control" autocomplete="firstName">
      <span class="d-block text-danger">{{ errors[0] }}</span>
  </ValidationProvider>
  <ValidationProvider name="lastName"  v-slot="{ errors }">
      <label for="lastName" class="d-block">Lastname</label>
      <input id="lastName" v-model="personalInfoForm.lastName" type="text" class="form-control" autocomplete="lastName">
      <span class="d-block text-danger">{{ errors[0] }}</span>
  </ValidationProvider>
  <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
      <label for="email" class="d-block">Email<span class="text-danger">*</span></label>
      <input id="email" v-model="personalInfoForm.email" type="email" class="form-control" autocomplete="email">
      <span class="d-block text-danger">{{ errors[0] }}</span>
  </ValidationProvider>
  <ValidationProvider name="phoneNumber" rules="required|min:10|max:10" v-slot="{ errors }">
      <label for="phoneNumber" class="d-block">Phone Number<span class="text-danger">*</span></label>
      <input id="phoneNumber" v-model="personalInfoForm.phoneNumber" type="number" class="form-control" autocomplete="phoneNumber">
      <span class="d-block text-danger">{{ errors[0] }}</span>
  </ValidationProvider>
  
  <b-button class="mt-2 btn-themed" :disabled="invalid" @click="handleSubmit(submit(personalInfoForm))">Next</b-button>
</ValidationObserver>
</template>
<script>
//import * as firebase from 'firebase/database'
export default {
  name:'PersonalInfo',
 data(){
    return {
        personalInfoForm: {
                email: '',
                firstName: '',
                lastName: "",
                phoneNumber:'',
                skills:'',
                ref:1,
                fName:'personalInfo'
            },
    }
 },
 
  methods: {
  
      
      submit(f) {
       
       this.$emit('submit',f);

      }
},
    
     
    
     
     
     
  }


</script>