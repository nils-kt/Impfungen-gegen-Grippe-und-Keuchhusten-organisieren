package org.wirvsvirushackathon.impfung.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.wirvsvirushackathon.impfung.Entity.Postcode;

public interface PostcodeRepository extends MongoRepository<Postcode, String> {
	
	@Query("{'postcode' : {$gt : ?0, $lt : ?1}}")
    public List<Postcode> findByPostcodesBetweenQuery(int start, int end);
}
