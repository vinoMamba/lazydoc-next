export type ActionState<Output> = {
  error?: string
  data?: Output | null
}

export type Action<Input, Output = null> = (values?: Input) => Promise<ActionState<Output>>
