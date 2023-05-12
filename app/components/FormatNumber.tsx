

const FormatNumber = (number: number, caps: boolean) => {
    const suffixes = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion"];
    let suffixIndex = 0;


    if (number < 1000000) {
        return `${number.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
    }

    else {

        while (number >= 1000 && suffixIndex < suffixes.length - 1) {
            number /= 1000;
            suffixIndex++;
        }


        if (caps === true) {
            return `${number.toFixed(3)} ${suffixes[suffixIndex].toUpperCase()}`;
        }
        else {
            return `${number.toFixed(3)} ${suffixes[suffixIndex]}`;
        }

    }


}

export default FormatNumber