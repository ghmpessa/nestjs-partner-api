import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpotsService } from '@app/core';
import { CriarLugarRequest } from './request/criar-lugar.request';
import { AtualizarLugarRequest } from './request/atualizar-lugar';

@Controller('eventos/:eventId/lugares')
export class LugaresController {
  constructor(private readonly spotsService: SpotsService) { }

  @Post()
  create(@Body() criarLugaresRquest: CriarLugarRequest, @Param('eventId') eventId: string) {
    return this.spotsService.create({
      eventId,
      name: criarLugaresRquest.nome,
    });
  }

  @Get()
  findAll(@Param('eventId') eventId: string) {
    return this.spotsService.findAll(eventId);
  }

  @Get(':spotId')
  findOne(@Param('id') spotId: string, @Param('eventId') eventId: string) {
    return this.spotsService.findOne(eventId, spotId);
  }

  @Patch(':spotId')
  update(@Param('id') spotId: string, @Body() atualizarLugaresRequest: AtualizarLugarRequest, @Param('eventId') eventId: string) {
    return this.spotsService.update(eventId, spotId, { name: atualizarLugaresRequest.nome });
  }

  @Delete(':spotId')
  remove(@Param('id') spotId: string, @Param('eventId') eventId: string) {
    return this.spotsService.remove(eventId, spotId);
  }
}
