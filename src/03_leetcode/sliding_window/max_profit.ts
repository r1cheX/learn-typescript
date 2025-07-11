function maxProfit(prices: number[]): number {
    let minStock = Infinity;
    let maxProfit = 0;

    for (let currentStock of prices) {
        if (currentStock < minStock) {
            minStock = currentStock;
        }

        const currentProfit = currentStock - minStock;

        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
    }

    return maxProfit;
};

const listStocks = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(listStocks))