import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonModule } from './person/person.module';
import { HobbyModule } from './hobby/hobby.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      cors: (req, callback) => {
        // const origin = req.header('Origin');
        // TODO cors logic

        callback(null, { origin: true });
      },
      sortSchema: true,
      playground: JSON.parse(process.env.GRAPHQL_PLAYGROUND),
      debug: JSON.parse(process.env.GRAPHQL_DEBUG),
    }),
    PersonModule,
    HobbyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
