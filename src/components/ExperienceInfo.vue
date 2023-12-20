<template>
    <div>
        <p> Enter your experience starting from your latest one </p>
        <ValidationObserver v-slot="{ invalid,handleSubmit }" >
            <b-card class="mb-3" v-for="(e,i) of experience" :key="i" >
                <ValidationProvider :name="`company${i+1}`" rules="required" v-slot="{ errors }">
                    <label :for="`company${i+1}`" class="d-block">Company<span class="text-danger">*</span></label>
                    <input  v-model="e.companyName" type="text" class="form-control" autocomplete="companyName">
                    <span class="d-block text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider  :name="`startDate${i+1}`" rules="required" v-slot="{ errors }" vid="startDate">
                    <label :for="`startDate${i+1}`" class="d-block">Start date<span class="text-danger">*</span></label>
                    <input v-model="e.startDate" type="date" class="form-control" autocomplete="startDate">
                    <span class="d-block text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider :name="`endDate${i+1}`" :rules="`compare_date:${e.startDate}|no_future_date:${maxDate}` " v-slot="{ errors }">
                    <label :for="`endDate${i+1}`" class="d-block">End date<span class="text-danger">*</span></label>
                    <input  :disabled="e.currentCompany==true" v-model="e.endDate" type="date" class="form-control" autocomplete="endDate">
                    <span class="d-block text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
                <ValidationProvider :name="`currentCompany{i+1}`" >
                    <label :for="`currentCompany{i+1}`" class="d-block mt-2">
                    <input @input="onSelect(i)" v-model="e.currentCompany" type="checkbox" value="I currently work here" autocomplete="currentCompany">
                    I currently work here
                    </label>
                    <b-button v-if="i>0" class="mt-2 btn-themed" @click="removeExperience(i)">Remove Experience</b-button>
                </ValidationProvider>
            </b-card>
            <span class="d-block text-danger">{{ errMsg }}</span>
            <b-button class="mt-2 btn-themed" @click="addExperience">Add Experience</b-button>
            <b-button class="mt-2 mx-3 btn-themed" :disabled="invalid" @click="handleSubmit(submit(expForm))">Next</b-button>
        </ValidationObserver>
    </div>
</template>
<script>
export default {
    name:'ExperienceInfo',
    data() {
        return {
            expForm: {
                companyName:'',
                startDate:'',
                endDate:'',
                skills:'',
                currentCompany:'',
                ref:2,
                fName:'expInfo'
            },  
            experience:[{
                companyName:'',
                startDate:'',
                endDate:'',
                skills:'',
                currentCompany:'',
                ref:2,
                fName:'expInfo'
            },],
            errMsg: ''
        }
    },
    computed: {
        maxDate() {
          const today = new Date().toISOString().split("T")[0];
          return today;
        }
    },
    methods: {
        submit(f) { 
            if(f.ref==2 && this.experience.length>1) {
           if(this.checkExperience()=="no overlap") {
            this.errMsg=''
            this.next(f.ref)
           }
           else {
            this.errMsg = this.checkExperience()
           }
          
        }
        else {
            this.$emit('submit',f);
        }  
           
        },
        addExperience() { 
          this.experience.push(this.expForm)
        },
        removeExperience(i) {
          this.experience.splice(i,1)
        },
        checkExperience() {
          for(let i=0;i<this.experience.length;i++) {
            for(let j=1;j<this.experience.length;j++) {
              if(this.experience[i].startDate <this.experience[j].endDate) {
                return "There is a overlap in the experience"
              }
              else {
                return "no overlap"
              }
            }
          }
        },
        onSelect(i) {
            this.experience[i].endDate =""
        }
    },
}
</script>