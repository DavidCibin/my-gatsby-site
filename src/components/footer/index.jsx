import React from 'react';

export default function Footer() {
  return (
    <footer style={{textAlign: "right"}}>
      <p><small>&copy; {new Date().getFullYear()} David Stinson</small></p>
    </footer>
  )
}