import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvidersModule } from './providers/providers.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ProvidersModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
