import { EntityRepository, Repository } from 'typeorm';
import { CareerWeightage } from '../models/careerWeightage';

@EntityRepository(CareerWeightage)
export class CareerWeightageRepository extends Repository<CareerWeightage>  {

    public getCareersForTraits(traits: any) {

        return this.createQueryBuilder("careerWeightage")
            .select("career.name","careerName")
            .addSelect("career.description","description")
            .addSelect("career.scope","scope")
            .addSelect("career.salary","salary")
            .addSelect("courseName.courseName","courseName")
            .leftJoin("careerWeightage.career", "career")
            .leftJoin("career.courseName","courseName")
            .where(`careerWeightage.doer < :doer  and 
                    careerWeightage.persuader < :persuader and 
                    careerWeightage.thinker < :thinker and 
                    careerWeightage.helper < :helper and 
                    careerWeightage.organizer < :organizer`, traits)
            .getRawMany();
    }

}
