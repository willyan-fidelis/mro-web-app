var dateFormat = require('dateformat');

export function getDate(date: Date): string {
    return dateFormat(new Date(date), "dd/mm/yyyy")
}

export function getTime(date: Date): string {
    return dateFormat(new Date(date), "HH:MM")
}