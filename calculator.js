'use strict'
/*
  buat lah sebuah program calculator untuk menghitung sebuah perhitungan
  gunakan konsep OOP untuk pengerjaanya 
  buat coding sesuai dengan method method yang telah disediakan 
  gunakan chaining method untuk case jika lebih dari 1 perhitungan
  gunakan konsep yang diawah ini:
  * - Classes
  * - Default Parameters
  * - Method Chaining
*/


class Calculator {
  //write your code here
  constructor (sembarang){
   this.jumlah = sembarang
  }

  add (angka) {
    return this.jumlah += angka
    return this
  }

  subtract (angka) {
    return this.jumlah -= angka
    return this
  }

  multiply (angka) {
    return this.jumlah *= angka
    return this
  }

  divide (angka) {
    return this.jumlah /= angka
    return this
  }

  square (angka) {
    return Math.pow(angka,2)
  }
  
  squareRoot (angka) {
    return  Math.sqrt(angka)
  }

  phi (angka){
    return Math.PI(angka)
    
  }

  result(){
    return this.jumlah
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

const hitung = new Calculator(0)

console.log(hitung.add(3).divide(3).multiply(10).result()) //10
console.log(hitung.add(3).divide(3).phi().result()) //3.14
console.log(hitung.add(3).divide(3).squareRoot().result()) // 1 