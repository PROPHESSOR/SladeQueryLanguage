const REQUEST_TYPES = ['select', 'update', 'deselect', 'delete', 'count'] as const;
type TRequestTypes = typeof REQUEST_TYPES[number];
const REQUEST_SUBJECTS = ['vertexes', 'lines', 'sectors', 'things'] as const;
type TRequestSubjects = typeof REQUEST_SUBJECTS[number];
const REQUEST_SIDES = ['front', 'back', 'both'] as const;
type TRequestSides = typeof REQUEST_SIDES[number];

interface IRequest {
  type: TRequestTypes | null;
  subject: TRequestSubjects | null;
  values?: string[];
  filter: string[];
  side?: TRequestSides;
}

function processQuery(query: string) {
  const request = parseQuery(query);

  return request;
}

function parseQuery(query: string) {
  const tokens = tokenize(query);

  const request: IRequest = {
    type: null,
    subject: null,
    filter: []
  };

  const type = tokens.shift()?.toLowerCase();

  if (!REQUEST_TYPES.includes(type as any))
    throw new Error(`Unknown request type ${type}. Only these are supported: ${REQUEST_TYPES}`);
  
  request.type = type as TRequestTypes;

  const subject = tokens.shift()?.toLowerCase();

  if (!REQUEST_SUBJECTS.includes(subject as any))
    throw new Error(`Unknown request subject ${subject}. Only these are supported: ${REQUEST_SUBJECTS}`);

  request.subject = subject as TRequestSubjects;

  if (request.type === 'update') {
    const set = tokens.shift()?.toLowerCase();

    if (set !== 'set') throw new Error(`Usage: UPDATE ${request.subject} SET key1=value1 key2=value2 ...`);

    request.values = [];

    while (true) {
      if (tokens[0] === 'where') break;

      const shift = tokens.shift();

      if (!shift) break;

      if (!shift.includes('='))
        throw new Error(`Unknown assignment "${shift}"! Assignments should have format key=value without spaces`);

      request.values.push(shift);
    }
  }

  const where = tokens.shift()?.toLowerCase();

  if (where) {
    if (where !== 'where') throw new Error(`Unknown keyword ${where}! Expected WHERE`);

    while (true) {
      const shift = tokens.shift();

      if (!shift) break;

      if (!shift.includes('='))
        throw new Error(`Unknown condition "${shift}"! Conditions should have format key=value without spaces`);

      request.filter.push(shift);
    }
  }

  return request;
}

function tokenize(query: string) {
  return query.split(/\s+/);
}

console.log(processQuery(eval('process.argv[2]')));