
import Dotenv from 'dotenv-webpack';

export const plugins = [
    new Dotenv({})
];
export const resolve = {
    fallback: {
        "path": require.resolve("path-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "crypto": require.resolve("crypto-browserify"),
    }
};