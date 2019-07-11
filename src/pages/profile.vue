<template lang="html">
  <div class="profile p-5">
    <div class="content text-center">
     <b-img rounded="circle"
      :src="'https://www.w3schools.com/howto/img_avatar.png'"
      width="75"
      height="75"
      blank-color="#777"
      alt="img"
      class="m-1" />
      <h3 class="user-name">
        {{ user.fullname }}
      </h3>
      <p class="m-3">
        {{ user.description }}
      </p>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        picture_url: '',
        fullname: 'Nombre usuario',
        description: 'Filantropo ocacional'
      }
    }
  }
}
</script>

<style scoped>
  .user-name {
    margin-top: 21px !important;
  }
</style>
