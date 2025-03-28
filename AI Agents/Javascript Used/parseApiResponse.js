const main = () => {
    const data = input.data;
    return {
        result: data,
        symbolList: data.map(item => item.symbol).join(",")
    }
};

main();