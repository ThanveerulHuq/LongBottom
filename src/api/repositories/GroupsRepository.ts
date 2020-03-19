import { EntityRepository, Repository } from 'typeorm';
import { Groups } from '../models/Groups';

@EntityRepository(Groups)
export class GroupsRepository extends Repository<Groups>  {

}

