import { useEffect, useState } from 'react';

const useFetchData = () => {
    const [datas, setDatas] = useState(null);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => {
                setDatas(data)

            })
    }, [])
    return [datas];
};

export default useFetchData;