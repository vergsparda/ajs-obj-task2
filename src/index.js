export default function getSkills(obj, num) {
  const result = [];
  obj.special.forEach((el) => {
    if (el.id === num) {
      const {
        id, name, icon, description = 'Описание недоступно',
      } = el;
      result.push({
        id, name, icon, description,
      });
    }
  });
  return result;
}
