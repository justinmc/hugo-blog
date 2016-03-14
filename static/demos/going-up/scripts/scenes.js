    "use strict";

    Crafty.scene("Intro0", function() {
        this.mask = Crafty.e("Mask");

        Crafty.bind("KeyUp", function(e) {
            Crafty.scene("GameF1");
        });

        // Create the floor
        var me = this;
        for (var y = 0; y < Game.map_grid.height; y++) {
            for (var x = 0; x < Game.map_grid.width; x++) {
                Crafty.e(mapIntro0[y][x]).at(x, y)
            }
        }

        // Setup the player (not controlled)
        this.player = Crafty.e("PlayerCharacter").at(23, 15);
        this.player.tween({x: -1 * Game.map_grid.tile.width}, 500);

        // Set up the callbacks for ending the scene
        var me = this;
        this.player.bind("TweenEnd", function() {
            me.mask.fadeOut(160);
        });
        this.mask.bind("TweenEnd", function() {
            Crafty.scene("Intro1");
        });

        // Play the audio
        Crafty.audio.play("player_walk", -1, .25);
        Crafty.audio.play("ambiance_city", -1);

    });

    Crafty.scene("Intro1", function() {
        this.mask = Crafty.e("Mask");

        Crafty.bind("KeyUp", function(e) {
            Crafty.scene("GameF1");
        });

        // Create the floor
        var me = this;
        for (var y = 0; y < Game.map_grid.height; y++) {
            for (var x = 0; x < Game.map_grid.width; x++) {
                Crafty.e(mapIntro1[y][x]).at(x, y)
            }
        }

        // Setup the player (not controlled)
        this.player = Crafty.e("PlayerCharacter").at(23, 15);
        this.player.tween({x: -1 * Game.map_grid.tile.width}, 500);

        // Setup the enemy
        this.enemy = Crafty.e("Enemy").at(4, 3);

        // When the player finishes walking across, the enemy follows
        var me = this;
        this.player.bind("TweenEnd", function() {
            me.enemy.tween({x: -1 * Game.map_grid.tile.width}, 200);
        });

        // When the enemy finishes, scene change
        this.enemy.bind("TweenEnd", function() {
            me.mask.fadeOut(160);
        });
        this.mask.bind("TweenEnd", function() {
            Crafty.scene("Intro2");
        });

        // Play the audio
        Crafty.audio.play("player_walk", -1, .25);
        Crafty.audio.play("ambiance_city", -1);

    });

    Crafty.scene("Intro2", function() {
        this.mask = Crafty.e("Mask");

        Crafty.bind("KeyUp", function(e) {
            Crafty.scene("GameF1");
        });

        // Create the floor
        var me = this;
        for (var y = 0; y < Game.map_grid.height; y++) {
            for (var x = 0; x < Game.map_grid.width; x++) {
                Crafty.e(mapIntro2[y][x]).at(x, y)
            }
        }

        // Setup the player (not controlled)
        this.player = Crafty.e("PlayerCharacter").at(23, 15);
        this.player.tween({x: -1 * Game.map_grid.tile.width}, 500);

        // Setup the enemy
        this.enemy = Crafty.e("Enemy").at(24, 3);

        // When the player finishes walking across, the enemy follows
        var me = this;
        this.player.bind("TweenEnd", function() {
            me.enemy.tween({x: -1 * Game.map_grid.tile.width}, 600);
            me.mask.fadeOut(160);
        });

        this.mask.bind("TweenEnd", function() {
            Crafty.scene("Intro3");
        });

        // Play the audio
        Crafty.audio.play("player_walk", -1, .25);
        Crafty.audio.play("ambiance_city", -1);
    });

    Crafty.scene("Intro3", function() {
        this.mask = Crafty.e("Mask");

        Crafty.bind("KeyUp", function(e) {
            Crafty.scene("GameF1");
        });

        // Create the floor
        var me = this;
        for (var y = 0; y < Game.map_grid.height; y++) {
            for (var x = 0; x < Game.map_grid.width; x++) {
                Crafty.e(mapIntro3[y][x]).at(x, y)
            }
        }

        // Setup the player (not controlled)
        this.player = Crafty.e("PlayerCharacter").at(23, 15);
        this.player.tween({x: Game.map_grid.tile.width}, 500);

        // Setup the enemy
        this.enemy = Crafty.e("Enemy").at(24, 3);

        // When the player finishes walking across, the enemy follows
        var me = this;
        this.player.bind("TweenEnd", function() {
            Crafty.audio.stop("player_walk");
            me.player.attr({alpha: 0});
            me.enemy.tween({x: 18 * Game.map_grid.tile.width}, 200);
        });

        // Fade out and change scene when the enemy reaches the corner
        this.enemy.bind("TweenEnd", function() {
            me.mask.fadeOut(160);
        });
        this.mask.bind("TweenEnd", function() {
            Crafty.scene("Intro4");
        });

        // Play the audio
        Crafty.audio.play("player_walk", -1, .25);
        Crafty.audio.play("ambiance_city", -1);
    });

    Crafty.scene("Intro4", function() {
        this.mask = Crafty.e("Mask");

        Crafty.bind("KeyUp", function(e) {
            Crafty.scene("GameF1");
        });

        // Create the floor
        var me = this;
        for (var y = 0; y < Game.map_grid.height; y++) {
            for (var x = 0; x < Game.map_grid.width; x++) {
                if (mapF0[y][x] == "Elevator") {
                    this.elevator = Crafty.e(mapF0[y][x]).at(x, y);
                }
                else {
                    Crafty.e(mapF0[y][x]).at(x, y);
                }
            }
        }

        // Setup the elevator
        this.elevator.floor = 0;

        // Setup the player (not controlled)
        this.player = Crafty.e("PlayerCharacter").at(12, 15);
        this.player.tween({y: 9 * Game.map_grid.tile.width}, 200);

        // When the player finishes walking, open elevator
        var me = this;
        this.player.bind("TweenEnd", function() {
            Crafty.audio.stop("player_walk");
            // If the elevator is closed, call it
            if (!me.elevator.open) {
                me.elevator.call(0);
            }
            // Otherwise close it and fade out
            else {
                me.player.attr({alpha: 0});
                me.elevator.animate("Close", 4, 1);
                me.mask.fadeOut(160);
            }
        });

        // When the elevator opens, player enters
        this.elevator.bind("AnimationEnd", function() {
            Crafty.audio.play("player_walk");
            me.player.tween({y: 8 * Game.map_grid.tile.width}, 40);
        });

        // Change scene after fade out
        this.mask.bind("TweenEnd", function() {
            Crafty.scene("Intro5");
        });

        // Play the audio
        Crafty.audio.play("player_walk", -1);
    });

    Crafty.scene("Intro5", function() {
        this.mask = Crafty.e("Mask");

        Crafty.bind("KeyUp", function(e) {
            Crafty.scene("GameF1");
        });

        // Create the floor
        var me = this;
        for (var y = 0; y < Game.map_grid.height; y++) {
            for (var x = 0; x < Game.map_grid.width; x++) {
                if (mapF0[y][x] == "Elevator") {
                    this.elevator = Crafty.e(mapF1[y][x]).at(x, y);
                }
                else {
                    Crafty.e(mapF1[y][x]).at(x, y);
                }
            }
        }

        // Setup the elevator
        this.elevator.floor = 1;

        // Setup the player (not controlled)
        this.player = Crafty.e("PlayerCharacter").at(12, 8);
        this.arrived = false;

        // Open the elevator
        this.elevator.floor = 1;
        this.elevator.call(1);

        // When elevator opens, player steps out
        this.elevator.bind("AnimationEnd", function() {
            Crafty.audio.play("player_walk");
            me.player.tween({y: 5 * Game.map_grid.tile.width}, 60);
        });

        var me = this;
        this.player.bind("TweenEnd", function() {
            if (!this.arrived) {
                this.arrived = true;
                me.player.tween({x: 6 * Game.map_grid.tile.height}, 120);
            }
            else {
                Crafty.audio.stop("player_walk");
                me.mask.fadeOut();
            }
        });

        // Change scene after fade out
        this.mask.bind("TweenEnd", function() {
            Crafty.scene("GameF1");
        });

        // Play the audio
        Crafty.audio.play("player_walk", -1);
    });

    Crafty.scene("GameF1", function() {

        this.floor = 1;

        this.mask = Crafty.e("Mask");

        // Set the background color
        Crafty.background("rgb(0, 0, 0)");

        // Keyboard events
        Crafty.bind("KeyUp", function(e) {
            if (e.keyCode == Crafty.keys.ESC) {
                Crafty.scene("Menu");
            }
            else if (e.keyCode == Crafty.keys.ENTER) {
                if ((me.textBubble.attr("alpha") == 1) && (me.textBubble.stairs)) {
                    me.mask.fadeOut();
                    Crafty.audio.play("player_walk_stairs");
                }
                else if ((me.textBubble.attr("alpha") == 1) && (me.textBubble.elevator)) {
                    this.elevator.call(this.floor);
                }
            }
            else if (e.keyCode == Crafty.keys.J) {
                if ((me.textBubble.attr("alpha") == 1) && (me.textBubble.stairs)) {
                    Crafty.scene("GameF0");
                }
            }
        });

        // Change scene after fade out
        this.mask.bind("TweenEnd", function() {
            Crafty.scene("GameF2");
        });
      
        // Place the background sky and floor
        var me = this;
        for (var y = 0; y < Game.map_grid.height; y++) {
            for (var x = 0; x < Game.map_grid.width; x++) {
                if ((x <= 1) || (x >= Game.map_grid.width - 2) || (y <= 1) || (y >= Game.map_grid.height)) {
                    Crafty.e("Sky").at(x, y);
                }
                else {
                    Crafty.e("FloorConcrete").at(x, y);
                }
            }
        }
        // Create the floor
        for (var y = 0; y < Game.map_grid.height; y++) {
            for (var x = 0; x < Game.map_grid.width; x++) {
                if (mapF0[y][x] == "Elevator") {
                    this.elevator = Crafty.e(mapF1[y][x]).at(x, y);
                }
                else {
                    Crafty.e(mapF1[y][x]).at(x, y)
                    /*.bind("MouseDown", function(e) {
                        console.log("mousedown");
                        me.player._mousedown(e.realX, e.realY);
                    })
                    .bind("MouseUp", function(e) {
                        console.log("mouseup");
                        me.player._mouseup(e.realX, e.realY);
                    });*/
                }
            }
        }

      this.elevator.floor = 1;

      // Create the text bubble
      this.textBubble = Crafty.e("TextBubble");

      // Elevator on hit event
      this.bind("ElevatorHit", function() {
          if (me.elevator.open) {
              me.elevator.open = false;
              me.mask.fadeOut();
              Crafty.audio.play("elevator_close");
          }
          else {
              me.textBubble.display(me.elevator.getStatus(me.floor), me.elevator.x, me.elevator.y);
          }
      });

      this.bind("StairsHit", function(data) {
          me.textBubble.display("Press ENTER to climb up a floor.", data.x, data.y);
          me.textBubble.stairs = true;
      });

      // Player character, placed at 5, 5 on our grid
      this.player = Crafty.e("PlayerCharacter").at(5, 5);

      // Enemy!
      this.enemy = Crafty.e("Enemy").at(11, 5)
          .disableControl();

        this.showMap = function(map) {

        };
        
      this.show_victory = this.bind("VillageVisited", function() {
        if (!Crafty("Village").length) {
          Crafty.scene("Victory");
        }
      });
    }, function() {
      this.unbind("VillageVisited", this.show_victory);
      this.unbind("KeyUp");
      this.unbind("MouseUp");
      this.unbind("MouseDown");
    });

    Crafty.scene("GameF2", function() {

        this.floor = 2;

        this.mask = Crafty.e("Mask");

        // Set the background color
        Crafty.background("rgb(0, 0, 0)");

        // Keyboard events
        Crafty.bind("KeyUp", function(e) {
            if (e.keyCode == Crafty.keys.ESC) {
                Crafty.scene("Menu");
            }
            else if (e.keyCode == Crafty.keys.ENTER) {
                if ((me.textBubble.attr("alpha") == 1) && (me.textBubble.elevator)) {
                    this.elevator.call(this.floor);
                }
            }
        });
      
        // Place the background sky and floor
        var me = this;
        for (var y = 0; y < Game.map_grid.height; y++) {
            for (var x = 0; x < Game.map_grid.width; x++) {
                if ((x <= 1) || (x >= Game.map_grid.width - 2) || (y <= 1) || (y >= Game.map_grid.height)) {
                    Crafty.e("Sky").at(x, y);
                }
                else {
                    Crafty.e("FloorConcrete").at(x, y);
                }
            }
        }
        // Create the floor
        for (var y = 0; y < Game.map_grid.height; y++) {
            for (var x = 0; x < Game.map_grid.width; x++) {
                if (mapF0[y][x] == "Elevator") {
                    this.elevator = Crafty.e(mapF1[y][x]).at(x, y);
                }
                else {
                    Crafty.e(mapF2[y][x]).at(x, y)
                    /*.bind("MouseDown", function(e) {
                        console.log("mousedown");
                        me.player._mousedown(e.realX, e.realY);
                    })
                    .bind("MouseUp", function(e) {
                        console.log("mouseup");
                        me.player._mouseup(e.realX, e.realY);
                    });*/
                }
            }
        }

      this.elevator.floor = 1;

      // Create the text bubble
      this.textBubble = Crafty.e("TextBubble");

      this.arrived = false;
      this.bind("WallWindowTopOpenHit", function() {
          if (!this.arrived) {
              this.arrived = true;
              me.enemy = Crafty.e("Enemy")
                .disableControl()
                .at(22, 11);
              me.enemy.chase = false;
              me.enemy.tween({y: 1 * Game.map_grid.tile.width}, 200);

              me.enemy.stage = 0;
              me.enemy.bind("TweenEnd", function() {
                  if (me.enemy.stage == 0) {
                      me.enemy.tween({x: 6 * Game.map_grid.tile.width}, 200);
                      me.enemy.stage = 1;
                  }
                  else if(me.enemy.stage == 1) {
                      me.enemy.tween({y: 3 * Game.map_grid.tile.height}, 40);
                      me.enemy.stage = 2;
                  }
                  else {
                      me.enemy.chase = true;
                  }
              })
            }
      });

      // Elevator on hit event
      this.bind("ElevatorHit", function() {
          if (me.elevator.open) {
              me.elevator.open = false;
              me.mask.fadeOut();
              Crafty.audio.play("elevator_close");
          }
          else {
              me.textBubble.display(me.elevator.getStatus(me.floor), me.elevator.x, me.elevator.y);
              me.textBubble.elevator = true;
          }
      });

      // Player character, placed at 5, 5 on our grid
      this.player = Crafty.e("PlayerCharacter").at(22, 11);

      this.mask.bind("TweenEnd", function() {
        Crafty.scene("GameF0");
      });

      this.show_victory = this.bind("VillageVisited", function() {
        if (!Crafty("Village").length) {
          Crafty.scene("Victory");
        }
      });
    }, function() {
      this.unbind("VillageVisited", this.show_victory);
      this.unbind("KeyUp");
      this.unbind("MouseUp");
      this.unbind("MouseDown");
    });

    Crafty.scene("GameF0", function() {

        this.floor = 0;

        this.mask = Crafty.e("Mask");

        // Set the background color
        Crafty.background("rgb(0, 0, 0)");

        // Place the background sky and floor
        var me = this;
        for (var y = 0; y < Game.map_grid.height; y++) {
            for (var x = 0; x < Game.map_grid.width; x++) {
                if ((x <= 1) || (x >= Game.map_grid.width - 2) || (y <= 1) || (y >= Game.map_grid.height)) {
                    Crafty.e("Sky").at(x, y);
                }
                else {
                    Crafty.e("FloorConcrete").at(x, y);
                }
            }
        }
        // Create the floor
        for (var y = 0; y < Game.map_grid.height; y++) {
            for (var x = 0; x < Game.map_grid.width; x++) {
                if (mapF0[y][x] == "Elevator") {
                    this.elevator = Crafty.e(mapF0[y][x]).at(x, y);
                }
                else {
                    Crafty.e(mapF0[y][x]).at(x, y)
                    /*.bind("MouseDown", function(e) {
                        console.log("mousedown");
                        me.player._mousedown(e.realX, e.realY);
                    })
                    .bind("MouseUp", function(e) {
                        console.log("mouseup");
                        me.player._mouseup(e.realX, e.realY);
                    });*/
                }
            }
        }

      this.elevator.floor = 0;

      this.bind("ExitHit", function() {
          me.mask.fadeOut();
      });

      this.player = Crafty.e("PlayerCharacter").at(12, 9);

      this.bind("ExitHit", function() {
          me.mask.fadeOut();
      });

        this.mask.bind("TweenEnd", function() {
            Crafty.scene("Victory");
        });

    }, function() {
      this.unbind("KeyUp");
      this.unbind("MouseUp");
      this.unbind("MouseDown");
    });

    // Victory Scene
    Crafty.scene("Victory", function() {
      // Set the background color
      Crafty.background("rgb(49, 43, 45)");

      Crafty.e("2D, DOM, Text")
      .text("THE END")
      .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
      .css("font-size", "24px");

      var me = this;
      this.restart_game = function() {
        Crafty.scene("Intro0");
      };
      this.bind("KeyDown", this.restart_game);
    }, function() {
      this.unbind("KeyDown", this.restart_game); 
    });

    Crafty.scene("Fail", function(){
        Crafty.audio.play("die", 1);
      // Set the background color
      Crafty.background("rgb(49, 43, 45)");

      Crafty.e("2D, DOM, Text")
      .text("Game Over!  Press ENTER to restart.")
      .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
      .css("font-size", "24px");

        Crafty.bind("KeyUp", function(e) {
            if (e.keyCode == Crafty.keys.ENTER) {
                Crafty.scene("GameF1");
            }
        });
    }, function() {
        Crafty.unbind("KeyUp");
    });


    // Loading scene
    // -------------
    // Handles the loading of binary assets such as images and audio files
    Crafty.scene("Loading", function(){
      // Set the background color
      Crafty.background("rgb(49, 43, 45)");

      // Draw some text for the player to see in case the file
      // // takes a noticeable amount of time to load
      Crafty.e("2D, DOM, Text")
      .text("Loading; please wait...")
      .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
      .css("font-size", "24px");

      Crafty.load(["images/tiles_16.png",
                   "images/tiles_32.png",
                   "images/enemy.png",
                   "images/player_16.png",
                   "images/player_32.png",
                   "audio/elevator_arrive.ogg",
                   "audio/elevator_arrive.mp3",
                   "audio/elevator_arrive.wav",
                   "audio/elevator_close.ogg",
                   "audio/elevator_close.mp3",
                   "audio/elevator_close.wav",
                   "audio/player_walk.ogg",
                   "audio/player_walk.mp3",
                   "audio/player_walk.wav",
                   "audio/button_click.ogg",
                   "audio/button_click.mp3",
                   "audio/button_click.wav",
                   "audio/ambiance_city.ogg",
                   "audio/ambiance_city.mp3",
                   "audio/ambiance_city.wav",
                   "audio/player_walk_stairs.ogg",
                   "audio/player_walk_stairs.mp3",
                   "audio/player_walk_stairs.wav"], function(){
        // Once everything is loaded

        // Define the individual sprites in the image
        // Each one (spr_tree, etc.) becomes a component
        // These components" names are prefixed with "spr_"
        //  to remind us that they simply cause the entity
        //  to be drawn with a certain sprite
        Crafty.sprite(16, "assets/16x16_forest_2.gif", {
          spr_tree:    [0, 0],
          spr_bush:    [1, 0],
          spr_village: [0, 1],
          spr_grass:   [1, 1]
        });

        if (Game.tileSize == 16) {
            Crafty.sprite(16, "images/tiles_16.png", {
              spr_tile_wood_0:              [0, 0],
              spr_tile_concrete_0:          [0, 1],
              spr_tile_concrete_1:          [1, 1],
              spr_tile_wall_left:           [0, 2],
              spr_tile_wall_right:          [1, 2],
              spr_tile_wall_top:            [2, 2],
              spr_tile_wall_bottom:         [3, 2],
              spr_tile_wall_topleft:        [4, 2],
              spr_tile_wall_topright:       [5, 2],
              spr_tile_wall_bottomleft:     [6, 2],
              spr_tile_wall_bottomright:    [7, 2],
              spr_tile_wall_window_left:    [8, 2],
              spr_tile_wall_window_right:   [9, 2],
              spr_tile_wall_window_top:     [10, 2],
              spr_railing_left:             [0, 3],
              spr_railing_right:            [1, 3],
              spr_railing_top:              [2, 3],
              spr_railing_topleft:          [3, 3],
              spr_railing_topright:         [4, 3],
              spr_railing_ladder_left:      [5, 3],
              spr_railing_ladder_right:     [6, 3],
              spr_railing_ladder_top:       [7, 3],
              spr_tile_wall_bottom_exit:    [8, 3],
              spr_elevator_idle:            [0, 4],
              spr_elevator_0:               [1, 4],
              spr_elevator_1:               [2, 4],
              spr_elevator_2:               [3, 4],
              spr_elevator_3:               [4, 4],
              spr_elevator_4:               [5, 4],
              spr_elevator_5:               [6, 4],
              spr_tile_asphalt_0:           [0, 5],
              spr_tile_asphalt_1:           [1, 5],
              spr_tile_sidewalk_0:          [0, 6],
              spr_tile_brickwall:           [0, 7],
              spr_tile_brickwall_door:      [1, 7],
              spr_tile_brickwall_prg_0:     [0, 8],
              spr_tile_brickwall_prg_1:     [1, 8],
              spr_tile_brickwall_prg_2:     [2, 8],
              spr_tile_brickwall_prg_3:     [3, 8],
              spr_tile_brickwall_j_0:       [4, 8],
              spr_tile_brickwall_j_1:       [5, 8],
              spr_tile_brickwall_j_2:       [6, 8],
              spr_tile_brickwall_b_0:       [7, 8],
              spr_tile_brickwall_b_1:       [8, 8],
              spr_tile_brickwall_b_2:       [9, 8],
              spr_tile_asphalt_isr_0:       [0, 9],
              spr_tile_asphalt_isr_1:       [1, 9],
              spr_tile_asphalt_isr_2:       [2, 9],
              spr_tile_asphalt_isr_3:       [3, 9],
              spr_tile_asphalt_isr_4:       [4, 9],
              spr_tile_asphalt_isr_5:       [5, 9],
              spr_tile_asphalt_isr_6:       [6, 9],
              spr_tile_asphalt_isr_7:       [7, 9],
              spr_tile_asphalt_isr_8:       [8, 9],
              spr_tile_asphalt_isr_9:       [9, 9],
              spr_tile_asphalt_title_0:     [0, 10],
              spr_tile_asphalt_title_1:     [1, 10],
              spr_tile_asphalt_title_2:     [2, 10],
              spr_tile_asphalt_title_3:     [3, 10],
              spr_tile_sky:                 [0, 11],
              spr_tile_wall_inner_v:        [0, 12],
              spr_tile_wall_inner_h:        [1, 12],
              spr_tile_wall_inner_v_door:   [2, 12],
              spr_tile_wall_inner_h_door:   [3, 12],
            });
            
            Crafty.sprite(16, "images/enemy_16.png", {
                spr_enemy:                  [0, 0],
            });

            Crafty.sprite(14, "images/player_16.png", {
              spr_player:  [0, 0],
            });

        }
        else {
            Crafty.sprite(32, "images/tiles_32.png", {
              spr_tile_wood_0:              [0, 0],
              spr_tile_concrete_0:          [0, 1],
              spr_tile_concrete_1:          [1, 1],
              spr_tile_wall_left:           [0, 2],
              spr_tile_wall_right:          [1, 2],
              spr_tile_wall_top:            [2, 2],
              spr_tile_wall_bottom:         [3, 2],
              spr_tile_wall_topleft:        [4, 2],
              spr_tile_wall_topright:       [5, 2],
              spr_tile_wall_bottomleft:     [6, 2],
              spr_tile_wall_bottomright:    [7, 2],
              spr_tile_wall_window_left:    [8, 2],
              spr_tile_wall_window_right:   [9, 2],
              spr_tile_wall_window_top:     [10, 2],
              spr_railing_left:             [0, 3],
              spr_railing_right:            [1, 3],
              spr_railing_top:              [2, 3],
              spr_railing_topleft:          [3, 3],
              spr_railing_topright:         [4, 3],
              spr_railing_ladder_left:      [5, 3],
              spr_railing_ladder_right:     [6, 3],
              spr_railing_ladder_top:       [7, 3],
              spr_tile_wall_bottom_exit:    [8, 3],
              spr_elevator_idle:            [0, 4],
              spr_elevator_0:               [1, 4],
              spr_elevator_1:               [2, 4],
              spr_elevator_2:               [3, 4],
              spr_elevator_3:               [4, 4],
              spr_elevator_4:               [5, 4],
              spr_elevator_5:               [6, 4],
              spr_tile_asphalt_0:           [0, 5],
              spr_tile_asphalt_1:           [1, 5],
              spr_tile_sidewalk_0:          [0, 6],
              spr_tile_brickwall:           [0, 7],
              spr_tile_brickwall_door:      [1, 7],
              spr_tile_brickwall_prg_0:     [0, 8],
              spr_tile_brickwall_prg_1:     [1, 8],
              spr_tile_brickwall_prg_2:     [2, 8],
              spr_tile_brickwall_prg_3:     [3, 8],
              spr_tile_brickwall_j_0:       [4, 8],
              spr_tile_brickwall_j_1:       [5, 8],
              spr_tile_brickwall_j_2:       [6, 8],
              spr_tile_brickwall_b_0:       [7, 8],
              spr_tile_brickwall_b_1:       [8, 8],
              spr_tile_brickwall_b_2:       [9, 8],
              spr_tile_asphalt_isr_0:       [0, 9],
              spr_tile_asphalt_isr_1:       [1, 9],
              spr_tile_asphalt_isr_2:       [2, 9],
              spr_tile_asphalt_isr_3:       [3, 9],
              spr_tile_asphalt_isr_4:       [4, 9],
              spr_tile_asphalt_isr_5:       [5, 9],
              spr_tile_asphalt_isr_6:       [6, 9],
              spr_tile_asphalt_isr_7:       [7, 9],
              spr_tile_asphalt_isr_8:       [8, 9],
              spr_tile_asphalt_isr_9:       [9, 9],
              spr_tile_asphalt_title_0:     [0, 10],
              spr_tile_asphalt_title_1:     [1, 10],
              spr_tile_asphalt_title_2:     [2, 10],
              spr_tile_asphalt_title_3:     [3, 10],
              spr_tile_sky:                 [0, 11],
              spr_tile_wall_inner_v:        [0, 12],
              spr_tile_wall_inner_h:        [1, 12],
              spr_tile_wall_inner_v_door:   [2, 12],
              spr_tile_wall_inner_h_door:   [3, 12],
            });

            Crafty.sprite(32, "images/enemy_32.png", {
                spr_enemy:                  [0, 0],
            });

            Crafty.sprite(28, "images/player_32.png", {
              spr_player:  [0, 0],
            });

        }

        Crafty.sprite(32, "assets/menu.png", {
            spr_arrow: [0, 0],
        });

         // Define our sounds for later use
         Crafty.audio.add({
             elevator_arrive:  ["audio/elevator_arrive.ogg",
                                "audio/elevator_arrive.mp3",
                                "audio/elevator_arrive.wav"],
             elevator_close:   ["audio/elevator_close.ogg",
                                "audio/elevator_close.mp3",
                                "audio/elevator_close.wav"],
             player_walk:      ["audio/player_walk.ogg",
                                "audio/player_walk.mp3",
                                "audio/player_walk.wav"],
             button_click:      ["audio/button_click.ogg",
                                "audio/button_click.mp3",
                                "audio/button_click.wav"],
             ambiance_city:     ["audio/ambiance_city.ogg",
                                "audio/ambiance_city.mp3",
                                "audio/ambiance_city.wav"],
             player_walk_stairs:    ["audio/player_walk_stairs.ogg",
                                     "audio/player_walk_stairs.mp3",
                                     "audio/player_walk_stairs.wav"],
             die:    ["audio/die.ogg",
                                     "audio/die.mp3",
                                     "audio/die.wav"],
         });

        // Now that our sprites are ready to draw, start the game
        Crafty.scene("Intro0");
      })
    });

