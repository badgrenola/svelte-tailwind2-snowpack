import { writable } from 'svelte/store'

const storeDefaults = {
  count: 0
}

const createAppStore = () => {
  const { subscribe, update, set } = writable(storeDefaults);

  //Here we can define custom functions for manipulating store values
  //These functions use the update function provided by the store.

  const increaseCount = () => {
    update(state => {

      //Manipulate the state
      state.count += 1

      //Make sure to always return the updated state here!
      return state
    })
  }

  const decreaseCount = () => {
    update(state => {

      //Manipulate the state
      state.count -= 1

      //Make sure to always return the updated state here!
      return state
    })
  }

  const resetCount = () => {
    update(state => {
      //Manipulate the state
      state.count -= storeDefaults.count

      //Make sure to always return the updated state here!
      return state
    })
  }

  //At a minimum, We need to return the subscribe function provided by the store.
  //This allows any Svelte UI elements referencing the store to auto-update when values change.

  //BUT! We can also export our own custom functions that either update the store
  //or trigger other functionality through the app.

	return {
    subscribe,
    increaseCount,
    decreaseCount,
    resetCount
	};
}

//Create an instance of the store and export for use in the app
const AppStore = createAppStore();
export { AppStore }