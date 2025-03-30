const instanceOf = <T>(value: any, fieldName: string): value is T =>
    fieldName in value;

export {
    instanceOf
}