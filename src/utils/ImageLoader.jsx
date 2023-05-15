const loader = async (initialValue) => {
  const data = await Promise.all(
    [...initialValue].map(async (item) => {
      const image = (await import(`../assets/images/${item.image}.png`))
        .default;
      return { ...item, image: image };
    })
  );
  return data;
};

export default loader;
