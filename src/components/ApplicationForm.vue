<template>
  <div class="row mt-5">
  <div class="col-md-8 mx-auto">
    <div class="accordion" role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button block v-b-toggle.accordion-1 variant="info" class="col-12 btn-themed">Personal Information</b-button>
        </b-card-header>
        <b-collapse ref="1" id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <personal-info  @submit="submit"></personal-info>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button block v-b-toggle.accordion-2 variant="info" class="col-12 btn-themed">Experience</b-button>
        </b-card-header>
        <b-collapse ref="2" id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <ExperienceInfo @submit="submit"></ExperienceInfo>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-0" role="tab">
          <b-button block v-b-toggle.accordion-3 variant="info" class="col-12 btn-themed">Skills</b-button>
        </b-card-header>
        <b-collapse ref="3" id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
              <SkillsInfo @submit="submit"></SkillsInfo>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
  
  <div class="col-8 mx-auto">
      <ProgressTracker :values="values"></ProgressTracker> 
  </div>
<div class="col-8 mx-auto" v-if="successMsg">
  <b-card>
   <b-card-body>{{ successMsg }}</b-card-body>
  </b-card>
</div>
</div>
</template>
  <script>
import PersonalInfo from './PersonalInfo.vue';
import ExperienceInfo from './ExperienceInfo.vue';
import SkillsInfo from './SkillsInfo.vue';
import ProgressTracker from './ProgressTracker.vue';

export default {
    name:'ApplicationForm',
    data() {
        return {
            values: [0, 0, 0],
            successMsg: '',
            applicationForm: {
             
            }
        }
    },
    components: {
      PersonalInfo,
      ExperienceInfo,
      SkillsInfo,
      ProgressTracker
    },
   
    methods: {
        next(i) {
          this.$refs[i].toggle();
          if(i!=3)
          this.$refs[i+1].toggle();
          this.$set(this.values, i-1, 100)
          setTimeout(()=>{
            this.$children[3].$refs[`icon${i}`].classList.add('active')
          },500)
         this.success()
        },
        submit(f) {
          f.valid = true;
          this.applicationForm[f.fName] =f.valid
          console.log(this.applicationForm)
          this.next(f.ref);
        },
        success() {
          if(this.applicationForm.personalInfo && this.applicationForm.expInfo && this.applicationForm.skillsInfo) {
            this.successMsg= "Details captured successfully! we will get back to you soon";
          } 
        }
    }
}
</script>

<style>
    .d-block {
        display: block;
    }
   
    .b-icon.bi {
      position: absolute;
      right: -7px;
      top:-6px;
      border: 1px solid grey;
      border-radius: 50%;
      background-color: #eaecef;
      z-index: 9;
    }
    .progress-tracker {
      position: relative;
    }
    .progress .progress-bar {
      background-color: green;
    }
    .btn.btn-themed  {
      background-color: #334291;
      border-color: #334291;
      color:white;
      --bs-btn-hover-bg: white;
      --bs-btn-active-bg: #334291;
      --bs-btn-disabled-bg: grey;
      --bs-btn-disabled-border-color: white;
    }
    .b-icon.bi.active {
      background-color:green;
      color:white;
      border:1px solid green;
     
    }
    input[type="date"] {
    position: relative;
}

input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: auto;
    height: auto;
    color: transparent;
    background: transparent; 
}
</style>