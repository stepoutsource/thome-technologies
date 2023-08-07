<template>
  <div class="home">

    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex flex-column justify-content-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8">
            <h1>Welcome</h1>
            <h2>We are team of designers, architects, and engineers that specialize in web application development.</h2>
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="glightbox play-btn mb-4"></a>
          </div>
        </div>
      </div>
    </section><!-- End Hero -->

    <main id="main">

      <section-about />
      <section-services />
      <section-cta />
      <section-features />
      <section-clients />
      <section-counts />
      <section-portfolio />
      <section-faq />
      <section-contact />


    </main><!-- End #main -->






  </div>
</template>

<script>
import SectionAbout from "@/views/sections/SectionAbout";
import SectionServices from "@/views/sections/SectionServices";
import SectionCta from "@/views/sections/SectionCta";
import SectionFeatures from "@/views/sections/SectionFeatures";
import SectionClients from "@/views/sections/SectionClients";
import SectionCounts from "@/views/sections/SectionCounts";
import SectionPortfolio from "@/views/sections/SectionPortfolio";
import SectionFaq from "@/views/sections/SectionFaq";
import SectionContact from "@/views/sections/SectionContact";
export default {
  name: 'HomeView',
  components: {
    SectionContact,
    SectionFaq,
    SectionPortfolio,
    SectionCounts,
    SectionClients,
    SectionFeatures,
    SectionCta,
    SectionServices,
    SectionAbout
  },
}
</script>

<style lang="scss" scoped>

</style>