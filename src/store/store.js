import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

const Comm = class {
  constructor() {
    let store = this._store();

    const getStore = computed(_=>store.value);
    const setStore = data => {
      store.value = data;
    }

    return {store, getStore, setStore}
  }
  _store() {
    throw 'Override~~';
  }
}

const Obj = class extends Comm {
  constructor() {
    super();
  }
  _store() {
    return ref({});
  }
}

const Arr = class extends Comm {
  constructor() {
    super();
  }
  _store() {
    return ref([]);
  }
}

export const userDataStore = defineStore('afterLogin', _=>new Obj);