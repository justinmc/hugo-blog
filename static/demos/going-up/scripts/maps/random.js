/*global define */
define(['game'], function (Game) {
  'use strict';

  // Generate the empty map array
  var map = new Array(Game.height);

  // Place a tree at every edge square on our grid of 16x16 tiles
  for (var x = 0; x < Game.map_grid.width; x++) {
    map[x] = new Array(Game.width);
    for (var y = 0; y < Game.map_grid.height; y++) {
      var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;

      if (at_edge) {
        // Place a tree entity at the current tile
        map[y][x] = "Tree";
      } else if (Math.random() < 0.06) {
        // Place a bush entity at the current tile
        map[y][x] = "Bush";
      }
      else {
        // Place grass!
        map[y][x] = "Grass";
      }
    }
  }

  return map;

});

