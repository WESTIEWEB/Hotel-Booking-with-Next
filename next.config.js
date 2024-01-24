/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'res.cloudinary.com', 'lh3.googleusercontent.com', process.env.NEXT_AUTH_URL],
    }
}

module.exports = nextConfig
