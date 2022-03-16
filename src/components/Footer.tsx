import React from 'react'

const date: Date = new Date();
const year: number = date.getFullYear();

export const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {year} Brannon Lee</p>
    </footer>
  );
}