module.exports = ({
  mapName = '',
  keyName = undefined,
  filter = () => true,
}) => (defs) => {
  const declarations = defs
    .get('props')
    .filter(filter)
    .map((prop) => {
      const k = keyName
        ? keyName(prop)
        : prop.get('name').toLowerCase().replace(/_/g, '-');

      const v =
        prop.get('type') === 'string'
          ? `'${prop.get('value')}`
          : prop.get('value');

      return `  '${k}': ${v}`;
    });

  return `${mapName}: (
${declarations.join(',\n')}
) !default;
`;
};
