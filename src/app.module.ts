import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mariadb', // 使用 MariaDB
      host: '127.0.0.1', // 本地数据库地址
      port: 2001, // 指向 Docker 映射的 MariaDB 端口
      username: 'root', // 默认 root 用户
      password: 'fuji-admin', // 根据您的 Docker 环境变量设置
      database: 'role', // 您需要创建的数据库名
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // 生产环境应设置为 false
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
