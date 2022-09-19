"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHoursToMinutes = void 0;
function convertHoursToMinutes(hourString) {
    const [hours, minutes] = hourString.split(":").map(Number);
    const minutesAmount = hours * 60 + minutes;
    return minutesAmount;
}
exports.convertHoursToMinutes = convertHoursToMinutes;
