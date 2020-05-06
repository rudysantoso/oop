"use strict"
/*
  BUATLAH SEBUAH PROGRAM DENGAN KETENTUAN BERIKUT INI
  - level 0
    buat lah sebuah class yang bernama animal yang mempunyai properti nama, tempat hidup, jumlah kaki, jenis makanan
  - level 1
    buatlah sebuah class yang bernama anjing, burung, buaya, dan paus yang mempunyai properti yang sama dengan class Animal
  -level 2
    buatlah sebuah class SuperPower yang mempunyai method invisible, laser , 
    method ini berfungsi mengeluarkan sebuah power dalam bentuk string 
    example: 
      invisible: 'bisa menghilang CLING'
      laser: 'bisa membuat api di mata SLASSS'
*/
class Animal{
  constructor(nama,tempat_hidup,jumlah_kaki,jenis_makanan){
    this.name = nama,
    this.place = tempat_hidup,
    this.numberOfLegs = jumlah_kaki,
    this.food = jenis_makanan 
  }
}
let animal1 = new Animal('anjing','darat',4,'tulang')
let animal2 = new Animal('burung','udara',2,'biji-bijian')
let animal3 = new Animal('buaya','rawa-rawa',4,'daging')
let animal4 = new Animal('paus','laut',2,'ikan kecil')

console.log(animal1)
console.log(animal2)
console.log(animal3)
console.log(animal4)

class SuperPower{
  static invisible(power){
    return 'bisa menghilang ' + power
  }
  static laser(power){
    return 'bisa membuat api di mata ' + power
  }
}

let menghilang = SuperPower.invisible('CLING')
let kekuatan = SuperPower.laser('SLASSS')

console.log(menghilang)
console.log(kekuatan)
