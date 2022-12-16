const today = new Date();
const quarter = Math.floor((today.getMonth() / 3));

const startFullQuarter = new Date(today.getFullYear(), quarter * 3, 1);
const endFullQuarter = new Date(startFullQuarter.getFullYear(), startFullQuarter.getMonth() + 3, 0);

const startPFullQuarter = new Date(today.getFullYear(), quarter * 3 - 3, 1);
const endPFullQuarter = new Date(startPFullQuarter.getFullYear(), startPFullQuarter.getMonth() + 3, 0);
