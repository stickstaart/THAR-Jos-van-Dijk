<template>
  <div class="wrapper">
    <div class="tabs-container">
      <Tab
        class="tab"
        :class="{ 't-hidden': activeTabTitle !== tab.title }"
        @click="setActive(tab.title)"
        v-for="tab in tabs"
      >
        {{ tab.title }}
      </Tab>
    </div>

    <div class="content c-1" v-if="activeTabTitle === 'Organisatiedetails'">
      Organisatiedetails Content
    </div>
    <div class="content c-2" v-if="activeTabTitle === 'Bevoegdheden'">
      Bevoegdheden Content
    </div>
    <TabFinancial
      class="content c-3"
      v-if="activeTabTitle === 'Financieel'"
    ></TabFinancial>
    <div class="content c-4" v-if="activeTabTitle === 'Automatisering'">
      Automatisering Content
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Tab from "./Tab.vue";
import TabFinancial from "./TabFinancial.vue";

const activeTabTitle = ref("Financieel");

const tabs = [
  {
    title: "Organisatiedetails",
  },
  {
    title: "Bevoegdheden",
  },
  {
    title: "Financieel",
  },
  {
    title: "Automatisering",
  },
];

function setActive(title) {
  activeTabTitle.value = title;
}
</script>
