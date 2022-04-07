<template>
  <h2 class="mt-5 fw-bolder">Étudiants du Groupe A</h2>
  <div class="container">
        <form name="myform" action="#" class="box" id="new-command">
      <fieldset>
        <legend>Ajoutez un étudiant</legend>
        <input type="text" class="form-control" v-model="nom" placeholder="Nom" required/><br>
        <input type="text" class="form-control" v-model="prenom" placeholder="Prenom" required/><br>
        <input type="number" max="20" min="0" class="form-control" v-model="note" placeholder="Note" required/><br>
        <button type="button" @click.prevent="addStudent" class="btn btn-dark" id="ajout" >Ajouter</button>
        
      </fieldset>
    </form>
    </div>
  <hr>
  <div class="container">
      <table id="tableA" class="table table-bordered table-striped table-hover">
    <thead>
      <tr><!--un for loop sur les champs des entêtes-->
        <th v-for="field in fields" :key='field'>
          {{field}}
        </th>
      </tr>
    </thead>
    <tbody>
      <!--un for loop sur chaque item-->
      <tr v-for="student in studentsA" :key="student">
        <td v-for="field in fields" :key="field">
          <span>{{student[field]}}</span>
          </td>      
      </tr>
    </tbody>
  
  </table>
  </div>
    <h5 class="fw-bold">Moyenne des notes : <span class="done">{{moyenneA}}</span></h5><h6 class="fw-bold">Moyenne Totale : <span class="incomplete">{{moyTotale}}</span></h6>

</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { moyenne } from '@/composables/moyenne.js'
import { moyenneTotale } from './GroupAB.vue'

var studentsA = reactive(
    [
          {nom:"Mugiwara", prenom:"Luffy", note:ref(19)},
          {nom:"Boha", prenom:"Hankok", note:ref(18)},
    ]
)
var nom = ref("")
var prenom = ref("")
var note = ref(0)
const fields = ['nom', 'prenom', 'note']

const moyenneA = computed(()=>{return moyenne(studentsA)})
  
const moyTotale = ref(moyenneTotale) 

function addStudent(){
    const stud = {
        nom: nom,
        prenom : prenom,
        note : note
    }
    studentsA.push(stud)
    nom = ""
    prenom = ""
    note = 0
}

</script>

<style>
 thead{
     text-transform: capitalize;
 }
</style>