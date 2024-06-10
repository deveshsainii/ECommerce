function sS(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
  };
}

import { Qm } from './constants';  // Import Qm here

function anotherFunction() {
  const status = Qm.pending;  // Ensure Qm is properly initialized
  const state = sS(status);   // Example usage of Qm
  console.log(state);
}
