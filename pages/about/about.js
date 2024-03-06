
document.addEventListener('DOMContentLoaded', (event) => {

  const slices = [
    { percent: 0.20, color: 'purple' },
    { percent: 0.25, color: 'blue' },
    { percent: 0.15, color: 'lime' },
    { percent: 0.30, color: 'yellow' },
    { percent: 0.10, color: 'black' }
  ];

  const svgNamespace = "http://www.w3.org/2000/svg";
  const radius = 100;
  const cx = 150;
  const cy = 150;
  let angleStart = 0;

  slices.forEach(slice => {
    const angleEnd = angleStart + slice.percent * 360;

    const pathData = calculatePieSlice(radius, angleStart, angleEnd, cx, cy);
    const pathElement = document.createElementNS(svgNamespace, "path");
    pathElement.setAttribute("d", pathData);
    pathElement.setAttribute("fill", slice.color);

    document.getElementById("pie-container").appendChild(pathElement);

    angleStart = angleEnd;  // Update the start angle for the next slice
  });

  console.log('DOM fully loaded and parsed');

}
);

function calculatePieSlice(radius, angleStart, angleEnd, cx, cy) {
  const x1 = cx + radius * Math.cos(Math.PI * angleStart / 180);
  const y1 = cy + radius * Math.sin(Math.PI * angleStart / 180);
  const x2 = cx + radius * Math.cos(Math.PI * angleEnd / 180);
  const y2 = cy + radius * Math.sin(Math.PI * angleEnd / 180);

  // This flag is used for SVG arc command (describes which part of the circle is used)
  const largeArcFlag = angleEnd - angleStart <= 180 ? "0" : "1";

  // Constructing the path data using SVG commands
  const d = [
    "M", cx, cy,
    "L", x1, y1,
    "A", radius, radius, 0, largeArcFlag, 1, x2, y2,
    "Z"
  ].join(" ");

  return d;
}
