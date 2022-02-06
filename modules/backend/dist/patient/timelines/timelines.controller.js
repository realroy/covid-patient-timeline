"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelinesController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("../dto");
const dto_2 = require("./dto");
const timelines_service_1 = require("./timelines.service");
let TimelinesController = class TimelinesController {
    constructor(timelinesService) {
        this.timelinesService = timelinesService;
    }
    async getAll(params) {
        return this.timelinesService.getMany({ patientId: params.id });
    }
    create(params, body) {
        return this.timelinesService.create(Object.assign(Object.assign({}, body), { patienceId: params.id }));
    }
    deleteById(params) {
        return this.timelinesService.deleteById(params.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FindOneParamsDto]),
    __metadata("design:returntype", Promise)
], TimelinesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FindOneParamsDto, dto_2.CreateTimelineDto]),
    __metadata("design:returntype", void 0)
], TimelinesController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FindOneParamsDto]),
    __metadata("design:returntype", void 0)
], TimelinesController.prototype, "deleteById", null);
TimelinesController = __decorate([
    (0, common_1.Controller)('patients/:id/timelines'),
    __metadata("design:paramtypes", [timelines_service_1.TimelinesService])
], TimelinesController);
exports.TimelinesController = TimelinesController;
//# sourceMappingURL=timelines.controller.js.map