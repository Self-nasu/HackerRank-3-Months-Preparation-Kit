function flippingBits(n) {
    // XOR with 4294967295 to flip all bits in a 32-bit integer
    return (n ^ 4294967295) >>> 0;
}

// This line of code involves two key operations:

// Bitwise XOR (^): n ^ 4294967295
// Unsigned Right Shift (>>> 0)
// Each part plays a specific role in achieving the desired unsigned integer result after flipping the bits. Let’s break it down.