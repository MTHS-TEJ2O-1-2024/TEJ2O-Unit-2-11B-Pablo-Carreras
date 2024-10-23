/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Pablo Carreras
 * Created on: OCT 2024
 * This program generates random numbers and compares 
*/

let randomNumber1: number 
let randomNumber2: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

//random number generator 
randomNumber1 = randint(0, 99)
randomNumber2 = randint(0, 99)

//#1 number 
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString('# 1 :' + randomNumber1)
    basic.showIcon(IconNames.Happy)
})

//#2 number 
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString('# 2 :' + randomNumber2)
    basic.showIcon(IconNames.Happy)
})

//shake 
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    if (randomNumber1 > randomNumber2){
        basic.showString(randomNumber1 + '>' + randomNumber2)
    }
    else{
        randomNumber1 < randomNumber2
        basic.showString(randomNumber1 + '<' + randomNumber2)
    }
    basic.showIcon(IconNames.Happy)
})
