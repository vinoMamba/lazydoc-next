import { Action } from "@/types/action";
import { useCallback, useState, useTransition } from "react";

export const useAction = <I, O = null>(
  action: Action<I, O>,
  options?: {
    onSuccess?: (data: any) => void
    onError?: (error: any) => void
    onCompleted?: () => void
  }
) => {
  const [isPending, setTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [data, setData] = useState<any>(null)

  const execute = useCallback(
    (values: I) => {
      setTransition(() => {
        setError(null)
        setData(null)
        action(values)
          .then((result) => {
            if (result.error) {
              setError(result.error)
              options?.onError?.(result.error)
            } else {
              setData(result.data)
              options?.onSuccess?.(result.data)
            }
          })
          .catch((error) => {
            setError(error)
            options?.onError?.(error)
          })
          .finally(() => {
            options?.onCompleted?.()
          })
      })
    },
    [action, setTransition]
  )

  return {
    isPending,
    error,
    data,
    execute
  }
}
