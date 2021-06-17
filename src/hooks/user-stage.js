import { useEffect, useState } from 'react';


export const useStage = (num) => {
    const [userStage, setUserStage] = useState(0);

    useEffect(() => {
        setUserStage(num);
    },[]);
    return [userStage, setUserStage];
}
