/**
 * Returns the tax component of a given gross price.
 */
export function taxComponentOf(grossPrice: number, taxRatePc: number): number {
    return Math.round(grossPrice - grossPrice / ((100 + taxRatePc) / 100));
}

/**
 * Given a gross (tax-inclusive) price, returns the net price.
 */
export function netPriceOf(grossPrice: number, taxRatePc: number): number {
    return grossPrice - taxComponentOf(grossPrice, taxRatePc);
}

/**
 * Returns the tax applicable to the given net price.
 */
export function taxPayableOn(netPrice: number, taxRatePc: number): number {
    return Math.round(netPrice * (taxRatePc / 100));
}

/**
 * Given a net price, return the gross price (net + tax)
 */
export function grossPriceOf(netPrice: number, taxRatePc: number): number {
    return netPrice + taxPayableOn(netPrice, taxRatePc);
}

export function customTaxPayableOn(netPrice: number, taxRatePc: number) {
    let price = Math.abs(netPrice * (taxRatePc / 100))
    return (netPrice > 0) ? price : -price ;
}


/**
 * Given a net price, return the gross price (net + tax)
 */
export function customGrossPriceOf(netPrice: number, taxRatePc: number) {
    return netPrice + customTaxPayableOn(netPrice, taxRatePc);
}

