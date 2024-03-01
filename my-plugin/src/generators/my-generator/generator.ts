import {
  logger,
  Tree,
} from '@nx/devkit';
import { MyGeneratorGeneratorSchema } from './schema';

export async function myGeneratorGenerator(
  tree: Tree,
  options: MyGeneratorGeneratorSchema
) {
  logger.info(`Provided name is ${options.name} and it has a length of ${options.name.length}`);
}

export default myGeneratorGenerator;
