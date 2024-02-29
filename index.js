import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_4Qter0rd0RX7gyfAedn5tCj5Oc81zTXDtVLRjWmr');

export async function convertCurrency(from, to, units) {
    const res = await freecurrencyapi.latest({
        base_currency: from,
        currencies: to
    })
    const multiplier = res.data[to];
    return multiplier*units
}

