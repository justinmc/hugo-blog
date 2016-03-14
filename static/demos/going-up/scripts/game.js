var Game = (function() {
"use strict";

    return (function() {

        var tileSize = 16;
        if (window.innerWidth > 24 * 32) {
            tileSize = 32;
        }

        Game.map_grid = {
            width: 24,
            height: 16,
            tile: {
                width: tileSize,
                height: tileSize
            }
        };

        // Constructor
        function Game() {
        }
        
        // The total width of the game screen. Since our grid takes up the entire screen
        // this is just the width of a tile times the width of the grid
        Game.width = function() {
            return this.map_grid.width * this.map_grid.tile.width;
        };
        
        // The total height of the game screen. Since our grid takes up the entire screen
        // this is just the height of a tile times the height of the grid
        Game.height = function() {
            return this.map_grid.height * this.map_grid.tile.height;
        };
        
        // Initialize and start our game
        Game.prototype.start = function() {
            // Start crafty and set a background color so that we can see it"s working
            Crafty.init(Game.width(), Game.height());
            
            // Set up the viewport
            /*var viewportW = Game.map_grid.width * Game.map_grid.tile.width;
            var viewportH = Game.map_grid.height * Game.map_grid.tile.height;
            if (window.innerWidth < viewportW) {
                viewPortW = window.innerWidth;
            }
            if (window.innerHeight < viewportH) {
                viewPortH = window.innerHeight;
            }
            Crafty.viewport.init(viewportW, viewportH);*/
             
            // Simply start the "Game" scene to get things going
            Crafty.scene("Loading");
        };

        return Game;
    })();
})();
