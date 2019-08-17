import parseHydraDocumentation from '@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation';
import { hydraClient, fetchHydra as baseFetchHydra  } from '@api-platform/admin';

const fetchHydra = (url, options = {}) => baseFetchHydra(url, {...options});
export const dataProvider = api => hydraClient(api, fetchHydra);
export const apiDocumentationParser = entrypoint => parseHydraDocumentation(entrypoint, {});
