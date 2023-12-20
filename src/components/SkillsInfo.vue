<template>
     <ValidationObserver v-slot="{ invalid,handleSubmit }" >
              <b-card class="mb-3" v-for="(s,i) of skills" :key="i" >
                <ValidationProvider name="skill" rules="required" v-slot="{ errors }">
                  <label for="skill" class="d-block">Skill Name<span class="text-danger">*</span></label>
                  <input id="skill" v-model="s.skillName" type="text" class="form-control" autocomplete="skill">
                  <span class="d-block text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider name="skillLevel" rules="required|between:1,10" v-slot="{ errors }">
                  <label for="skillLevel" class="d-block">Skill Level<span class="text-danger">*</span></label>
                  <input id="skillLevel" v-model="s.skillLevel" type="number" class="form-control" autocomplete="skillLevel">
                  <span class="d-block text-danger">{{ errors[0] }}</span>
              </ValidationProvider>
              <b-button v-if="i>0" class="mt-2 btn-info" @click="removeSkill(i)">Remove Skill</b-button>
              </b-card>
            <b-button class="mt-2 btn-themed" @click="addSkill">Add Skill</b-button>
            <b-button class="mt-2 mx-3 btn-themed" :disabled="invalid" @click="handleSubmit(submit(skillForm))">Next</b-button>
            </ValidationObserver>
    </template>
    <script>
   
    export default {
      name:'SkillsInfo',
      data(){
        return {
          skillForm: {
              skillName: "",
              skillLevel: "",
              ref:3,
              fName:'skillsInfo'
            },
            skills:[{
              skillName: "",
              skillLevel: "",
              ref:3,
              fName:'skillsInfo'
            }],
        }
     },
    methods: {
      submit(f) { 
        this.$emit('submit',f);     
      },
      addSkill() {
        this.skills.push(this.skillForm)
      },
      removeSkill(i) {
        this.skills.splice(i,1)
      },  
    }
  }
    
    
    </script>