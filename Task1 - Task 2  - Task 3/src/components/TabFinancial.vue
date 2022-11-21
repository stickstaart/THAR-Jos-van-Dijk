<template>
  <div class="financial-tab">
    <div class="form-top">
      <h3>Financiele Organisaties</h3>
      <button class="add-org-btn" @click="createOrganisation()">
        Organisatie toevoegen
      </button>
    </div>

    <form
      v-if="modus === 'create' || modus === 'update'"
      @submit.prevent="opslaan()"
    >
      <div>
        <label for="naam">Naam</label>
        <input type="text" id="naam" v-model="organisationToSave.naam" />
      </div>
      <div>
        <label for="vestigingsplaats">Vestigingsplaats</label>
        <input
          type="text"
          id="vestigingsplaats"
          v-model="organisationToSave.vestigingsplaats"
        />
      </div>

      <div>
        <label for="kvk">KVK</label>
        <input type="text" id="kvk" v-model="organisationToSave.kvk" />
      </div>

      <div>
        <label for="soob">SOOB</label>
        <input type="text" id="soob" v-model="organisationToSave.soob" />
      </div>

      <div>
        <label for="btwNummer">BTW Nummer</label>
        <input
          type="text"
          id="btwNummer"
          v-model="organisationToSave.btwNummer"
        />
      </div>

      <button class="save-btn">Opslaan</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>Naam</th>
          <th>Vestigingsplaats</th>
          <th>KVK</th>
          <th>SOOB</th>
          <th>BTW nummer</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="organisation in store.getOrganisations"
          @click="updateOrganisation(organisation)"
        >
          <td width="170">{{ organisation.naam }}</td>
          <td width="170">{{ organisation.vestigingsplaats }}</td>
          <td width="170">{{ organisation.kvk }}</td>
          <td width="170">{{ organisation.soob }}</td>
          <td width="170">{{ organisation.btwNummer }}</td>
          <td>
            <button
              class="remove-btn"
              @click.stop="store.deleteOrganisation(organisation.id)"
            >
              <svg
                fill="red"
                width="10px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
                />
              </svg>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "../store";

const store = useStore();
const modus = ref("normal");

const emptyOrganisation = {
  naam: "",
  vestigingsplaats: "",
  kvk: "",
  soob: "",
  btwNummer: "",
};

let organisationToSave = ref({
  naam: "",
  vestigingsplaats: "",
  kvk: "",
  soob: "",
  btwNummer: "",
});

function updateOrganisation(organisation) {
  modus.value = "update";
  organisationToSave.value = { ...organisation };
}

function createOrganisation() {
  modus.value = "create";
  organisationToSave.value = { ...emptyOrganisation };
}

function opslaan() {
  if (modus.value === "create") {
    store.createOrganisation(organisationToSave.value);
    organisationToSave.value = { ...emptyOrganisation };
    modus.value = "normal";
  } else if (modus.value === "update") {
    store.updateOrganisation(organisationToSave.value);
    organisationToSave.value = { ...emptyOrganisation };
    modus.value = "normal";
  }
}
</script>

<style lang="scss">
.financial-tab {
  display: block;
}
table {
  width: 100%;
  thead {
    th {
      text-align: left;
    }
  }
  tbody {
    tr {
      &:hover {
        background-color: lightgray;
      }
      &.no-data {
        text-align: center;
      }
    }
  }
}
</style>
