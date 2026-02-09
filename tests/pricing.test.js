const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
    expect(1 + 1).toBe(2);
});

test("Check for invalid sub total", () => {
    expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
        "Invalid subtotal",
    );
});

test("COUPON is not passed", () => {
    const expectedValue = calculateFinalAmount(100)
    expect(expectedValue).toEqual(Math.max(0, Math.round(100 * 100) / 100))
})


test("COUPON is SAVE10", () => {
    const expectedValue = calculateFinalAmount(100, "SAVE10")
    expect(expectedValue).toEqual(90)
})


test("COUPON is FLAT50", () => {
    const expectedValue = calculateFinalAmount(100, "FLAT50")
    expect(expectedValue).toEqual(Math.max(0, Math.round(50 * 100) / 100))
})


test("for all other COUPONS", () => {
    expect(() => calculateFinalAmount(100, "Other")).toThrow("Invalid Coupon")
});