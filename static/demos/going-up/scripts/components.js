    "use strict";

    // The Grid component allows an element to be located
    //  on a grid of tiles
    Crafty.c("Grid", {
        init: function() {
            this.attr({
                w: Game.map_grid.tile.width,
                h: Game.map_grid.tile.height
            })
        },

        // Locate this entity at the given position on the grid
        at: function(x, y) {
            if (x === undefined && y === undefined) {
                return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
            } else {
                this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
                return this;
            }
        }
    });

    // An "Actor" is an entity that is drawn in 2D on canvas
    //  via our logical coordinate grid
    Crafty.c("Actor", {
      init: function() {
        this.requires("2D, Canvas, Grid");
      },
    });

    // A Tree is just an Actor with a certain color
    Crafty.c("Tree", {
      init: function() {
        this.requires("Actor, spr_tree, Solid");
      },
    });

    // A Bush is just an Actor with a certain color
    Crafty.c("Bush", {
      init: function() {
        this.requires("Actor, spr_bush, Solid");
      },
    });

    Crafty.c("Grass", {
      init: function() {
        this.requires("Actor, Mouse, spr_grass");
      },
    });

    Crafty.c("FloorConcrete", {
      init: function() {
        var rand = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
        this.requires("Actor, Mouse, spr_tile_concrete_" + rand);
      },
    });

    Crafty.c("FloorWood", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_wood_0");
      },
    });

    Crafty.c("FloorAsphalt", {
        init: function() {
            var rand = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
            this.requires("Actor, Mouse, spr_tile_asphalt_" + rand);
        },
    });

    Crafty.c("FloorAsphaltTitle0", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_asphalt_title_0");
        },
    });

    Crafty.c("FloorAsphaltTitle1", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_asphalt_title_1");
        },
    });

    Crafty.c("FloorAsphaltTitle2", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_asphalt_title_2");
        },
    });

    Crafty.c("FloorAsphaltTitle3", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_asphalt_title_3");
        },
    });

    Crafty.c("FloorAsphaltISR0", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_asphalt_isr_0");
        },
    });

    Crafty.c("FloorAsphaltISR1", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_asphalt_isr_1");
        },
    });

    Crafty.c("FloorAsphaltISR2", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_asphalt_isr_2");
        },
    });

    Crafty.c("FloorAsphaltISR3", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_asphalt_isr_3");
        },
    });

    Crafty.c("FloorAsphaltISR4", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_asphalt_isr_4");
        },
    });

    Crafty.c("FloorAsphaltISR5", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_asphalt_isr_5");
        },
    });

    Crafty.c("FloorAsphaltISR6", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_asphalt_isr_6");
        },
    });

    Crafty.c("FloorAsphaltISR7", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_asphalt_isr_7");
        },
    });

    Crafty.c("FloorAsphaltISR8", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_asphalt_isr_8");
        },
    });

    Crafty.c("FloorAsphaltISR9", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_asphalt_isr_9");
        },
    });

    Crafty.c("BrickWall", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_brickwall");
        },
    });

    Crafty.c("BrickWallDoor", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_brickwall_door");
        },
    });

    Crafty.c("BrickWallPRG0", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_brickwall_prg_0");
        },
    });

    Crafty.c("BrickWallPRG1", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_brickwall_prg_1");
        },
    });

    Crafty.c("BrickWallPRG2", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_brickwall_prg_2");
        },
    });

    Crafty.c("BrickWallPRG3", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_brickwall_prg_3");
        },
    });

    Crafty.c("BrickWallJ0", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_brickwall_j_0");
        },
    });

    Crafty.c("BrickWallJ1", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_brickwall_j_1");
        },
    });

    Crafty.c("BrickWallJ2", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_brickwall_j_2");
        },
    });

    Crafty.c("BrickWallB0", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_brickwall_b_0");
        },
    });

    Crafty.c("BrickWallB1", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_brickwall_b_1");
        },
    });

    Crafty.c("BrickWallB2", {
        init: function() {
            this.requires("Actor, Mouse, spr_tile_brickwall_b_2");
        },
    });

    Crafty.c("FloorSidewalk", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_sidewalk_0");
      },
    });

    Crafty.c("WallLeft", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_wall_left, Solid");
      },
    });

    Crafty.c("WallRight", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_wall_right, Solid");
      },
    });

    Crafty.c("WallTop", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_wall_top, Solid");
      },
    });

    Crafty.c("WallBottom", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_wall_bottom, Solid");
      },
    });

    Crafty.c("WallBottomExit", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_wall_bottom_exit");
      },
    });

    Crafty.c("WallTopLeft", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_wall_topleft, Solid");
      },
    });

    Crafty.c("WallTopRight", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_wall_topright, Solid");
      },
    });

    Crafty.c("WallBottomLeft", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_wall_bottomleft, Solid");
      },
    });

    Crafty.c("WallBottomRight", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_wall_bottomright, Solid");
      },
    });

    Crafty.c("WallWindowLeftOpen", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_wall_window_left");
      },
    });


    Crafty.c("WallWindowLeft", {
      init: function() {
        // 50% chance of being solid
        var solid = "";
        var rand = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
        if (rand > 0) {
            solid = ", Solid";
        }

        this.requires("Actor, Mouse, spr_tile_wall_window_left" + solid);
      },
    });

    Crafty.c("WallWindowRight", {
      init: function() {
        // 50% chance of being solid
        var solid = "";
        var rand = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
        if (rand > 0) {
            solid = ", Solid";
        }

        this.requires("Actor, Mouse, spr_tile_wall_window_right" + solid);
      },
    });

    Crafty.c("WallWindowTop", {
      init: function() {
        // 50% chance of being solid
        var solid = "";
        var rand = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
        if (rand > 0) {
            solid = ", Solid";
        }

        this.requires("Actor, Mouse, spr_tile_wall_window_top" + solid);
      },
    });

    Crafty.c("WallWindowTopOpen", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_wall_window_top");
      },
    });

    Crafty.c("WallInnerV", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_wall_inner_v, Solid");
      },
    });

    Crafty.c("WallInnerH", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_wall_inner_h, Solid");
      },
    });

    Crafty.c("WallInnerVDoor", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_wall_inner_v_door");
      },
    });

    Crafty.c("WallInnerVDoorClosed", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_wall_inner_v_door, Solid");
      },
    });
    Crafty.c("WallInnerHDoor", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_wall_inner_h_door");
      },
    });

    Crafty.c("RailingLeft", {
      init: function() {
        this.requires("Actor, Mouse, spr_railing_left");
      },
    });

    Crafty.c("RailingRight", {
      init: function() {
        this.requires("Actor, Mouse, spr_railing_right");
      },
    });

    Crafty.c("RailingTop", {
      init: function() {
        this.requires("Actor, Mouse, spr_railing_top");
      },
    });

    Crafty.c("RailingTopLeft", {
      init: function() {
        this.requires("Actor, Mouse, spr_railing_topleft");
      },
    });

    Crafty.c("RailingTopRight", {
      init: function() {
        this.requires("Actor, Mouse, spr_railing_topright");
      },
    });

    Crafty.c("RailingLadderLeft", {
      init: function() {
        this.requires("Actor, Mouse, spr_railing_ladder_left, Stairs");
      },
    });

    Crafty.c("RailingLadderRight", {
      init: function() {
        this.requires("Actor, Mouse, spr_railing_ladder_right, Stairs");
      },
    });

    Crafty.c("RailingLadderTop", {
      init: function() {
        this.requires("Actor, Mouse, spr_railing_ladder_top, Stairs");
      },
    });

    Crafty.c("SkySolid", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_sky, Solid");
      },
    });

    Crafty.c("Sky", {
      init: function() {
        this.requires("Actor, Mouse, spr_tile_sky");
      },
    });

    Crafty.c("Elevator", {
        init: function() {
            this.requires("Actor, Mouse, spr_elevator_idle, SpriteAnimation")
                .animate("Open", 1, 4, 6)
                .animate("Close", 6, 4, 1);
        },

        speed: .2, // In floors per second
        floor: 0,
        moving: 0,
        open: false,

        // Returns a string about the elevator's status
        getStatus: function(floor) {
            var status = "You are on floor " + floor + ".  The elevator is on floor " + this.floor + " and is ";
            if (this.moving < 0) {
                status += "going down. ";
            }
            else if (this.moving > 0) {
                status += "going up. ";
            }
            else {
                status += "not moving. ";
            }
            status += "Press enter to call.";

            return status;
        },

        call: function(floor) {
            Crafty.audio.play("button_click");
            // If the elevator is on the same floor as it is being called from, just open the doors
            if (floor == this.floor) {
                if (!this.open) {
                    this.open = true;
                    this.animate("Open", 4, 1);
                    Crafty.audio.play("elevator_arrive");
                }
            }
            // Otherwise send the elevator to the called floor
            else {
                this.open = false;
                if (floor > this.floor) {
                    this.moving = 1;
                }
                else if (floor < this.floor) {
                    this.moving = -1;
                }

                var me = this;
                var timer = setInterval(function() {
                    if (floor > me.floor) {
                        me.floor++
                    }
                    else if (floor < me.floor) {
                        me.floor--;
                    }

                    if (floor == me.floor) {
                        me.moving = 0;
                        me.open = true;
                        clearInterval(timer);
                        me.animate("Open", 4, 1);
                        Crafty.audio.play("elevator_arrive");
                    }
                }, 1000 / this.speed);
            }
        }
    });

    // This is the player-controlled character
    Crafty.c("PlayerCharacter", {

        speedVal: 2,
        floor: 1,

        init: function() {
            this.requires("Actor, controls, Fourway, spr_player, Collision, SpriteAnimation, Tween")
                .fourway(this.speedVal)
                .stopOnSolids()
                .onHit("Village", this.visitVillage)
                .onHit("Stairs", this.hitStairs)
                .onHit("WallWindowTopOpen", this.hitWallWindowTopOpen)
                .onHit("WallBottomExit", this.hitExit)
                .onHit("Elevator", this.hitElevator)
                /*.animate("PlayerMovingUp", 0, 0, 2)
                .animate("PlayerMovingRight", 0, 1, 2)
                .animate("PlayerMovingDown", 0, 2, 2)
                .animate("PlayerMovingLeft", 0, 3, 2);*/

            // Watch for a change of direction and switch animations accordingly
            var animation_speed = 4;
            this.bind("NewDirection", function(data) {
                console.log(Crafty.audio.unpause("player_walk"));

                // Animate the player
                if (data.x > 0) {
                    //this.animate("PlayerMovingRight", animation_speed, -1);
                } else if (data.x < 0) {
                    //this.animate("PlayerMovingLeft", animation_speed, -1);
                } else if (data.y > 0) {
                    //this.animate("PlayerMovingDown", animation_speed, -1);
                } else if (data.y < 0) {
                    //this.animate("PlayerMovingUp", animation_speed, -1);
                } else {
                    this.stop();
                    Crafty.audio.pause("player_walk");
                }
            });

            // Let the enemy know when you've moved, so he can chase
            this.bind("Moved", function(data) {
                Crafty.trigger("PlayerMove", data);
            });
        },

      // Registers a stop-movement function to be called when
      //  this entity hits an entity with the "Solid" component
      stopOnSolids: function() {
        this.onHit("Solid", this.stopMovement);

        return this;
      },

      // Stops the movement
      stopMovement: function() {
        this._speed = 0;
        if (this._movement) {
          this.x -= this._movement.x;
          this.y -= this._movement.y;
        }
      },

      // Respond to this player visiting a village
      visitVillage: function(data) {
        var villlage = data[0].obj;
        villlage.collect();
      },

      // On running into the elevator
      hitElevator: function(data) {
          Crafty.trigger("ElevatorHit", this);
          if (!data[0].obj.open || data[0].obj.floor != this.floor) {
              this.stopMovement();
          }
      },

      // On running into stairs
      hitStairs: function(data) {
          Crafty.trigger("StairsHit", this);
      },
      
      hitExit: function(data) {
          Crafty.trigger("ExitHit", this);
      },

      hitWallWindowTopOpen: function(data) {
          Crafty.trigger("WallWindowTopOpenHit", this);
      },

      _mousedown: function(x, y) {
          // Calculate the slope from the player"s pos to the click pos
          var slopeY = 0;
          if (y - this.y > Game.map_grid.tile.height) {
              slopeY = 1;
          }
          else if (y - this.y < -1 * Game.map_grid.tile.height) {
              slopeY = -1;
          }
          var slopeX = 0;
          if (x - this.x > Game.map_grid.tile.width) {
              slopeX = 1;
          }
          else if (x - this.x < -1 * Game.map_grid.tile.width) {
              slopeX = -1;
          }

          this._movement.x = Math.round((this._movement.x + slopeX) * 1000) / 1000;
          this._movement.y = Math.round((this._movement.y + slopeY) * 1000) / 1000;
          this.trigger("NewDirection", this._movement);
      },

      _mouseup: function (x, y) {
          // Calculate the slope from the player"s pos to the click pos
          var slopeY = 0;
          if (y - this.y > Game.map_grid.tile.height) {
              slopeY = 1;
          }
          else if (y - this.y < -1 * Game.map_grid.tile.height) {
              slopeY = -1;
          }
          var slopeX = 0;
          if (x - this.x > Game.map_grid.tile.width) {
              slopeX = 1;
          }
          else if (x - this.x < -1 * Game.map_grid.tile.width) {
              slopeX = -1;
          }

          this._movement.x = Math.round((this._movement.x - slopeX) * 1000) / 1000;
          this._movement.y = Math.round((this._movement.y - slopeY) * 1000) / 1000;
          this.trigger("NewDirection", this._movement);
      },

    });

    // Bad guy!
    Crafty.c("Enemy", {

        speedVal: 1.5,
        chase: true,

        init: function() {
            this.requires("Actor, Fourway, spr_enemy, Collision, SpriteAnimation, Tween")
                .fourway(this.speedVal)
                .stopOnSolids()
                .onHit("PlayerCharacter", this.kill)
                /*.animate("PlayerMovingUp", 0, 0, 2)
                .animate("PlayerMovingRight", 0, 1, 2)
                .animate("PlayerMovingDown", 0, 2, 2)
                .animate("PlayerMovingLeft", 0, 3, 2);
                */

            // Watch for a change of direction and switch animations accordingly
            /*var animation_speed = 4;
            this.bind("NewDirection", function(data) {
                
            });*/
       
            var me = this;
            this.bind("PlayerMove", function(data) {
                if (me.chase) {
                    me.moveTo(data.x, data.y);
                }
            });
        },

        moveTo: function(x, y) {
            // Calculate the slope from the current pos to the target pos
            /*var slopeY = 0;
            if (y - this.y > Game.map_grid.tile.height) {
                slopeY = 1;
            }
            else if (y - this.y < -1 * Game.map_grid.tile.height) {
                slopeY = -1;
            }
            var slopeX = 0;
            if (x - this.x > Game.map_grid.tile.width) {
                slopeX = 1;
            }
            else if (x - this.x < -1 * Game.map_grid.tile.width) {
                slopeX = -1;
            }*/

            //this._movement.x = Math.round((this._movement.x + slopeX) * 1000) / 1000;
            //this._movement.y = Math.round((this._movement.y + slopeY) * 1000) / 1000;
           // this.trigger("NewDirection", this._movement);
            /*if (data.x > 0) {
                this.animate("PlayerMovingRight", animation_speed, -1);
            } else if (data.x < 0) {
                this.animate("PlayerMovingLeft", animation_speed, -1);
            } else if (data.y > 0) {
                this.animate("PlayerMovingDown", animation_speed, -1);
            } else if (data.y < 0) {
                this.animate("PlayerMovingUp", animation_speed, -1);
            } else {
                this.stop();
            }*/

            var distance = Math.pow(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2) , 1/2);
            var frames = Math.round(distance / this.speedVal);

            this.tween({x: x, y: y}, this.tweenFrames(x, y, this.x, this.y));
        },

        // Registers a stop-movement function to be called when
        //  this entity hits an entity with the "Solid" component
        stopOnSolids: function() {
            this.onHit("Solid", this.stopMovement);
            this.onHit("Elevator", this.stopMovement);

            return this;
        },

        // Stops the movement and tries to walk around obstacle
        stopMovement: function(data) {
            //var rand = Math.floor(Math.random() * (10 + 10 + 10)) - 10;
            //var xDest = data[0].obj._x + 35;//Math.floor(Math.random() * (10 + 10 + 10)) - 10;
            //var yDest = data[0].obj._y + 30;//Math.floor(Math.random() * (10 + 10 + 10)) - 10;
            var xDest = 12 * Game.map_grid.tile.width;
            var yDest = 6 * Game.map_grid.tile.height;

            this.tween({x: xDest, y: yDest}, this.tweenFrames(xDest, yDest, this.x, this.y));
        },

        // Kill the player!
        kill: function() {
            Crafty.scene("Fail");
        },

        // Get the number of frames to move between the points at our speed
        tweenFrames: function(x1, y1, x2, y2) {
            var distance = Math.pow(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) , 1/2);
            return Math.round(distance / this.speedVal);
        }
    });

    Crafty.c("PlayerBig", {
      init: function() {
        this.requires("Actor, spr_player_big");
      },
    });

    Crafty.c("Arrow", {
      init: function() {
        this.requires("Actor, spr_arrow, Keyboard, SpriteAnimation")
          .animate("Shine", 0, 0, 3)
          .bind("KeyDown", function() {
            if (this.isDown("DOWN_ARROW")) {
              this.at(6, 4);
            }
            else if (this.isDown("UP_ARROW")) {
              this.at(6, 2);
            }
            else if (this.isDown("ENTER")) {
              Crafty.scene("Game");
            }
          });
    
          this.animate("Shine", 1, -1);
      },
    });

    // A village is a tile on the grid that the PC must visit in order to win the game
    Crafty.c("Village", {
      init: function() {
        this.requires("Actor, spr_village");
      },

      collect: function() {
        Crafty.audio.play("knock");
        Crafty.scene("Village");
        //this.destroy();
        //Crafty.trigger("VillageVisited", this);
      }
    });


    Crafty.c("TextBubble", {
        init: function() {
            this.requires("2D, DOM, HTML");

            // Set up style
            this.attr({alpha: 0})
                .css({"color": "#ffffff", "font-size": "18px", "text-align": "left"});
        },

        timer: null,

        width: 200,
        height: 100,
        time: 2000,
        
        display: function(text, x, y) {
            // Set the html to display
            var content = '<div style="width: ' + this.width + 'px; height: ' + this.height + 'px; border: 1px #000000 solid; border-radius: 8px; padding: 4px; background: rgba(0, 0, 0, 0.8);">';
            content += '<p>' + text + '</p></div>';

            // Get a nice position to show
            var xAdjusted = x;
            var yAdjusted = y;
            if (x + this.width + Game.map_grid.tile.width < Game.width()) {
                xAdjusted = x + Game.map_grid.tile.width;
            }
            else {
                xAdjusted = x - Game.map_grid.tile.width - this.width;
            }
            if (y - this.height > 0) {
                yAdjusted = y - this.height;
            }

            this.attr({alpha: 1, x: xAdjusted, y: yAdjusted})
                .replace(content);

            clearTimeout(this.timer);
            var me = this;
            this.timer = setTimeout(function() {
                me.hide();
            }, this.time);
        },

        hide: function() {
            this.attr({alpha: 0})
                .replace("");
        }
    });

    // Covers the whole screen, for fadeout effects
    Crafty.c("Mask", {
        init: function() {
            this.requires("2D, DOM, Tween");

            // Set up style
            this.attr({alpha: 0, x: 0, y: 0, w: Game.width(), h: Game.height()})
                this.css({"background": "#000000"});
        },

        fadeOut: function(speed) {
            if (speed == null) {
                speed = 6;
            }

            this.tween({alpha: 1}, speed);
        },
    });

