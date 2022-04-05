<template>
    <div>
        <form name="myform" action="#" class="box" id="new-command">
      <fieldset>
        <legend>Ajoutez une tâche</legend>
        <input type="text" class="form-control" v-model="titre" placeholder="Titre" required/><br>
        <textarea rows="2" class="form-control" cols="40" v-model="contenu" placeholder="Donnez les détails de l'activité ici" required/><br>
        <div id="coche">
            <label for="isCompleted">Tâche déjà réalisé ? </label><input type="checkbox" class="form-check-input ms-1" v-model="isCompleted" id="isCompleted">
        </div>
        <button type="button" @click.prevent="check()" class="btn btn-dark" id="ajout" >Ajouter</button>
        
      </fieldset>
    </form>
    </div>
</template>

<script>
export default {
    name: 'CreateValue',
    data : function(){
        return{
            //les valeurs par défaut de mes v-model
            titre:"",
            contenu:"",
            isCompleted:false
        }
    },
    methods : {
        check : function(){
           const task = {
                Titre: this.titre,
                Description: this.contenu,
                Etat: this.isCompleted
                }
           
           this.$emit('addTask',task)

           this.titre = ""
           this.contenu = ""
           this.isCompleted = false
        }
    }
}
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