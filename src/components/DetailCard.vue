<template>
  <div>
    <b-card class="clickable-card" @click="showModal">
      <div class="image-wrapper">
        <div class="placeholder-img" :style="{backgroundImage: `url(${image})`}"></div>
<!--        <img :src="image" alt="Item Image" class="card-img-top">-->
      </div>
      <b-card-body>
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ description }}</p>
      </b-card-body>
    </b-card>

    <b-modal v-model="modalVisible" title="Item Details" @hide="hideModal">
      <div class="modal-body">
        <img :src="image" alt="Item Image" class="modal-image">
        <p>{{ detailedDescription }}</p>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'DetailCard',
  props: {
    title: String,
    description: String,
    detailedDescription: String,
    image: String,
  },
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    hideModal() {
      this.modalVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.placeholder-img {
  width: 100%;
  min-height: 300px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.clickable-card {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.clickable-card:hover {
  transform: scale(1.05);
}

.image-wrapper {
  position: relative;
  overflow: hidden;
}

.image-wrapper img {
  transition: transform 0.2s ease;
}

.modal-image {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
}
</style>
