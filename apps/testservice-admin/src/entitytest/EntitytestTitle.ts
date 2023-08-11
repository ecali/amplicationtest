import { Entitytest as TEntitytest } from "../api/entitytest/Entitytest";

export const ENTITYTEST_TITLE_FIELD = "label";

export const EntitytestTitle = (record: TEntitytest): string => {
  return record.label || String(record.id);
};
