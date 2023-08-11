import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EntitytestServiceBase } from "./base/entitytest.service.base";

@Injectable()
export class EntitytestService extends EntitytestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
