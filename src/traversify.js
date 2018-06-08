export default function Traversify(items) {
  let index = 0;

  const next = () => {
    if (index < items.length - 1) index += 1;
    return items[index];
  };

  const prev = () => {
    if (index > 0) index -= 1;
    return items[index];
  };

  return { next, prev };
}
