export default function() {
    let acc: Array<any> = [];
    let arr: Array<any> = [ ...this];

    arr.forEach(child => {
        if (Array.isArray(child)) {
            return acc = [...acc, ...child];
        }
        return acc = [...acc, child]
    });

    return acc;
};