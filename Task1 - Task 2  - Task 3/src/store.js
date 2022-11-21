import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    organisations: [
      {
        id: 0,
        naam: "Thar 1",
        vestigingsplaats: "Breda",
        kvk: "1234567890",
        soob: "1234567890",
        btwNummer: "1234567890",
      },
      {
        id: 1,
        naam: "Thar 2",
        vestigingsplaats: "Breda",
        kvk: "1234567890",
        soob: "1234567890",
        btwNummer: "1234567890",
      },
      {
        id: 2,
        naam: "Thar 3",
        vestigingsplaats: "Breda",
        kvk: "1234567890",
        soob: "1234567890",
        btwNummer: "1234567890",
      },
    ],
  }),
  getters: {
    getOrganisations() {
      return this.organisations;
    },
  },
  actions: {
    createOrganisation(organisation) {
      organisation.id = Date.now();
      this.organisations.push(organisation);
    },
    updateOrganisation(organisation) {
      const filteredOrganisationIndex = this.getOrganisations.findIndex(
        (org) => org.id === organisation.id
      );
      if (filteredOrganisationIndex !== -1) {
        this.organisations.splice(filteredOrganisationIndex, 1, organisation);
      }
    },
    deleteOrganisation(organisationId) {
      const filteredOrganisationIndex = this.getOrganisations.findIndex(
        (org) => org.id === organisationId
      );
      if (filteredOrganisationIndex !== -1) {
        this.organisations.splice(filteredOrganisationIndex, 1);
      }
    },
  },
});
