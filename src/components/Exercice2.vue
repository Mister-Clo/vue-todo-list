<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1 class="fw-bold">This is Exercice 2</h1>

      <router-link to="/group_a">
      <button type="button"  class="btn btn-primary m-2" id="ajout" >Groupe A</button>
      </router-link>
      <router-link to="/group_b">
      <button type="button" class="btn btn-info m-2" id="ajout">Groupe B</button>
      </router-link>
      <router-link to="/group_ab">
      <button type="button" class="btn btn-warning m-2" id="ajout" >Groupe AB</button>
      </router-link>


  </div>
</template>

<script>

export default {
  name: 'Exercice-2',
}
</script>
