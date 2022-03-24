/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    compiler: {
        // ssr and displayName are configured by default
        styledComponents: true,
        removeConsole: {
            exclude:
                process.env.NODE_ENV === "development"
                    ? ["log", "error"]
                    : ["error"],
        },
    },
};

module.exports = nextConfig;
