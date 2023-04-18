const loader = async (initialValue) => {
  const data = await Promise.all(
    [...initialValue].map(async (item, index) => {
      const IconComponent = (await import(`../assets/icons/${item.icon}.jsx`))
        .default;
      return { ...item, icon: <IconComponent key={index} /> };
    })
  );

  return data;
};

export default loader;
