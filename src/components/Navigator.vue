<template lang="html">
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">
        Light bubble
      </b-navbar-brand>
      <b-collapse 
        class="radius-12"
        is-nav 
        id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/bubbles">
            Explora
          </b-nav-item>
          <b-nav-item to="/new">
            Publica tu causa
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              class="mr-sm-2"
              type="text"
              placeholder="¿Qué deseas encontrar?"/>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <b-img
                :src="'https://www.w3schools.com/howto/img_avatar.png'"
                rounded="circle"
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
    <div 
      @click="closeNavbar" 
      id="wrapper"></div>
  </div>
</template>

<script>
export default {
  methods: {
    closeNavbar () {
      console.log('closing navbar');
    }
  }
}
</script>

<style>

@media screen and (max-width: 767px) {
  div#nav_collapse {
      position: fixed;
      z-index: 9999;
      background: #333;
      padding: 15px;
      right: 12px;
      left: 12px;
      bottom: 12px;
  }

  div#nav_collapse .navbar-nav {
    /* border: solid 1px red; */
  }

  div#nav_collapse .navbar-nav .nav-item {
    /* border: solid 3px blue; */
    text-align: center;
  }

  div#nav_collapse .navbar-nav .nav-item .dropdown-menu {
    background-color: initial;
    border: solid 1px red;
    padding: 0 6px;
    border: none;
  }

  div#nav_collapse .navbar-nav .nav-item .dropdown-menu .dropdown-item {
    color: #fff;
    background-color: #666;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    margin-bottom: 12px;
    font-size: 12px;
    padding: 9px;

  }

  div#nav_collapse .navbar-nav .nav-item .dropdown-menu .dropdown-item:last-child {
    margin: 0 !important;
  }

  div#nav_collapse .navbar-nav .nav-item .dropdown-menu .dropdown-item:hover {
    background-color: #fff;
    color: #333;
  }

  div#nav_collapse .navbar-nav .nav-item .nav-link:not(.dropdown-menu) {
    /* border: solid 1px orange; */
    margin: 3px;
    -webkit-border-radius: 12px;
    -moz-border-radius: 12px;
    border-radius: 12px;
  }
/* 
  div#nav_collapse .navbar-nav .nav-item .nav-link.dropdown-toggle {
    border: solid 3px pink;
  } */

  div#nav_collapse .navbar-nav .nav-item .nav-link.dropdown-toggle::after {
    display: none;
  }

  div#nav_collapse .navbar-nav .nav-item .dropdown-menu {
    text-align: center;
  }

  div#nav_collapse .navbar-nav input[type="text"] {
    border: solid 3px #333;
    margin: 3px;
    width: 100%;
    text-align: center;
  }

  div#wrapper {
    display: none;
    border: solid 3px orange;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
  }
}
</style>
