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
exports.TimelinesResolver = void 0;
const common_1 = require("@nestjs/common");
const type_graphql_1 = require("type-graphql");
const type_graphql_2 = require("@generated/type-graphql");
const timelines_service_1 = require("./timelines.service");
const types_1 = require("./types");
let TimelinesResolver = class TimelinesResolver {
    constructor(timelinesService) {
        this.timelinesService = timelinesService;
    }
    async timelines(patientId) {
        return this.timelinesService.getMany({ patientId });
    }
    async removeTimeline(id) {
        return this.timelinesService.deleteById(id);
    }
    async addTimeline(data) {
        return this.timelinesService.create(data);
    }
};
__decorate([
    (0, type_graphql_1.Query)((returns) => [type_graphql_2.Timeline]),
    __param(0, (0, type_graphql_1.Arg)('patientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TimelinesResolver.prototype, "timelines", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => type_graphql_2.Timeline),
    __param(0, (0, type_graphql_1.Arg)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TimelinesResolver.prototype, "removeTimeline", null);
__decorate([
    (0, type_graphql_1.Mutation)((returns) => type_graphql_2.Timeline),
    __param(0, (0, type_graphql_1.Arg)('data')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [types_1.AddTimelineInputType]),
    __metadata("design:returntype", Promise)
], TimelinesResolver.prototype, "addTimeline", null);
TimelinesResolver = __decorate([
    (0, common_1.Injectable)(),
    (0, type_graphql_1.Resolver)(),
    __metadata("design:paramtypes", [timelines_service_1.TimelinesService])
], TimelinesResolver);
exports.TimelinesResolver = TimelinesResolver;
//# sourceMappingURL=timelines.resolver.js.map