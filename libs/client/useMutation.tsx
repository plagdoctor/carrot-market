import { useState } from "react";

interface useMutationState {
    loading: boolean;
    data?: object;
    error?: object;
}
type UseMutationResult = [(data: any) => void, useMutationState]

export default function useMutation(url: string): UseMutationResult {
    const [state, setState] = useState({
        loading: false,
        data: undefined,
        error:undefined,
      });
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<undefined | any>(undefined);
    const [error, setError] = useState<undefined | any>(undefined);
    function mutation(data: any) {
        setLoading(true);
        fetch(url, {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json().catch(() => {} ))
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
        ;
    }
    return [mutation, {loading, data, error} ];
}