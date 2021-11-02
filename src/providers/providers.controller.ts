import { Controller, Get, Param } from '@nestjs/common';
import { ProvidersService } from './providers.service';

@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Get('/:id')
  getProvider(@Param('id') id: string) {
    return this.providersService.getProviderById({ id });
  }
}
