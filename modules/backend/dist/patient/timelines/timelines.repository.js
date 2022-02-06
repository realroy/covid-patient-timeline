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
exports.TimelineRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let TimelineRepository = class TimelineRepository {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    deleteById(id) {
        return this.prismaService.timeline.delete({ where: { id } });
    }
    create(args) {
        return this.prismaService.timeline.create({ data: args });
    }
    async getMany(args) {
        const timelines = await this.prismaService.timeline.findMany({
            where: {
                patienceId: args.patientId,
            },
            orderBy: [
                {
                    from: 'asc',
                },
            ],
        });
        const dateSet = [
            ...new Set(timelines.map((timeline) => timeline.from.toDateString())),
        ];
        return dateSet.map((date) => [
            date,
            timelines.filter((timeline) => timeline.from.toDateString() === date),
        ]);
    }
};
TimelineRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TimelineRepository);
exports.TimelineRepository = TimelineRepository;
//# sourceMappingURL=timelines.repository.js.map