// Copyright (c) 2022 Allen Li All rights reserved
//
// Created by: Allen Li
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-01-HTML/sw.js", {
    scope: "/ICS2O-Unit5-01-HTML/",
  })
}

const randomNumber = Math.floor(Math.random() * 6) + 1

function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider

  if (valueFromSlider == randomNumber) {
    document.getElementById("answer").innerHTML =
      "the answer was, " + randomNumber + "!" + " You got it! Excellent."
  }

  if (valueFromSlider != randomNumber) {
    document.getElementById("answer").innerHTML =
      "Sorry the answer was, " + randomNumber + "!" + " please try again."
  }
}
