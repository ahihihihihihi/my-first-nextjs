

export async function Delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};