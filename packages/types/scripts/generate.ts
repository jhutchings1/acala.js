import { generateInterfaceTypes } from '@polkadot/typegen/generate/interfaceRegistry';
import { generateTsDef } from '@polkadot/typegen/generate/tsDef';
import * as defaultDefinations from '@polkadot/types/interfaces/definitions';

import * as ormlDefinations from '@open-web3/orml-types/interfaces/definitions';

import * as acalaDefinations from '../src/interfaces/definitions';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime, ...substrateDefinations } = defaultDefinations;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { runtime: _runtime, ...ormlModulesDefinations } = ormlDefinations;

const definations = {
  '@polkadot/types/interfaces': substrateDefinations,
  '@open-web3/orml-types/interfaces': ormlModulesDefinations,
  '@acala-network/types/interfaces': acalaDefinations
};

generateTsDef(definations, 'packages/types/src/interfaces', '@acala-network/types/interfaces');
generateInterfaceTypes(definations, 'packages/types/src/interfaceRegistry.ts');
