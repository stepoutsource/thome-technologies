<template>
  <button :class="{ 'animated-button': animated }">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  data() {
    return {
      isAnimating: false,
    };
  },
  props: {
    animated: {
      type: Boolean,
      default: false
    }
  },
};
</script>

<style>
/* Button styles */
.animated-button {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #3498db;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

/* Animation shake keyframes */
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px) rotateZ(-5deg); }
  50% { transform: translateX(5px) rotateZ(5deg); }
  75% { transform: translateX(-3px) rotateZ(-3deg); }
  100% { transform: translateX(3px) rotateZ(3deg); }
}

/* Hover animation */
.animated-button:hover {
  animation: shake 0.3s infinite;
}

</style>
