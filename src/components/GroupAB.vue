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

import {moyenneTotale,studentsAB, fields} from '@/composables/moyenne.js'



</script>
