<template>
  <div class="floating-btn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FloatingBtn'

}
</script>

<style lang="scss" scoped>
.floating-btn {
    line-height: 24px;
    width: auto;
    font-weight: 800;
    cursor: pointer;
    display: inline-block;
    text-indent: initial;
    position: fixed;
    right: 6%;
    bottom: 0px;
    height: auto;
    box-shadow: rgb(181, 187, 197) 0px 2px 6px 0px;
    color: rgb(3, 172, 14);
    font-size: 16px;
    z-index: 100;
    transform: translateY(-30px);
    opacity: 1;
    outline: none;
    background: radial-gradient(circle, transparent 1%, rgb(255, 255, 255) 1%) center center / 15000% rgb(255, 255, 255);
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    padding: 6px 20px;
    border-radius: 20px;
    transition: all 0.2s ease-in-out 0s;
}
</style>
