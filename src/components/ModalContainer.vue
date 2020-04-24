<template>
  <transition name="modal">
    <div class="parent-wrapper">
      <div class="modal-mask" @click="$emit('bg-clicked')"></div>
      <div class="modal-wrapper">
        <div class="modal-container" :style="{ width: widthModal || '530px' }">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalContainer',
  props: ['widthModal']
}
</script>

<style lang="scss" scoped>
.parent-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.625);
  display: table;
  transition: all 0.3s ease;
}

.modal-wrapper {
  position: fixed;
  display: table-cell;
  vertical-align: middle;
  z-index: 9999;
}

.modal-container {
  width: 530px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter .modal-container, .modal-mask
.modal-leave-active .modal-wrapper {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  opacity: 0;
}

</style>
