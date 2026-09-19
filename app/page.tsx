import { HStack } from '@chakra-ui/react';
import React from 'react';

export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem',
        paddingTop: '88px',
      }}
    >
      <HStack style={{ textAlign: 'center', maxWidth: 960, color: '#fff' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Landing Page</h1>
        <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)' }}>
          Welcome — start building your landing page.
        </p>
      </HStack>
    </main>
  );
}
