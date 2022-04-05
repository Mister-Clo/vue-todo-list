<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>EXERCICE 1 - TODO LIST</h1>
    <CreateTask/>

    <div class="taches container text-center mt-5 mb-5">
    <h2 class="mt-5 fw-bolder">Vos Tâches</h2><hr>
      <TodoList @addTask="addTask" :fields="fields" :items="items"/>
    </div>

    
  </div>
</template>

<script>
 
import TodoList from '@/components/TodoList.vue'
import CreateTask from '@/components/CreateTache.vue'

export default {
  name: 'Exercice-1',
  components : {
    TodoList,
    CreateTask
  },

  data : function(){
      return{
        items: [
          {Titre:"Le TP3", Description:"Finir le TP3 aujourd'hui", Etat:true},
          {Titre:"Repos", Description:"Faire un bon dodo", Etat:false},
        ],
        fields : ['Titre', 'Description', 'Etat']
      }
  },

  methods : {
        addTask : function(){
            alert("captured")
            this.items.push(task)
        }
    }

 
  /*setup(){
  var items = [
    {Titre:"Le TP3", Description:"Finir le TP3 aujourd'hui", Etat:true},
    {Titre:"Repos", Description:"Faire un bon dodo", Etat:false},
  ]

  const fields = [
    'Titre', 'Description', 'Etat'
  ]
  
  function addTask(task) {
    alert("captured")
    console.log("Pressed")
    this.items.push(task)
  }

  return {items,fields,addTask}
},*/

};


</script>

<style scoped>
  form{
    width:80%;
    margin:auto;
  }
  div#coche{
    text-align: left;
  }
  label{
    display: inline-block;
    margin-left: 2%;
  }


  
</style>