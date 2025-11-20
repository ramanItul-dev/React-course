import {it,expect,describe} from "vitest";
import {formatMoney} from "./money";

describe("formatMoney", () => {
    it("formats money correctly for whole dollar amounts", () => {
    expect(formatMoney(5000)).toBe("$50.00");
    });

    it("formats money correctly for dollar amounts with cents", () => {
    const formatted = formatMoney(5050);
        expect(formatted).toBe("$50.50");
    });

    it("formats money correctly for amounts less than one dollar", () => {
    const formatted = formatMoney(50);
        expect(formatted).toBe("$0.50");
    });

    it("formats money correctly for zero cents", () => {
    const formatted = formatMoney(0);
        expect(formatted).toBe("$0.00");
    });
});