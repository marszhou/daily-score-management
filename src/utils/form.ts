export function form2json(form:HTMLFormElement) {
  const data = new FormData(form)
  const json:{[key:string]: any} = {}
  for (const [key, value] of data.entries()) {
    if (key in json) {
      if (json[key] instanceof Array) {
        (json[key] as Array<any>).push(value)
      } else {
        json[key] = [value]
      }
    } else {
      json[key] = value
    }
  }
  return json
}