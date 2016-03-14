require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'
    }
});

require(['jquery'], function ($) {
    'use strict';
    
    var Mapmaker = (function() {

        Mapmaker.prototype.width = 24;
        Mapmaker.prototype.height = 16;

        Mapmaker.prototype.map = null;

        Mapmaker.prototype.tiles = [
            "Tree",
            "Bush",
            "Village",
            "Grass"
        ];

        Mapmaker.prototype.tileDefault = 3;
        
        Mapmaker.prototype.selected = 0;

        function Mapmaker() {
            // Create the map as pure grass
            this.map = new Array(this.height);
            for (var y = 0; y < this.height; y++) {
                this.map[y] = new Array(this.width);
                for (var x = 0; x < this.width; x++) {
                    this.map[y][x] = this.tileDefault;
                }
            }

            this.render();
        }

        Mapmaker.prototype.render = function() {
            // Set the selected tile
            $(".tile-selected").attr("class", "tile tile-selected tile-" + this.selected).data("mapmaker-selelcted", this.selected);

            // Create the map grid table
            var content = "";
            for (var y = 0; y < this.height; y++) {
               content += "<tr>"; 
               for (var x = 0; x < this.width; x++) {
                    content += "<td>";
                    content += "<div class=\"tile tile-drop tile-" + this.map[y][x] + "\" data-mapmaker-x=\"" + x + "\" data-mapmaker-y=\"" + y + "\" ondragover=\"return false;\"></div>";
                    content += "</td>";
               }
               content += "</tr>"; 
            }
            $(".mapmaker").html(content);

            // Add click events to the tiles
            var me = this;
            $(".tile-drag").on("mousedown", function() {
                me.selected = $(this).data("mapmaker-tile");
                me.render();
            });

            // Add drag events to tiles
            $(".tile-drag").each(function() {
                var data = $(this).data("mapmaker-tile")
                this.ondragstart = function(e) {
                    e.dataTransfer.setData('text/plain', data);
                    e.dataTransfer.effectAllowed = "all";
                    e.dataTransfer.dropEffect = "copy";
                };
            });

            // Add click drop events to tile
            $(".tile-drop").on("click", function() {
                me.map[$(this).data("mapmaker-y")][$(this).data("mapmaker-x")] = me.selected;
                me.render();
            });

            // Add drag receive events to cells
            $(".mapmaker td").each(function() {
                this.ondrop = function(e) {
                    var data = e.dataTransfer.getData("text/plain");
                    me.map[$(this).data("mapmaker-y")][$(this).data("mapmaker-x")] = data;

                    e.preventDefault();
                }
            });

            // Add submit button event
            $("button.submit").on("click", function() {
                var output = new Array(me.height);
                for (var y = 0; y < me.height; y++) {
                    output[y] = new Array(me.width);
                    for (var x = 0; x < me.width; x++) {
                        output[y][x] = me.idToComponent(me.map[y][x]);
                    }
                }
                console.log(output);
            });
        }

        // Convert a component name string to id
        Mapmaker.prototype.componentToId = function(component) {
            for (var i = 0; i < this.tiles.length; i++) {
                if (this.tiles[i] === component) {
                    return i;
                }
            }
        };

        // Convert a component id to string name
        Mapmaker.prototype.idToComponent = function(id) {
            return this.tiles[id];
        };

        return Mapmaker;
    })();

    $(function() {
        new Mapmaker();
    });

});
