import { onMounted, onUnmounted } from 'vue';

const GridWrapperElementId = "canvas-wrapper";
const CellsCanvasContextId = "canvas-grid-cells";
const LinesCanvasContextId = "canvas-grid-lines";

function getDocumentHeight() {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}

function getDocumentWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

class AnimatedLine {
  constructor(context, left, top, gridHeight) {
    this.context = context;
    this.color = "hsla(180, 100%, 75%, 0.075)";
    this.gridHeight = gridHeight;
    this.height = randomRange(25, 150);
    this.speed = randomRange(1, 5);
    this.left = left;
    this.top = top;
    this.width = 1;
  }

  render() {
    this.context.fillStyle = this.color;
    this.context.fillRect(this.left, this.top, this.width, this.height);
  }

  update() {
    this.top -= this.speed;
    if (this.top < -this.gridHeight) {
      this.top = this.gridHeight;
      this.height = randomRange(25, 150);
      this.speed = randomRange(1, 5);
    }
    this.render();
  }
}

export function useAnimatedGrid() {
  let gridWrapperElement, cellsCanvasElement, linesCanvasElement;
  let cellsCanvasContext, linesCanvasContext;
  let gridSize = { width: 0, height: 0 };
  let gridCellSize = { width: 30, height: 30, radius: 2 };
  let animatedLines = [];
  let firstRender = true;
  function createAnimatedLines() {
    animatedLines = [];
    for (let x = gridCellSize.width; x <= gridSize.width; x += gridCellSize.width) {
      let y = firstRender ? randomRange(gridSize.height * 2, gridSize.height * 4) : randomRange(0, gridSize.height * 2);
      animatedLines.push(new AnimatedLine(linesCanvasContext, x, y, gridSize.height));
    }
    firstRender = false;
  }

  function drawGridDots() {
    let fillStyle = "hsla(180, 100%, 75%, 0.05)";
    for (let x = gridCellSize.width; x < gridSize.width; x += gridCellSize.width) {
      for (let y = gridCellSize.height; y < gridSize.height; y += gridCellSize.height) {
        cellsCanvasContext.beginPath();
        cellsCanvasContext.arc(x, y, 1, 0, Math.PI * 2);
        cellsCanvasContext.fillStyle = fillStyle;
        cellsCanvasContext.fill();
        cellsCanvasContext.strokeStyle = fillStyle;
        cellsCanvasContext.stroke();
      }
    }
  }

  function drawGridFrame(height, size) {
    cellsCanvasContext.clearRect(0, 0, gridSize.width, gridSize.height);
    cellsCanvasContext.strokeStyle = "hsla(180, 100%, 75%, 0.05)";
    cellsCanvasContext.beginPath();
    for (let x = 0; x <= gridSize.width; x += gridCellSize.width) {
      cellsCanvasContext.moveTo(x, 0);
      cellsCanvasContext.lineTo(x, height);
    }
    cellsCanvasContext.stroke();
    cellsCanvasContext.beginPath();
    cellsCanvasContext.setLineDash([size, size]);
    for (let y = 0; y <= height; y += gridCellSize.height) {
      cellsCanvasContext.moveTo(0, y);
      cellsCanvasContext.lineTo(gridSize.width, y);
    }
    cellsCanvasContext.stroke();
  }

  function drawGrid() {
    drawGridFrame(gridSize.height, 5);
    drawGridDots();
  }

  function onAnimationFrame() {
    requestAnimationFrame(onAnimationFrame);
    linesCanvasContext.clearRect(0, 0, gridSize.width, gridSize.height);
    animatedLines.forEach(line => line.update());
  }

  function onResize() {
    gridSize.width = getDocumentWidth();
    gridSize.height = getDocumentHeight();
    resizeGrid();
  }

  function resizeGrid() {
    cellsCanvasElement.width = linesCanvasElement.width = gridSize.width;
    cellsCanvasElement.height = linesCanvasElement.height = gridSize.height;
    createAnimatedLines();
    drawGrid();
  }

  function showAnimated() {
    resizeGrid();
    gridWrapperElement.animate({ opacity: [0, 1] }, { duration: 1000 }).onfinish = () => {
      gridWrapperElement.style.opacity = "1";
    };
    drawGrid();
  }

  onMounted(() => {
    gridWrapperElement = document.getElementById(GridWrapperElementId);
    cellsCanvasElement = document.getElementById(CellsCanvasContextId);
    linesCanvasElement = document.getElementById(LinesCanvasContextId);
    if (!gridWrapperElement || !cellsCanvasElement || !linesCanvasElement) return;
    cellsCanvasContext = cellsCanvasElement.getContext("2d");
    linesCanvasContext = linesCanvasElement.getContext("2d");
    window.addEventListener("resize", onResize);
    showAnimated();
    setTimeout(onAnimationFrame, 1500);
    onResize()
  })
  
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
}
