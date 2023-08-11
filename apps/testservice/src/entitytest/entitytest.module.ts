import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EntitytestModuleBase } from "./base/entitytest.module.base";
import { EntitytestService } from "./entitytest.service";
import { EntitytestController } from "./entitytest.controller";
import { EntitytestResolver } from "./entitytest.resolver";

@Module({
  imports: [EntitytestModuleBase, forwardRef(() => AuthModule)],
  controllers: [EntitytestController],
  providers: [EntitytestService, EntitytestResolver],
  exports: [EntitytestService],
})
export class EntitytestModule {}
