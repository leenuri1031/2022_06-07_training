function SectionMaker (arr, tag, id) {
  let result = '';
  arr.forEach((value, index)=>{
    result += `<${tag} id="${id}-${index}"></${tag}>`;
  });
  return result;
}
export default SectionMaker