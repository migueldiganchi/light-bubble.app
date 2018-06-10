<template lang="html">
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand to="/">
      Light bubble
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item to="/bubbles">
          Explora
        </b-nav-item>
        <b-nav-item to="/new">
          Publica tu burbuja
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input
            class="mr-sm-2"
            type="text"
            placeholder="¿Qué deseas encontrar?"/>
          <b-button
            class="my-2 my-sm-0"
            type="submit">Buscar</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <b-img
              rounded="circle"
              blank
              width="36"
              height="36"
              blank-color="#777"
              alt="img"
              class="m-0" />
          </template>
          <b-dropdown-item to="/profile">Perfil</b-dropdown-item>
          <b-dropdown-item to="/dashboard">Panel de control</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
}
</script>
