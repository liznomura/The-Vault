/*jshint esversion: 6 */
'use strict';
function VaultGenerator() {
  let myVault = {};
  return {
    setValue : setValue,
    getValue : getValue
  };

  function setValue ( key, value ) {
    myVault[key] = value;
  }

  function getValue ( key ) {
    if (key === undefined) {
      return null;
    } else if (myVault[key] === undefined) {
      return null;
    } else {
      return myVault[key];
    }
  }
}

module.exports = VaultGenerator;

var vault = VaultGenerator();
vault.setValue("cat", "meow");
vault.setValue("dog", "bark");
console.log(vault.getValue("cat"));