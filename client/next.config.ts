import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Habilita a exportação estática
  images: {
    unoptimized: true, // Necessário para que as imagens funcionem em modo estático
  },
}

export default nextConfig
