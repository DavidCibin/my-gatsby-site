import React from 'react';

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto 0`, maxWidth: 850, padding: `0 1rem` }}>
      <main>
        {children}
      </main>
    </div>
  )
}