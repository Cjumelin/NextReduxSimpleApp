export default function() {
    let acc: Array<any> = [];
    let arr = [ ...this];

    arr.forEach(child => {
        if (Array.isArray(child)) {
            return acc = [...acc, ...child];
        }
        return acc = [...acc, child]
    });

    return (acc.length ? acc : arr);
};