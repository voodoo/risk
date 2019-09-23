import { writable } from 'svelte/store';

export const state = writable(
  {
   waist: null, height: null, weight: null,
   hdl: null, ldl: null, chol: null, tg: null,
   temp: null, tsh: null, t4: null, t3: null,
   name: null, age: null, ideal_weight: null, diet: null
  }
  
);
