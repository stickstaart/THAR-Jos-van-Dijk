<template>
    <div class="btn-wrapper" :class="{ open: panelOpen }" @click="panelOpen = !panelOpen">
      <div class="btn-arrow">{{ `${ panelOpen ? '>' : '<'}` }}</div>
      <div class="btn-text">Hulp & Feedback</div>
    </div>

    <div class="pop-up-wrapper" :class="{ open: panelOpen }">
      <div class="header">
        <h1 class="header-title">Ik help je graag verder</h1>
        <p class="text">
          Heb je vragen of wil je samen kijken naar hoe we het beste resultaat
          uit de opleiding kunnen halen? Ik denk graag met je mee!
        </p>
      </div>
      <div class="contact">
        <img
          src="../assets/portret_jannes(1).png"
          alt="Profile Picture"
          class="profile-picture"
        />
        <div class="contact-info">
          <h2 class="title">Jannes de Jong</h2>
          <p class="email">
            <img src="../assets/envelope.png" alt="envelope" class="envelope" />
            jannes@tharonline.nl
          </p>
          <p class="phone">
            <img
              src="../assets/customer-service-headset.png"
              alt="headset"
              class="headset"
            />
            +31(0) 859 028 907
          </p>
        </div>
      </div>
      <div class="feedback">
        <h1 class="feedback-title">Feedback is altijd welkom</h1>
        <p class="text">
          Wij zijn altijd in ontwikkeling en willen de gebruikers van ons
          platform de best mogelijke ervaring bieden. We horen daarom ook graag
          waar volgens jou ruimte voor verbetering is.
        </p>
        <a href="#">Feedback geven</a>
      </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const panelOpen = ref(false);
</script>

<style lang="scss">
    .btn-wrapper, .pop-up-wrapper {
        transition: ease-in-out .3s;
    }
    .btn-wrapper {
        &.open {
            transform: translateX(-325px) rotate(-90deg);
        }
    }
    .pop-up-wrapper {
        &.open {
            transform: translateX(-325px);
            opacity: 1;
        }
    }
</style>
