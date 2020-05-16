<template>
  <div class="gray-container">
    <div class="wrapper">
      <EditPeopleAside/>
      <EditPeopleMain/>
    </div>
  </div>
</template>

<script>
import EditPeopleAside from '@/components/EditPeopleAside.vue'
import EditPeopleMain from '@/components/EditPeopleMain.vue'
export default {
  name: 'PeopleEdit',
  components: {
    EditPeopleAside,
    EditPeopleMain
  },
  computed: {
    idPeople () {
      return this.$store.state.peopleDetail.id
    }
  }
}
</script>

<style lang="scss" scoped>
.gray-container {
  margin-top: -20px;
  min-height: 100%;
  min-width: 100%;
  background-color: #F8F8F8;
  .wrapper {
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    flex-direction: row;
  }
}
</style>
