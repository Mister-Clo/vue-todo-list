<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>EXERCICE 1 - TODO LIST</h2>
    <form name="myform" action="#" class="box" id="new-command">
      <fieldset>
        <legend>Ajoutez une tâche</legend>
        <input type="text" name="titre" placeholder="Titre" required /><br>
        <textarea rows="2" cols="40" name="contenu" placeholder="Donnez les détails de l'activité ici" required /><br>
        <label for="completed">Tâche déjà réalisé ? :</label><input type="checkbox" name="completed" id="check"><br>
              
        <p>
          <button id="ajout" type="submit" class="btn">Ajouter</button>
        </p>
      </fieldset>
    </form>

    <h3>Vos Tâches</h3><hr>
     <TodoList title="Le TP1" content="Finir le TP aujourd'hui" isCompleted/>

  

    
  </div>
</template>

<script>

import TodoList from '@/components/TodoList.vue'

export default {
  name: 'Exercice-1',
  components : {
    TodoList
  }
}
</script>

<style scoped>
  form{
    width:80%;
    margin:auto;
  }
  label{
    display: inline-block;
    margin-left: 2%;
  }
  input{
    display: inline-block;
    margin: 2%;
  }
</style>