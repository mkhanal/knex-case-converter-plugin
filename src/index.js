//do not use underscore camel to snake case, does not work
import decamelize from 'decamelize';
import camelCase from 'camelcase';

function wrapIdentifier(value, origImpl) {
  return origImpl(decamelize(value));
}

function postProcessResponse(result) {
  function mapKeysToCamelCase(obj) {
    const transformed = {};
    Object.keys(obj).forEach(key => transformed[camelCase(key)] = obj[key]);
    return transformed;
  }

  if(!result) return result;

  if (Array.isArray(result)) return result.map(row => mapKeysToCamelCase(row));
  return mapKeysToCamelCase(result);
}

export { wrapIdentifier, postProcessResponse };
export default { wrapIdentifier, postProcessResponse };
