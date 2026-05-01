import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"2026-02-01","projectId":"kcs5x4q7","dataset":"dev","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
