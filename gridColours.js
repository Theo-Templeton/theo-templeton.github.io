function getRandomColor() {
    var colour = (360 * Math.random());
    var colours = [`hsl(${~~(colour)}, 70%, 80%)`];
    return colours;
  }

function gridColours() {
    var grid = document.getElementById("grid")
    var children = grid.children;
    for (var i = 0; i < children.length; i++) {
        var gridSquare = children[i];
        var boxColour = getRandomColor();
        gridSquare.setAttribute('style', `background-color: ${boxColour[0]};`);
    }
}