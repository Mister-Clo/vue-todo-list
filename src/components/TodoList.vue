<template>
  <table id="tableComponent" class="table table-bordered table-striped table-hover">
    <thead>
      <tr><!--un for loop sur les champs des entêtes-->
        <th v-for="field in fields" :key='field'>
          {{field}}
        </th>
      </tr>
    </thead>
    <tbody>
      <!--un for loop sur chaque item-->
      <tr v-for="item in items" :key="item">
        <td v-for="field in fields" :key="field">

          <span v-if=" item[field]==true "><i @click="toggleCheck(item)" class="bi bi-check-all fs-2"></i></span>
          <span v-else-if=" item[field]==false "><i @click="toggleCheck(item)" class="bi bi-x-square-fill fs-2"></i></span>
          <span v-else>{{item[field]}}</span>

          </td>      
      </tr>
    </tbody>
  
  </table>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    items: {type: Array},
    fields:{type: Array}
  },

  methods: {
    toggleCheck(item){
        item['Etat'] = !item['Etat']
    }
  }
 
};
</script>

<style scoped>
i:hover{
  cursor: pointer;
}

i.bi-check-all{
  color: green;
}
i.bi-x-square-fill{
  color: red;
}
</style>