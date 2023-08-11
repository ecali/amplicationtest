import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EntitytestService } from "./entitytest.service";
import { EntitytestControllerBase } from "./base/entitytest.controller.base";

@swagger.ApiTags("entitytests")
@common.Controller("entitytests")
export class EntitytestController extends EntitytestControllerBase {
  constructor(
    protected readonly service: EntitytestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
