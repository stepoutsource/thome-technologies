<template>
  <div class="hero-section">
    <video class="hero-video" autoplay muted loop>
      <source :src="videoSource" type="video/mp4">
      <!-- Add additional video sources for different formats (e.g., WebM, Ogg) if needed -->
    </video>
    <div class="content">
      <!-- Add content for the hero section, like headings, buttons, etc. -->
      <h1>Let's build something</h1>
      <p>We are team of designers, architects, and engineers that specialize in modern web application development.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoSource: 'img/video-web.mp4',
    };
  },
};
</script>

<style lang="scss" scoped>
/* Styles for the hero section container */
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh; /* Adjust the height as per your design requirements */
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(45 3 156 / 70%);
    mix-blend-mode: color-burn;
  }
}

/* Styles for the video element */
.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  mix-blend-mode: luminosity;


}

/* Styles for the content inside the hero section */
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}

/* Example styling for the heading and paragraph */
.content h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
}

.content p {
  font-size: 24px;
}
</style>
