<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 class="fw-bold">EXERCICE 1 - TODO LIST</h1>
    <CreateTask @addTask="createTask"/>

    <div class="taches container text-center mt-5 mb-5">
    <h2 class="mt-5 fw-bolder">Vos Tâches</h2><hr>
        <h5 class="fw-bold">Tâches effectuées : <span class="done">{{completedTasks}}</span></h5><h6 class="fw-bold">Tâches non-effectuées : <span class="incomplete">{{incompleteTasks}}</span></h6>

      <TodoList :fields="fields" :items="items"/>
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

  data(){
      return{
        items: [
          {Titre:"Le TP3", Description:"Finir le TP3 aujourd'hui", Etat:true},
          {Titre:"Repos", Description:"Faire un bon dodo", Etat:false},
        ],
        fields : ['Titre', 'Description', 'Etat']
      }
  },

  methods: {
        createTask : function(task){
            this.items.push(task)
        }
  },

  computed: {
    completedTasks(){
      var numCompleted = 0
        this.items.forEach(element => {
          if (element['Etat']){
            numCompleted++
          }
        });
        return numCompleted
    },
    incompleteTasks(){
      var numIncomplete = 0
        this.items.forEach(element => {
          if (!element['Etat']){
            numIncomplete++
          }
        });
      return numIncomplete
    },
      
  },
    
    
  }

</script>

<style scoped>
 .done{
   color: goldenrod;
   text-shadow: gold 1px 1px 2px;
 }
 .incomplete{
   color: red;
   text-shadow: red 1px 1px 2px;
 }
</style>
