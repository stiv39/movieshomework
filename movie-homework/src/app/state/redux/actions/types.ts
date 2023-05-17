export type TypedPayload<Type extends string, Payload extends Object> = {
  type: Type
  payload: Payload
}
