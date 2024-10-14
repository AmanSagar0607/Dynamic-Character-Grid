import { useState, useEffect, useCallback, useMemo } from "react";

const App = () => {
  const [gridWidth, setGridWidth] = useState(75);
  const [cellSize] = useState(20);
  const GRID_HEIGHT = 5;

  const [grid, setGrid] = useState(() =>
    Array(GRID_HEIGHT)
      .fill()
      .map(() => Array(gridWidth).fill(0))
  );

  const [textColor, setTextColor] = useState("#FF0000");
  const [textPosition, setTextPosition] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true); // Animation control

  // message
  const text =
    "Hello, I am Aman Sagar a passionate Full Stack Developer and Web UI Designer I am excited about the opportunity to join FOG as a Software Developer Intern where I can leverage my skills in JavaScript React and UI UX design to create impactful solutions With hands on experience in developing innovative projects like ToolHunt I am eager to contribute to  mission of fog  and further enhance my skills in a collaborative environment";
  // Memoize charPatterns
  // Memoize charPatterns
  const charPatterns = useMemo(
    () => ({
      A: [
        [0, 1, 0],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
      ],
      B: [
        [1, 1, 0],
        [1, 0, 1],
        [1, 1, 0],
        [1, 0, 1],
        [1, 1, 0],
      ],
      C: [
        [0, 1, 1],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [0, 1, 1],
      ],
      D: [
        [1, 1, 0],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 0],
      ],
      E: [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 0],
        [1, 0, 0],
        [1, 1, 1],
      ],
      F: [
        [1, 1, 1],
        [1, 0, 0],
        [1, 1, 0],
        [1, 0, 0],
        [1, 0, 0],
      ],
      G: [
        [0, 1, 1],
        [1, 0, 0],
        [1, 0, 1],
        [1, 0, 1],
        [0, 1, 1],
      ],
      H: [
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 1],
        [1, 0, 1],
        [1, 0, 1],
      ],
      I: [
        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 1],
      ],
      J: [
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
      ],
      K: [
        [1, 0, 1],
        [1, 0, 1],
        [1, 1, 0],
        [1, 0, 1],
        [1, 0, 1],
      ],
      L: [
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 1],
      ],
      M: [
        [1, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
      ],
      N: [
        [1, 0, 0, 1],
        [1, 1, 0, 1],
        [1, 0, 1, 1],
        [1, 0, 0, 1],
        [1, 0, 0, 1],
      ],
      O: [
        [0, 1, 0],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
      ],
      P: [
        [1, 1, 0],
        [1, 0, 1],
        [1, 1, 0],
        [1, 0, 0],
        [1, 0, 0],
      ],
      Q: [
        [0, 1, 0],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [0, 1, 1],
      ],
      R: [
        [1, 1, 0],
        [1, 0, 1],
        [1, 1, 0],
        [1, 0, 1],
        [1, 0, 1],
      ],
      S: [
        [0, 1, 1],
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 0],
      ],
      T: [
        [1, 1, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ],
      U: [
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
      ],
      V: [
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
      ],
      W: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 1, 0, 1, 1],
        [1, 0, 0, 0, 1],
      ],
      X: [
        [1, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [1, 0, 1],
        [1, 0, 1],
      ],
      Y: [
        [1, 0, 1],
        [1, 0, 1],
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
      ],
      Z: [
        [1, 1, 1],
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0],
        [1, 1, 1],
      ],
      " ": [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ],
    }),
    []
  );

  // Change color every 2 seconds
  useEffect(() => {
    const getRandomNormalColor = () => {
      const r = Math.floor(Math.random() * 128) + 64; // Range: 64-192
      const g = Math.floor(Math.random() * 128) + 64; // Range: 64-192
      const b = Math.floor(Math.random() * 128) + 64; // Range: 64-192
      return `#${r.toString(16).padStart(2, "0")}${g
        .toString(16)
        .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
    };

    setTextColor("#FF0000");

    const colorInterval = setInterval(() => {
      setTextColor(getRandomNormalColor());
    }, 2000);

    return () => clearInterval(colorInterval);
  }, []);

  // Move text
  useEffect(() => {
    const calculateGridWidth = () => {
      const totalTextWidth = text.split("").reduce((width, char) => {
        const pattern = charPatterns[char.toUpperCase()] || charPatterns[" "];
        return width + pattern[0].length + 1; // Add letter width and gap
      }, 0);
      return totalTextWidth;
    };

    const newGridWidth = calculateGridWidth();
    setGridWidth(newGridWidth);
  }, [text, charPatterns]);

  // Animation interval
  useEffect(() => {
    if (isAnimating) {
      const textInterval = setInterval(() => {
        setTextPosition((prev) => (prev + 1) % gridWidth); // Loop back to 0
      }, 40); // Change to a smaller value for faster animation
      return () => clearInterval(textInterval);
    }
  }, [gridWidth, isAnimating]);

  const updateGrid = useCallback(() => {
    const newGrid = Array(GRID_HEIGHT)
      .fill()
      .map(() => Array(gridWidth).fill(0));
    let currentColumn = gridWidth - textPosition;
    const letterGap = 1;

    for (let char of text.toUpperCase()) {
      const pattern = charPatterns[char] || charPatterns[" "];
      for (let i = 0; i < pattern.length; i++) {
        for (let j = 0; j < pattern[i].length; j++) {
          const column = (currentColumn + j) % gridWidth;
          if (i < GRID_HEIGHT) {
            newGrid[i][column] = pattern[i][j];
          }
        }
      }
      currentColumn += pattern[0].length + letterGap;
    }
    setGrid(newGrid);
  }, [text, textPosition, gridWidth, charPatterns]);

  useEffect(() => {
    updateGrid();
  }, [updateGrid]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 p-6">
      <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-5xl text-white mb-8"> A Short Interactive Introduction
      </h1>

      <button
        onClick={() => setIsAnimating((prev) => !prev)}
        className={`mb-8 p-2 rounded ${
          isAnimating ? "bg-red-500" : "bg-green-500"
        } text-white`}
      >
        {isAnimating ? "Stop Animation" : "Start Animation"}
      </button>
      <div className="bg-black border-4 border-blue-950 rounded-lg p-4 md:p-8 shadow-lg max-w-full overflow-hidden">
        <div
          className="grid gap-px md:gap-0.5"
          style={{ gridTemplateColumns: `repeat(${gridWidth}, ${cellSize}px)` }}
        >
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                 className="grid-cell"
                style={{
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: cell ? textColor : "#1e1e1e",
                }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
