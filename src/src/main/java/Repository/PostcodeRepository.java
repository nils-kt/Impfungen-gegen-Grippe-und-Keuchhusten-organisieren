package Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.wirvsvirushackathon.impfung.Entity.Postcode;

public interface PostcodeRepository extends MongoRepository<Postcode, String> {

}
