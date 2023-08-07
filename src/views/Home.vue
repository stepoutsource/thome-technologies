<template>
  <div class="home">

    <app-hero />

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

    </main>

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
import AppHero from "@/components/AppHero";

export default {
  name: 'HomeView',
  components: {
    AppHero,
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