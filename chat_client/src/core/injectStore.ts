import { Store } from "@reduxjs/toolkit";

let store: Store
export const injectStore = (_store: Store) => {
  store = _store
}