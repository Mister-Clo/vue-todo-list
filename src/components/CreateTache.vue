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
            titre:"",
            contenu:"",
            isCompleted:false
        }
    },
    methods : {
        check : function(){
            this.$emit('addTask',{
                titre: this.titre,
                contenu: this.contenu,
                isCompleted: this.isCompleted
            })
            alert("Event emitted")
        }
    }
}
</script>