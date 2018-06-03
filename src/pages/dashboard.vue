<template lang="html">
  <div class="dashboard">
    <h1>This is the user dashboard page</h1>
    <p>
      <div class="text-center my-3">
        <b-btn v-b-popover.hover="'I am popover content!'"
          title="Popover Title">Hover Me</b-btn>
      </div>
    </p>
    <p>
      <b-dropdown id="ddown1" text="Dropdown Button" class="m-md-2">
       <b-dropdown-item>First Action</b-dropdown-item>
       <b-dropdown-item>Second Action</b-dropdown-item>
       <b-dropdown-item>Third Action</b-dropdown-item>
       <b-dropdown-divider></b-dropdown-divider>
       <b-dropdown-item>Something else here...</b-dropdown-item>
       <b-dropdown-item disabled>Disabled action</b-dropdown-item>
     </b-dropdown>
    </p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
