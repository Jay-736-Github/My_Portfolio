// "use client";
// import { useEffect } from "react";

// export default function LiquidGlass() {
//   useEffect(() => {
//     // Utility functions
//     if (window.innerWidth < 768) return;
//     const smoothStep = (a, b, t) => {
//       t = Math.max(0, Math.min(1, (t - a) / (b - a)));
//       return t * t * (3 - 2 * t);
//     };

//     const length = (x, y) => Math.sqrt(x * x + y * y);

//     const roundedRectSDF = (x, y, width, height, radius) => {
//       const qx = Math.abs(x) - width + radius;
//       const qy = Math.abs(y) - height + radius;
//       return (
//         Math.min(Math.max(qx, qy), 0) +
//         length(Math.max(qx, 0), Math.max(qy, 0)) -
//         radius
//       );
//     };

//     const texture = (x, y) => ({ type: "t", x, y });

//     const generateId = () =>
//       "liquid-glass-" + Math.random().toString(36).substr(2, 9);

//     class Shader {
//       constructor(options = {}) {
//         this.width = options.width || 300;
//         this.height = options.height || 200;
//         this.fragment = options.fragment;
//         this.canvasDPI = 1;
//         this.id = generateId();
//         this.offset = 10;

//         this.mouse = { x: 0, y: 0 };
//         this.mouseUsed = false;

//         this.createElement();
//         this.setupEventListeners();
//         this.updateShader();
//       }

//       createElement() {
//         this.container = document.createElement("div");
//         this.container.style.cssText = `
//           position: fixed;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: ${this.width}px;
//           height: ${this.height}px;
//           overflow: hidden;
//           border-radius: 150px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25), 0 -10px 25px inset rgba(0, 0, 0, 0.15);
//           cursor: grab;
//           backdrop-filter: url(#${this.id}_filter) blur(0.25px) contrast(1.2) brightness(1.05) saturate(1.1);
//           z-index: 9999;
//           pointer-events: auto;
//         `;

//         this.svg = document.createElementNS(
//           "http://www.w3.org/2000/svg",
//           "svg"
//         );
//         this.svg.setAttribute("width", "0");
//         this.svg.setAttribute("height", "0");
//         this.svg.style.cssText = `position: fixed; top: 0; left: 0; pointer-events: none; z-index: 9998;`;

//         const defs = document.createElementNS(
//           "http://www.w3.org/2000/svg",
//           "defs"
//         );
//         const filter = document.createElementNS(
//           "http://www.w3.org/2000/svg",
//           "filter"
//         );
//         filter.setAttribute("id", `${this.id}_filter`);

//         this.feImage = document.createElementNS(
//           "http://www.w3.org/2000/svg",
//           "feImage"
//         );
//         this.feImage.setAttribute("id", `${this.id}_map`);
//         this.feImage.setAttribute("width", this.width.toString());
//         this.feImage.setAttribute("height", this.height.toString());

//         this.feDisplacementMap = document.createElementNS(
//           "http://www.w3.org/2000/svg",
//           "feDisplacementMap"
//         );
//         this.feDisplacementMap.setAttribute("in", "SourceGraphic");
//         this.feDisplacementMap.setAttribute("in2", `${this.id}_map`);
//         this.feDisplacementMap.setAttribute("xChannelSelector", "R");
//         this.feDisplacementMap.setAttribute("yChannelSelector", "G");

//         filter.appendChild(this.feImage);
//         filter.appendChild(this.feDisplacementMap);
//         defs.appendChild(filter);
//         this.svg.appendChild(defs);

//         this.canvas = document.createElement("canvas");
//         this.canvas.width = this.width * this.canvasDPI;
//         this.canvas.height = this.height * this.canvasDPI;
//         this.canvas.style.display = "none";

//         this.context = this.canvas.getContext("2d");
//       }

//       constrainPosition(x, y) {
//         const minX = this.offset;
//         const maxX = window.innerWidth - this.width - this.offset;
//         const minY = this.offset;
//         const maxY = window.innerHeight - this.height - this.offset;

//         return {
//           x: Math.max(minX, Math.min(maxX, x)),
//           y: Math.max(minY, Math.min(maxY, y)),
//         };
//       }

//       setupEventListeners() {
//         let isDragging = false;
//         let startX, startY, initialX, initialY;

//         this.container.addEventListener("mousedown", (e) => {
//           isDragging = true;
//           this.container.style.cursor = "grabbing";
//           startX = e.clientX;
//           startY = e.clientY;
//           const rect = this.container.getBoundingClientRect();
//           initialX = rect.left;
//           initialY = rect.top;
//           e.preventDefault();
//         });

//         document.addEventListener("mousemove", (e) => {
//           if (isDragging) {
//             const deltaX = e.clientX - startX;
//             const deltaY = e.clientY - startY;

//             const newX = initialX + deltaX;
//             const newY = initialY + deltaY;

//             const constrained = this.constrainPosition(newX, newY);

//             this.container.style.left = constrained.x + "px";
//             this.container.style.top = constrained.y + "px";
//             this.container.style.transform = "none";
//           }

//           const rect = this.container.getBoundingClientRect();
//           this.mouse.x = (e.clientX - rect.left) / rect.width;
//           this.mouse.y = (e.clientY - rect.top) / rect.height;

//           if (this.mouseUsed) this.updateShader();
//         });

//         document.addEventListener("mouseup", () => {
//           isDragging = false;
//           this.container.style.cursor = "grab";
//         });

//         window.addEventListener("resize", () => {
//           const rect = this.container.getBoundingClientRect();
//           const constrained = this.constrainPosition(rect.left, rect.top);

//           this.container.style.left = constrained.x + "px";
//           this.container.style.top = constrained.y + "px";
//           this.container.style.transform = "none";
//         });
//       }

//       updateShader() {
//         const mouseProxy = new Proxy(this.mouse, {
//           get: (target, prop) => {
//             this.mouseUsed = true;
//             return target[prop];
//           },
//         });

//         this.mouseUsed = false;

//         const w = this.width * this.canvasDPI;
//         const h = this.height * this.canvasDPI;
//         const data = new Uint8ClampedArray(w * h * 4);

//         let maxScale = 0;
//         const rawValues = [];

//         for (let i = 0; i < data.length; i += 4) {
//           const x = (i / 4) % w;
//           const y = Math.floor(i / 4 / w);
//           const pos = this.fragment({ x: x / w, y: y / h }, mouseProxy);
//           const dx = pos.x * w - x;
//           const dy = pos.y * h - y;
//           maxScale = Math.max(maxScale, Math.abs(dx), Math.abs(dy));
//           rawValues.push(dx, dy);
//         }

//         maxScale *= 0.5;

//         let index = 0;
//         for (let i = 0; i < data.length; i += 4) {
//           const r = rawValues[index++] / maxScale + 0.5;
//           const g = rawValues[index++] / maxScale + 0.5;
//           data[i] = r * 255;
//           data[i + 1] = g * 255;
//           data[i + 2] = 0;
//           data[i + 3] = 255;
//         }

//         this.context.putImageData(new ImageData(data, w, h), 0, 0);
//         this.feImage.setAttributeNS(
//           "http://www.w3.org/1999/xlink",
//           "href",
//           this.canvas.toDataURL()
//         );
//         this.feDisplacementMap.setAttribute(
//           "scale",
//           (maxScale / this.canvasDPI).toString()
//         );
//       }

//       appendTo(parent) {
//         parent.appendChild(this.svg);
//         parent.appendChild(this.container);
//       }
//     }

//     const shader = new Shader({
//       width: 300,
//       height: 200,
//       fragment: (uv, mouse) => {
//         const ix = uv.x - 0.5;
//         const iy = uv.y - 0.5;
//         const distanceToEdge = roundedRectSDF(ix, iy, 0.3, 0.2, 0.6);
//         const displacement = smoothStep(0.8, 0, distanceToEdge - 0.15);
//         const scaled = smoothStep(0, 1, displacement);
//         return texture(ix * scaled + 0.5, iy * scaled + 0.5);
//       },
//     });

//     shader.appendTo(document.body);

//     return () => {
//       shader.destroy(); // Cleanup on unmount
//     };
//   }, []);

//   return null; // This component only adds the effect, no DOM output needed
// }
