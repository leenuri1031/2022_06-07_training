function divMaker (arr, tag, id) {
  let result = '';
  arr.forEach((value, index)=>{
    result += `<${tag}><a href="#${id}-${index}"></a></a></${tag}>`;
  });
  return result;
}

export default divMaker