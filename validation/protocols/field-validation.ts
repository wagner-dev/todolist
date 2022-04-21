interface Schema {
  validate: (value: any, options?: any) => Promise<any>
}
export interface ValidateFieldParams {
  schema: Schema,
  value: any
}
