<template>
  <div id="app" class="d-flex flex-column min-vh-100">

    <app-header />
    <router-view />
    <app-footer />

  </div>
</template>

<script>

import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
export default {
  components: {AppFooter, AppHeader},
  data() {
    return {

    }
  },

  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss">

body {
  overflow-x: hidden;

  &.modal-open {
    overflow: hidden;
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

.btn,
button,
[type="button"],
[type="submit"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  opacity: 1;
}

textarea {
  padding: 1rem;
  border-radius: 33px;
  background: $atmosphere;
  border: none;

  &::placeholder {
    color: $gray2;
  }
}

.sr-only {
  border: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
}

.sr-only-focusable:focus,
.sr-only-focusable:active {
  clip: auto !important;
  -webkit-clip-path: none !important;
  clip-path: none !important;
  height: auto !important;
  margin: auto !important;
  overflow: visible !important;
  width: auto !important;
  white-space: normal !important;
}

.font-cursive {
  font-family: $font-family-cursive;
}



/*--------------------------------------------------------------
# General
--------------------------------------------------------------*/
body {
  font-family: "Open Sans", sans-serif;
  color: #444444;
}

a {
  color: $color-primary;
  text-decoration: none;
}

a:hover {
  color: $color-primary-lighter;
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Raleway", sans-serif;
}

/*--------------------------------------------------------------
# Preloader
--------------------------------------------------------------*/
#preloader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow: hidden;
  background: #fff;
}

#preloader:before {
  content: "";
  position: fixed;
  top: calc(50% - 30px);
  left: calc(50% - 30px);
  border: 6px solid $color-primary;
  border-top-color: #fff;
  border-bottom-color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: animate-preloader 1s linear infinite;
}

@keyframes animate-preloader {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Back to top button
--------------------------------------------------------------*/
.back-to-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: 15px;
  z-index: 996;
  background: $color-primary;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: all 0.4s;
}

.back-to-top i {
  font-size: 28px;
  color: #fff;
  line-height: 0;
}

.back-to-top:hover {
  background: $color-primary-lighter;
  color: #fff;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}



/* Get Startet Button */
.get-started-btn {
  margin-left: 25px;
  background: $color-primary;
  color: #fff;
  border-radius: 50px;
  padding: 8px 25px 9px 25px;
  white-space: nowrap;
  transition: 0.3s;
  font-size: 14px;
  display: inline-block;
}

.get-started-btn:hover {
  background: $color-primary-lighter;
  color: #fff;
}

@media (max-width: 992px) {
  .get-started-btn {
    margin: 0 15px 0 0;
    padding: 6px 18px;
  }
}


/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
#hero {
  top: -1px;
  width: 100%;
  height: 100vh;
  background: url("assets/img/hero-bg.jpg") top center;
  background-size: cover;
  position: relative;
}

#hero:before {
  content: "";
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}

#hero .container {
  padding-top: 72px;
  position: relative;
  text-align: center;
}

#hero h1 {
  margin: 0 0 10px 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  color: #fff;
}

#hero h2 {
  color: #eee;
  margin-bottom: 40px;
  font-size: 24px;
}

#hero .play-btn {
  width: 94px;
  height: 94px;
  margin: 0 auto;
  background: radial-gradient($color-primary 50%, $color-primary-lighter 52%);
  border-radius: 50%;
  display: block;
  overflow: hidden;
  position: relative;
}

#hero .play-btn::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 100;
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

#hero .play-btn::before {
  content: "";
  position: absolute;
  width: 120px;
  height: 120px;
  animation-delay: 0s;
  animation: pulsate-btn 3s;
  animation-direction: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: steps;
  opacity: 1;
  border-radius: 50%;
  border: 5px solid $color-primary-lighter;
  top: -15%;
  left: -15%;
  background: rgba(198, 16, 0, 0);
}

#hero .play-btn:hover::after {
  border-left: 15px solid $color-primary;
  transform: scale(20);
}

#hero .play-btn:hover::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-40%) translateY(-50%);
  width: 0;
  height: 0;
  border: none;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid #fff;
  z-index: 200;
  animation: none;
  border-radius: 0;
}

@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}

@media (max-width: 768px) {
  #hero h1 {
    font-size: 28px;
    line-height: 36px;
  }

  #hero h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
}

@keyframes pulsate-btn {
  0% {
    transform: scale(0.6, 0.6);
    opacity: 1;
  }

  100% {
    transform: scale(1, 1);
    opacity: 0;
  }
}

/*--------------------------------------------------------------
# Sections General
--------------------------------------------------------------*/
section {
  padding: 80px 0;
  overflow: hidden;
}

.section-bg {
  background-color: #8fffd6;
}

.section-title {
  padding-bottom: 30px;
}

.section-title h2 {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}

.section-title h2::after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: $color-primary;
  bottom: 0;
  left: 0;
}

.section-title p {
  margin-bottom: 0;
  color: #777777;
  font-size: 15px;
}

/*--------------------------------------------------------------
# About Us
--------------------------------------------------------------*/
.about .content h3 {
  font-weight: 600;
  font-size: 26px;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  padding-left: 28px;
  position: relative;
}

.about .content ul li+li {
  margin-top: 10px;
}

.about .content ul i {
  position: absolute;
  left: 0;
  top: 2px;
  font-size: 20px;
  color: $color-primary;
  line-height: 1;
}

.about .content p:last-child {
  margin-bottom: 0;
}

.about .content .btn-learn-more {
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 32px;
  border-radius: 50px;
  transition: 0.3s;
  line-height: 1;
  color: $color-primary;
  animation-delay: 0.8s;
  margin-top: 6px;
  border: 2px solid $color-primary;
}

.about .content .btn-learn-more:hover {
  background: $color-primary;
  color: #fff;
  text-decoration: none;
}



/*--------------------------------------------------------------
# Cta
--------------------------------------------------------------*/
.cta {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("assets/img/cta-bg.jpg") fixed center center;
  background-size: cover;
  padding: 120px 0;
}

.cta h3 {
  color: #fff;
  font-size: 28px;
  font-weight: 700;
}

.cta p {
  color: #fff;
}

.cta .cta-btn {
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 30px;
  border-radius: 2px;
  transition: 0.5s;
  margin: 10px;
  background: $color-primary;
  color: #fff;
  border-radius: 50px;
}

.cta .cta-btn:hover {
  background: $color-primary-lighter;
}

@media (max-width: 1024px) {
  .cta {
    background-attachment: scroll;
  }
}

@media (min-width: 769px) {
  .cta .cta-btn-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

/*--------------------------------------------------------------
# Features
--------------------------------------------------------------*/
.features .icon-box h4 {
  font-size: 20px;
  font-weight: 700;
  margin: 5px 0 10px 60px;
}

.features .icon-box i {
  font-size: 48px;
  float: left;
  color: $color-primary;
}

.features .icon-box p {
  font-size: 15px;
  color: #848484;
  margin-left: 60px;
}

.features .image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 400px;
}

/*--------------------------------------------------------------
# Clients
--------------------------------------------------------------*/
.clients {
  padding-top: 30px;
}

.clients .clients-wrap {
  border-top: 1px solid #e7e7e7;
  border-left: 1px solid #e7e7e7;
}

.clients .client-logo {
  padding: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  overflow: hidden;
  background: #fff;
  height: 140px;
}

.clients .client-logo:hover img {
  transform: scale(1.1);
}

.clients img {
  transition: all 0.4s ease-in-out;
}

/*--------------------------------------------------------------
# Counts
--------------------------------------------------------------*/
.counts {
  background: url("assets/img/counts-bg.jpg") center center no-repeat;
  background-size: cover;
  padding: 80px 0 60px 0;
  position: relative;
}

.counts::before {
  content: "";
  position: absolute;
  background: rgba(17, 17, 17, 0.9);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.counts .title {
  position: relative;
  color: #fff;
  margin-bottom: 40px;
}

.counts .title h3 {
  font-size: 36px;
  font-weight: 700;
}

.counts .counters span {
  font-size: 48px;
  display: block;
  font-weight: 700;
  color: $color-primary;
}

.counts .counters p {
  padding: 0;
  margin: 0 0 20px 0;
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  color: #fff;
}

@media (min-width: 1200px) {
  .counts {
    background-attachment: fixed;
  }
}


/*--------------------------------------------------------------
# Pricing
--------------------------------------------------------------*/
.pricing {
  background-color: #f9f9f9;
}

.pricing .box {
  padding: 40px 20px;
  text-align: center;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  background: #fefefe;
  box-shadow: 0px 5px 90px 0px rgba(110, 123, 131, 0.1);
}

.pricing .box h3 {
  font-weight: 400;
  padding: 15px;
  margin-top: 15px;
  font-size: 18px;
  font-weight: 600;
  color: #282828;
}

.pricing .box h4 {
  font-size: 42px;
  color: $color-primary;
  font-weight: 500;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 20px;
}

.pricing .box h4 sup {
  font-size: 20px;
  top: -15px;
  left: -3px;
}

.pricing .box h4 span {
  color: #bababa;
  font-size: 16px;
  font-weight: 300;
}

.pricing .box ul {
  padding: 20px 0;
  list-style: none;
  color: #282828;
  text-align: center;
  line-height: 20px;
  font-size: 14px;
}

.pricing .box ul li {
  padding-bottom: 16px;
}

.pricing .box ul i {
  color: $color-primary;
  font-size: 18px;
  padding-right: 4px;
}

.pricing .box ul .na {
  color: #ccc;
  text-decoration: line-through;
}

.pricing .box .btn-wrap {
  padding: 15px;
  text-align: center;
}

.pricing .box .btn-buy {
  display: inline-block;
  padding: 10px 40px 12px 40px;
  border-radius: 50px;
  border: 2px solid $color-primary;
  color: $color-primary;
  font-size: 14px;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  transition: 0.3s;
}

.pricing .box .btn-buy:hover {
  background: $color-primary;
  color: #fff;
}

.pricing .recommended {
  border-color: $color-primary;
}

.pricing .recommended .btn-buy {
  background: $color-primary;
  color: #fff;
}

.pricing .recommended .btn-buy:hover {
  background: $color-primary-lighter;
  border-color: $color-primary-lighter;
}

.pricing .recommended-badge {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  font-size: 13px;
  padding: 3px 25px 6px 25px;
  background: #edfbf0;
  color: $color-primary;
  border-radius: 50px;
}

/*--------------------------------------------------------------
# Faq
--------------------------------------------------------------*/
.faq {
  padding: 0;
}

.faq .content {
  padding: 60px 100px 0 100px;
}

.faq .content h3 {
  font-weight: 400;
  font-size: 34px;
}

.faq .content h4 {
  font-size: 20px;
  font-weight: 700;
  margin-top: 5px;
}

.faq .content p {
  font-size: 15px;
  color: #848484;
}

.faq .img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 400px;
}

.faq .accordion-list {
  padding: 0 100px 60px 100px;
}

.faq .accordion-list ul {
  padding: 0;
  list-style: none;
}

.faq .accordion-list li+li {
  margin-top: 15px;
}

.faq .accordion-list li {
  padding: 20px;
  background: #fefefe;
  box-shadow: 0px 5px 90px 0px rgba(110, 123, 131, 0.1);
  border-radius: 4px;
}

.faq .accordion-list a {
  display: block;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  padding-right: 30px;
  outline: none;
  cursor: pointer;
}

.faq .accordion-list i {
  font-size: 24px;
  position: absolute;
  right: 0;
  top: 0;
}

.faq .accordion-list p {
  margin-bottom: 0;
  padding: 10px 0 0 0;
}

.faq .accordion-list .icon-show {
  display: none;
}

.faq .accordion-list a.collapsed {
  color: #343a40;
}

.faq .accordion-list a.collapsed:hover {
  color: $color-primary;
}

.faq .accordion-list a.collapsed .icon-show {
  display: inline-block;
}

.faq .accordion-list a.collapsed .icon-close {
  display: none;
}

@media (max-width: 1024px) {

  .faq .content,
  .faq .accordion-list {
    padding-left: 0;
    padding-right: 0;
  }
}

@media (max-width: 992px) {
  .faq {
    /* img {
      padding-top: 30px;
    } */
  }

  .faq .content {
    padding-top: 30px;
  }

  .faq .accordion-list {
    padding-bottom: 30px;
  }
}

/*--------------------------------------------------------------
# Contact
--------------------------------------------------------------*/
.contact .info {
  width: 100%;
  background: #fff;
}

.contact .info i {
  font-size: 32px;
  color: $color-primary;
  float: left;
  line-height: 1;
}

.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #282828;
}

.contact .info p {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: #5b5b5b;
}

.contact .info .email,
.contact .info .phone {
  margin-top: 40px;
}

.contact .php-email-form {
  width: 100%;
  background: #fff;
}

.contact .php-email-form .form-group {
  padding-bottom: 8px;
}

.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .sent-message br+br {
  margin-top: 25px;
}

.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}

.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
  border-radius: 4px;
}

.contact .php-email-form input:focus,
.contact .php-email-form textarea:focus {
  border-color: $color-primary;
}

.contact .php-email-form input {
  height: 44px;
}

.contact .php-email-form textarea {
  padding: 10px 12px;
}

.contact .php-email-form button[type=submit] {
  background: $color-primary;
  border: 0;
  padding: 10px 30px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
}

.contact .php-email-form button[type=submit]:hover {
  background: $color-primary-lighter;
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Breadcrumbs
--------------------------------------------------------------*/
.breadcrumbs {
  padding: 15px 0;
  background: #f9f9f9;
  min-height: 40px;
  margin-top: 72px;
}

@media (max-width: 992px) {
  .breadcrumbs {
    margin-top: 63px;
  }
}

.breadcrumbs h2 {
  font-size: 26px;
  font-weight: 500;
}

.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0 0 10px 0;
  margin: 0;
  font-size: 14px;
}

.breadcrumbs ol li+li {
  padding-left: 10px;
}

.breadcrumbs ol li+li::before {
  display: inline-block;
  padding-right: 10px;
  color: #424242;
  content: "/";
}

/*--------------------------------------------------------------
# Footer
--------------------------------------------------------------*/
#footer {
  background: #0f0f0f;
  color: #fff;
  font-size: 14px;
  text-align: center;
  padding: 30px 0;
}

#footer h3 {
  font-size: 36px;
  font-weight: 700;
  color: #fff;
  position: relative;
  font-family: "Poppins", sans-serif;
  padding: 0;
  margin: 0 0 15px 0;
}

#footer p {
  font-size: 15px;
  font-style: italic;
  padding: 0;
  margin: 0 0 40px 0;
}

#footer .social-links {
  margin: 0 0 40px 0;
}

#footer .social-links a {
  font-size: 18px;
  display: inline-block;
  background: $color-primary;
  color: #fff;
  line-height: 1;
  padding: 8px 0;
  margin-right: 4px;
  border-radius: 50%;
  text-align: center;
  width: 36px;
  height: 36px;
  transition: 0.3s;
}

#footer .social-links a:hover {
  background: $color-primary-lighter;
  color: #fff;
  text-decoration: none;
}

#footer .copyright {
  margin: 0 0 5px 0;
}

#footer .credits {
  font-size: 13px;
}

#footer .credits a {
  color: $color-primary-lighter;
  transition: 0.3s;
}

#footer .credits a:hover {
  color: $color-primary;
}
</style>
