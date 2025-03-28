const main = () => {
    return {
        result: input.imagesResult.flatMap(imageRecord => imageRecord.images.map(img => img.documentId)).join(",")
    };
};

main()

/*
 * Output
 * {
 *   "result": 3
 * }
*/

