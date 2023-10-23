import React from 'react'

export function CharmSearch(props) {
  
const svgStyles = {
  filter: 'drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.5)',
};
  return (
    <svg style={svgStyles} xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16" {...props}><g fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" ><path d="m11.25 11.25l3 3" ></path><circle cx="7.5" cy="7.5" r="4.75"></circle></g></svg>
  )
}
export default CharmSearch