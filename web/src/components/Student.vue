<template>
  <div class="hello">
    <br/><br/><h1>학생 정보</h1>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
     <b-form-group id="input-group-1" label="학적:" label-for="input-1">
       <b-form-input
         id="input-1"
         v-model="form.id"
         required
         placeholder="학적"
       ></b-form-input>
     </b-form-group>
     <b-form-group id="input-group-2" label="전공:" label-for="input-2">
       <b-form-input
         id="input-2"
         v-model="form.passwd"
         required
         placeholder="전공"
       ></b-form-input>
     </b-form-group>

     <b-button type="submit" variant="primary">Submit</b-button>
     <b-button type="reset" variant="danger">Reset</b-button>
   </b-form>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      form:{
      id: '',
      passwd: '',
    },
    show: true
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
