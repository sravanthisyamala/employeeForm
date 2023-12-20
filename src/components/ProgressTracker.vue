<template>
    <div class="row justify-content-md-center mt-4">
        <div class="col-4 p-0 mt-2 progress-tracker">
          <b-progress :max="max" class="mb-3">
             <b-progress-bar  :value="values[0]"></b-progress-bar>
          </b-progress>
          <b-icon ref="icon1" icon="check-all"  font-scale="2"></b-icon>
        </div>
        <div class="col-4 p-0 mt-2 progress-tracker">
          <b-progress  :max="max" class="mb-3">
            <b-progress-bar  :value="values[1]"></b-progress-bar>
          </b-progress>
          <b-icon ref="icon2" icon="check-all" font-scale="2"></b-icon>
        </div>
        <div class="col-4 p-0 mt-2 progress-tracker">
          <b-progress :max="max" class="mb-3 "> 
            <b-progress-bar :value="values[2]"></b-progress-bar>
          </b-progress>
          <b-icon ref="icon3" icon="check-all" font-scale="2"></b-icon>
        </div>
      </div>   
</template>
<script>
export default {
    name:'ProgressTracker',
    props: ['values'],
    data(){
        return {
            max: 100,
        }
    },  
}
</script>
