export function form2json(
  form: HTMLFormElement,
  converter?: (v: any) => any
) {
  const data = new FormData(form)
  const json: { [key: string]: any } = {}
  for (let [key, value] of data.entries()) {
    if (converter) {
      value = converter(value)
    }
    if (key in json) {
      if (json[key] instanceof Array) {
        ;(json[key] as Array<any>).push(value)
      } else {
        json[key] = [json[key], value]
      }
    } else {
      json[key] = value
    }
  }
  return json
}
/*
JSON.stringify(Object.fromEntries(formData));
// 对数组类型input无效
*/
