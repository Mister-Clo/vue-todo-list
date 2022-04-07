<template>
  <h2 class="mt-5 fw-bolder">Tous les Étudiants</h2><hr>
  <div class="container">
    <table id="tableAB" class="table table-bordered table-striped table-hover">
    <thead>
      <tr><!--un for loop sur les champs des entêtes-->
        <th v-for="field in fields" :key='field'>
          {{field}}
        </th>
      </tr>
    </thead>
    <tbody>
      <!--un for loop sur chaque item-->
      <tr v-for="student in studentsAB" :key="student">
        <td v-for="field in fields" :key="field">
          <span>{{student[field]}}</span>
          </td>      
      </tr>
    </tbody>
  
  </table>
  </div>
 <h5 class="fw-bold">Moyenne Totale: <span class="done">{{moyenneTotale}}</span></h5>

</template>

<script setup>
//import studentsA from './GroupA.vue'
//import studentsB from './GroupB.vue'
import {reactive,ref, computed} from 'vue'
//import { moyenne } from '@/composables/moyenne.js'


/*var studentsAB= reactive(computed(()=>{
  return [].concat(studentsA,studentsB)
}))*/

var studentsAB = reactive(
    [
          {nom:"Roro", prenom:"Zoro", note:ref(19)},
          {nom:"Vinsmoke", prenom:"Sanji", note:ref(18)},
          {nom:"Lala", prenom:"Nono", note:ref(14)},
          {nom:"Lili", prenom:"Bobo", note:ref(17)},
    ]
)

const fields = ref(['nom', 'prenom', 'note'])
const moyenneTotale = computed(()=>{
  let notes = 0
    studentsAB.forEach(s => {
        notes+= s.note
    });
    return notes/studentsAB.length
})
</script>
