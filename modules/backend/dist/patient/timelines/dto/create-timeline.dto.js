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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTimelineDto = exports.LocationTypeEnum = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
var LocationTypeEnum;
(function (LocationTypeEnum) {
    LocationTypeEnum["INDOOR"] = "INDOOR";
    LocationTypeEnum["OUTDOOR"] = "OUTDOOR";
    LocationTypeEnum["HOME"] = "HOME";
    LocationTypeEnum["TRAVELLING"] = "TRAVELLING";
})(LocationTypeEnum = exports.LocationTypeEnum || (exports.LocationTypeEnum = {}));
class CreateTimelineDto {
}
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateTimelineDto.prototype, "from", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateTimelineDto.prototype, "to", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTimelineDto.prototype, "detail", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(LocationTypeEnum),
    __metadata("design:type", String)
], CreateTimelineDto.prototype, "locationType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.ValidateIf)((o) => [LocationTypeEnum.INDOOR, LocationTypeEnum.OUTDOOR].includes(o.locationType)),
    (0, class_validator_1.MinLength)(1),
    __metadata("design:type", String)
], CreateTimelineDto.prototype, "locationName", void 0);
exports.CreateTimelineDto = CreateTimelineDto;
//# sourceMappingURL=create-timeline.dto.js.map