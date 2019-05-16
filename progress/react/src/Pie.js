import React from 'react';
import {getCoordinates } from './utilities';


export const Pie = ({ percent=100, size=24, color, ring=10, outline, style, ...props }) => { 
  let stroke = Math.max(1,Math.min(10, Math.round(ring)));
  const iconStroke = 2;
  stroke = Math.max(stroke, 2 * iconStroke + 1)
  
  // Ring properties
  const centerX = 12;
  const centerY = 12;

  // Outer ring
  const outerRadiusLarge = 10;
  const innerRadiusLarge = 10 - iconStroke;

  // Inner ring
  let outerRadiusSmall = 10 - stroke + iconStroke;
  const innerRadiusSmall = 10 - stroke;
  if(innerRadiusSmall === 0){
    outerRadiusSmall = 0;
  }

  const outlineBase = `
    M ${centerX} ${centerY-outerRadiusLarge}
    A ${outerRadiusLarge} ${outerRadiusLarge} 0 1 0 ${centerX} ${centerY+outerRadiusLarge}
    A ${outerRadiusLarge} ${outerRadiusLarge} 0 1 0 ${centerX} ${centerY-outerRadiusLarge}
    Z
    M ${centerX} ${centerY-innerRadiusLarge}
    A ${innerRadiusLarge} ${innerRadiusLarge} 0 1 1 ${centerX} ${centerY+innerRadiusLarge}
    A ${innerRadiusLarge} ${innerRadiusLarge} 0 1 1 ${centerX} ${centerY-innerRadiusLarge}
    Z
    M ${centerX} ${centerY-outerRadiusSmall}
    A ${outerRadiusSmall} ${outerRadiusSmall} 0 1 0 ${centerX} ${centerY+outerRadiusSmall}
    A ${outerRadiusSmall} ${outerRadiusSmall} 0 1 0 ${centerX} ${centerY-outerRadiusSmall}
    Z
    M ${centerX} ${centerY-innerRadiusSmall}
    A ${innerRadiusSmall} ${innerRadiusSmall} 0 1 1 ${centerX} ${centerY+innerRadiusSmall}
    A ${innerRadiusSmall} ${innerRadiusSmall} 0 1 1 ${centerX} ${centerY-innerRadiusSmall}
    Z
  `;
  const twoToneBase = `
    M ${centerX} ${centerY-outerRadiusLarge}
    A ${outerRadiusLarge} ${outerRadiusLarge} 0 1 0 ${centerX} ${centerY+outerRadiusLarge}
    A ${outerRadiusLarge} ${outerRadiusLarge} 0 1 0 ${centerX} ${centerY-outerRadiusLarge}
    Z
  `;
  const clipPath = `
    M12,2
    A10,10,0,1,0,22,12,
    10,10,0,0,0,12,2
    Z
    m0,${20-stroke} 
    A ${10-stroke},${10-stroke},0,1,1,${22-stroke},12,
    ${10-stroke},${10-stroke},0,0,1,12,${22-stroke}
    Z
  `;

  return(
  <svg height={`${size}px`} width={`${size}px`} x="0px" y="0px" viewBox="0 0 24 24" style={Object.assign({transform: 'rotate(-.25turn)'},style)} {...props}>
        <clipPath id={"pxb-donut-clip-"+stroke}>
          <path d={clipPath}/>
        </clipPath>
        <path clipPath={"url(#pxb-donut-clip-"+stroke+")"} 
          fill={color || "currentColor"} 
          fillOpacity={(outline || percent >= 100) ? "1" : "0.3"}
          d={outline ? outlineBase : twoToneBase}
        />
        {percent > 0 && percent < 100 && 
          <path fill={color || "currentColor"} clipPath={"url(#pxb-donut-clip-"+stroke+")"} d={`M 12,12 H 24 A 12,12,0,${percent>=50?1:0},1,${getCoordinates(percent)['x']},${getCoordinates(percent)['y']}Z`} />
        }
        {percent === 100 && outline &&
          <circle clipPath={"url(#pxb-donut-clip-"+stroke+")"} cx="12" cy="12" r="10" fill={color || "currentColor"}></circle>
        }
</svg>
)};