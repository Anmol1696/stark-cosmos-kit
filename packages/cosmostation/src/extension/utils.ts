import { ClientNotExistError } from '@cosmos-kit/core';
import { Cosmos, cosmos, InstallError } from '@cosmostation/extension-client';

export const getCosmostationFromExtension: () => Promise<
  Cosmos | undefined
> = async () => {
  try {
    return await cosmos();
  } catch (e) {
    if (e instanceof InstallError) {
      throw ClientNotExistError;
    }
  }
};
